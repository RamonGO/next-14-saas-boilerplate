/*
  Warnings:

  - You are about to drop the column `companyId` on the `taxform` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `taxform` DROP FOREIGN KEY `TaxForm_companyId_fkey`;

-- AlterTable
ALTER TABLE `taxform` DROP COLUMN `companyId`;

-- CreateTable
CREATE TABLE `_CompanyToTaxForm` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_CompanyToTaxForm_AB_unique`(`A`, `B`),
    INDEX `_CompanyToTaxForm_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_CompanyToTaxForm` ADD CONSTRAINT `_CompanyToTaxForm_A_fkey` FOREIGN KEY (`A`) REFERENCES `Company`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_CompanyToTaxForm` ADD CONSTRAINT `_CompanyToTaxForm_B_fkey` FOREIGN KEY (`B`) REFERENCES `TaxForm`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
