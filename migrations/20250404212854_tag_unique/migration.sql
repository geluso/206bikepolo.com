/*
  Warnings:

  - A unique constraint covering the columns `[tag]` on the table `RoyalRumbleTagSettings` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "RoyalRumbleTagSettings_tag_key" ON "RoyalRumbleTagSettings"("tag");
