import { NextRequest, NextResponse } from 'next/server';
import * as XLSX from 'xlsx';
import prisma from '@/lib/prisma';
import { setTournamentState } from '@/app/rumble/admin/manage-tournament-state/actions';
import getCurrentTag from '@/app/rumble/util/getCurrentTag';

export async function POST(request: NextRequest) {
  const data = await request.formData();
  const file = data.get('file') as File;
  const tag = await getCurrentTag()
  console.log('Creating players with tag', tag)

  if (!file) {
    return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });
  }

  const playerWithTag = await prisma.royalRumblePlayer.findFirst({ where: { tag }})
  if (playerWithTag) {
    return NextResponse.json({ error: `Tag '${tag}' already exists. Choose a unique tag.` }, { status: 400 });
  }

  type JSONRow = { 'PID': string, 'PLAYER': string, 'WRESTLER NAME': string }

  const buffer = await file.arrayBuffer()
  const workbook = XLSX.read(buffer);
  const sheet = workbook.Sheets[workbook.SheetNames[0]];
  const json: JSONRow[] = XLSX.utils.sheet_to_json(sheet)

  const records: {tag: string, spreadsheetPlayerId: string, player: string, wrestlerName: string }[] = [];
  json.forEach(row => {
    const spreadsheetPlayerId = row['PID'].trim()
    const player = row['PLAYER'].trim()
    const wrestlerName = row['WRESTLER NAME'].trim()
    records.push({
      tag,
      spreadsheetPlayerId,
      player,
      wrestlerName,
    });
  })
  try {
    const created = await prisma.royalRumblePlayer.createMany({
      data: records,
      skipDuplicates: true
    });

    await setTournamentState(tag)

    return NextResponse.json({ message: `${records.length} players created successfully.` }, { status: 200 })
  } catch (error) {
    console.error('upload-players', error)
    return NextResponse.json({ error: `Error creating players.` }, { status: 500 });
  }
}