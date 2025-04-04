/*
  Warnings:

  - The primary key for the `RoyalRumblePlayer` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "RoyalRumblePlayer" DROP CONSTRAINT "RoyalRumblePlayer_pkey",
ADD CONSTRAINT "RoyalRumblePlayer_pkey" PRIMARY KEY ("tag", "id");
