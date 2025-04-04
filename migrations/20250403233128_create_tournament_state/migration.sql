-- CreateTable
CREATE TABLE "RoyalRumbleTournamentState" (
    "currentTag" TEXT NOT NULL,
    "currentSeries" TEXT NOT NULL,
    "currentRound" TEXT NOT NULL,

    CONSTRAINT "RoyalRumbleTournamentState_pkey" PRIMARY KEY ("currentTag")
);
