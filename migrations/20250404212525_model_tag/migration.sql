/*
  Warnings:

  - You are about to drop the column `currentSeries` on the `RoyalRumbleTournamentState` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "RoyalRumbleTournamentState" DROP COLUMN "currentSeries";

-- CreateTable
CREATE TABLE "RoyalRumbleTagSettings" (
    "id" TEXT NOT NULL,
    "tag" TEXT NOT NULL,
    "isRound1Up" BOOLEAN NOT NULL DEFAULT false,
    "isRound2Up" BOOLEAN NOT NULL DEFAULT false,
    "isRound3Up" BOOLEAN NOT NULL DEFAULT false,
    "isRound4Up" BOOLEAN NOT NULL DEFAULT false,
    "isRound5Up" BOOLEAN NOT NULL DEFAULT false,
    "isFinalTeamsUp" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "RoyalRumbleTagSettings_pkey" PRIMARY KEY ("id")
);
