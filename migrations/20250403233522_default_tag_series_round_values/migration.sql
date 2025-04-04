/*
  Warnings:

  - The `currentRound` column on the `RoyalRumbleTournamentState` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "RoyalRumbleTournamentState" ALTER COLUMN "currentTag" SET DEFAULT 'live',
ALTER COLUMN "currentSeries" SET DEFAULT 'day1',
DROP COLUMN "currentRound",
ADD COLUMN     "currentRound" INTEGER NOT NULL DEFAULT 1;
