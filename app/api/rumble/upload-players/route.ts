import { NextRequest, NextResponse } from 'next/server';
import { parse } from 'csv-parse';
import prisma from '@/lib/prisma';
import { RoyalRumblePlayer } from '@prisma/client';

export async function POST(request: NextRequest) {
  const data = await request.formData();
  const file = data.get('file');
  const tag = data.get('tag') as string;

  if (!file) {
    return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });
  }

  const playerWithTag = await prisma.royalRumblePlayer.findFirst({ where: { tag }})
  if (playerWithTag) {
    return NextResponse.json({ error: `Tag '${tag}' already exists. Choose a unique tag.` }, { status: 400 });
  }

  const text = await file.text();
  const records: RoyalRumblePlayer[] = [];

  return await new Promise((resolve, reject) => {
    parse(text, {
      columns: true,
      skip_empty_lines: true
    }, async (err, output) => {
      if (err) {
        return NextResponse.json({ error: 'Error parsing CSV' }, { status: 500 });
      }

      for (const record of output) {
        const id = record['PID'].trim()
        const player = record['PLAYER'].trim()
        const wrestlerName = record['WRESTLER NAME'].trim()
        records.push({
          id,
          tag,
          player,
          wrestlerName,
        });
      }
      try {
        await prisma.royalRumblePlayer.createMany({
          data: records,
          skipDuplicates: true
        });
        resolve(NextResponse.json({ message: `${records.length} players created successfully.` }, { status: 200 }))
      } catch (error) {
        reject(NextResponse.json({ error: `Error creating players. ${error}` }, { status: 500 }));
      }
    });
  })
}