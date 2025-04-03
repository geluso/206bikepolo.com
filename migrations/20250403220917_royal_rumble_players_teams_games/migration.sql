-- CreateTable
CREATE TABLE "RoyalRumblePlayer" (
    "id" TEXT NOT NULL,
    "player" TEXT NOT NULL,
    "wrestlerName" TEXT NOT NULL,

    CONSTRAINT "RoyalRumblePlayer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RoyalRumbleTeam" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL DEFAULT '',
    "series" TEXT NOT NULL,
    "player1Id" TEXT NOT NULL,
    "player2Id" TEXT NOT NULL,
    "player3Id" TEXT NOT NULL,

    CONSTRAINT "RoyalRumbleTeam_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RoyalRumbleGame" (
    "id" TEXT NOT NULL,
    "isComplete" BOOLEAN NOT NULL DEFAULT false,
    "series" TEXT NOT NULL,
    "roundNumber" INTEGER NOT NULL,
    "gameNumber" INTEGER NOT NULL,
    "team1Id" TEXT NOT NULL,
    "team2Id" TEXT NOT NULL,
    "team1Player1Points" INTEGER NOT NULL DEFAULT 0,
    "team1Player2Points" INTEGER NOT NULL DEFAULT 0,
    "team1Player3Points" INTEGER NOT NULL DEFAULT 0,
    "team2Player1Points" INTEGER NOT NULL DEFAULT 0,
    "team2Player2Points" INTEGER NOT NULL DEFAULT 0,
    "team2Player3Points" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "RoyalRumbleGame_pkey" PRIMARY KEY ("id")
);
