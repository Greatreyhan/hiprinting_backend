/*
  Warnings:

  - Added the required column `whatsapp_number` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `users` ADD COLUMN `whatsapp_number` VARCHAR(20) NOT NULL;