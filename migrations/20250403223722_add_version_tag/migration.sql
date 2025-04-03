/*
  Warnings:

  - Added the required column `tag` to the `RoyalRumblePlayer` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "RoyalRumblePlayer" ADD COLUMN     "tag" TEXT NOT NULL;
