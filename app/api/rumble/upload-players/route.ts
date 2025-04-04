import { NextRequest, NextResponse } from 'next/server';
import { parse } from 'csv-parse';
import prisma from '@/lib/prisma';
import { RoyalRumblePlayer } from '@prisma/client';
import { setTournamentState } from '@/app/rumble/admin/manage-tournament-state/actions';

export async function POST(request: NextRequest) {
  const data = await request.formData();
  return await new Promise(async (resolve, reject) => {
    const file = data.get('file');
    const tag = data.get('tag') as string;
    console.log('Creating players with tag', tag)

    if (!file) {
      return resolve(NextResponse.json({ error: 'No file uploaded' }, { status: 400 }));
    }

    const playerWithTag = await prisma.royalRumblePlayer.findFirst({ where: { tag }})
    if (playerWithTag) {
      return resolve(NextResponse.json({ error: `Tag '${tag}' already exists. Choose a unique tag.` }, { status: 400 }));
    }

    const text = await file.text();
    const records: RoyalRumblePlayer[] = [];

    parse(text, {
      columns: true,
      skip_empty_lines: true
    }, async (err, output) => {
      if (err) {
        return resolve(NextResponse.json({ error: 'Error parsing CSV' }, { status: 500 }));
      }

      for (const record of output) {
        const spreadsheetPlayerId = record['PID'].trim()
        const player = record['PLAYER'].trim()
        const wrestlerName = record['WRESTLER NAME'].trim()
        records.push({
          tag,
          spreadsheetPlayerId,
          player,
          wrestlerName,
        });
      }
      try {
        const created = await prisma.royalRumblePlayer.createMany({
          data: records,
          skipDuplicates: true
        });
        console.log({created})

        await setTournamentState(tag, 'round1')

        resolve(NextResponse.json({ message: `${records.length} players created successfully.` }, { status: 200 }))
      } catch (error) {
        console.error('upload-players', error)
        resolve(NextResponse.json({ error: `Error creating players.` }, { status: 500 }));
      }
    });
  })
}