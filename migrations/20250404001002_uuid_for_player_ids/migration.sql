/*
  Warnings:

  - The primary key for the `RoyalRumblePlayer` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Added the required column `spreadsheetPlayerId` to the `RoyalRumblePlayer` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "RoyalRumblePlayer" DROP CONSTRAINT "RoyalRumblePlayer_pkey",
ADD COLUMN     "spreadsheetPlayerId" TEXT NOT NULL,
ADD CONSTRAINT "RoyalRumblePlayer_pkey" PRIMARY KEY ("id");
