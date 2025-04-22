/*
  Warnings:

  - You are about to alter the column `status` on the `issuse` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `Enum(EnumId(0))`.

*/
-- AlterTable
ALTER TABLE `issuse` MODIFY `status` ENUM('OPEN', 'IN_PROGRESS', 'CLOSED') NOT NULL DEFAULT 'OPEN';
