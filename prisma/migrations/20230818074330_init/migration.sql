-- CreateEnum
CREATE TYPE "Transition" AS ENUM ('FORWARD', 'REVERSE', 'ROTATE', 'EXPAND', 'SHRINK', 'COMPLETE');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "lang_default" TEXT NOT NULL DEFAULT 'ja',

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Work" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "authorId" TEXT NOT NULL,
    "date_published" TIMESTAMP(3) NOT NULL,
    "date_modified" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Work_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Step" (
    "id" TEXT NOT NULL,
    "workId" INTEGER NOT NULL,
    "order" INTEGER NOT NULL,
    "figure_default" TEXT NOT NULL DEFAULT 'vector',
    "figure_vector" TEXT,
    "figure_photo" TEXT,
    "figure_video" TEXT,
    "caption" TEXT,
    "scale_default" DECIMAL(65,30) NOT NULL DEFAULT 100,
    "position_default" DECIMAL(65,30)[] DEFAULT ARRAY[0, 0]::DECIMAL(65,30)[],
    "transition" "Transition" NOT NULL DEFAULT 'FORWARD',
    "transition_caption" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Step_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_name_key" ON "User"("name");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Work_title_key" ON "Work"("title");

-- AddForeignKey
ALTER TABLE "Work" ADD CONSTRAINT "Work_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Step" ADD CONSTRAINT "Step_workId_fkey" FOREIGN KEY ("workId") REFERENCES "Work"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
