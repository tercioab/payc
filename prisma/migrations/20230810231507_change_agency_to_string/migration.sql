/*
  Warnings:

  - Made the column `agency` on table `Account` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Account" ALTER COLUMN "agency" SET NOT NULL,
ALTER COLUMN "agency" SET DEFAULT '0001',
ALTER COLUMN "agency" SET DATA TYPE TEXT;
