/*
  Warnings:

  - You are about to drop the column `currentRound` on the `RoyalRumbleTournamentState` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "RoyalRumbleTournamentState" DROP COLUMN "currentRound",
ALTER COLUMN "currentTag" SET DEFAULT 'default',
ALTER COLUMN "currentSeries" SET DEFAULT 'round1';
