/*
  Warnings:

  - Added the required column `tag` to the `RoyalRumbleGame` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tag` to the `RoyalRumbleTeam` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "RoyalRumbleGame" ADD COLUMN     "tag" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "RoyalRumbleTeam" ADD COLUMN     "tag" TEXT NOT NULL;
