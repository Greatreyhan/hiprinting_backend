-- CreateTable
CREATE TABLE `users` (
    `email` VARCHAR(100) NOT NULL,
    `username` VARCHAR(100) NOT NULL,
    `password` VARCHAR(100) NOT NULL,
    `address` VARCHAR(255) NULL,
    `role` ENUM('USER', 'ADMIN') NOT NULL DEFAULT 'USER',
    `token` VARCHAR(100) NULL,
    `create_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`email`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `files` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `order_id` INTEGER NOT NULL,
    `status` ENUM('NOTPRINTED', 'PRINTING', 'PRINTED', 'FAILED') NOT NULL DEFAULT 'NOTPRINTED',
    `link` VARCHAR(100) NOT NULL,
    `total_page` INTEGER NOT NULL,
    `total_BNW` INTEGER NOT NULL,
    `total_NCL` INTEGER NOT NULL,
    `total_FCL` INTEGER NOT NULL,
    `price` INTEGER NOT NULL,
    `size` ENUM('A4', 'F4') NOT NULL DEFAULT 'A4',
    `mode` ENUM('BNW', 'COLOR') NOT NULL DEFAULT 'COLOR',
    `description` VARCHAR(255) NOT NULL,
    `create_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `update_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `orders` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `email_id` VARCHAR(100) NOT NULL,
    `status` ENUM('PROCESS', 'FINISHED', 'DELIVERY', 'DELIVERED', 'FAILED') NOT NULL DEFAULT 'PROCESS',
    `price` INTEGER NOT NULL,
    `type_service` ENUM('COD', 'BOX') NOT NULL,
    `time_delivery` DATETIME(3) NOT NULL,
    `location` VARCHAR(255) NOT NULL,
    `give_receipt` BOOLEAN NOT NULL DEFAULT false,
    `description` VARCHAR(255) NOT NULL,
    `create_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `update_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `files` ADD CONSTRAINT `files_order_id_fkey` FOREIGN KEY (`order_id`) REFERENCES `orders`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `orders` ADD CONSTRAINT `orders_email_id_fkey` FOREIGN KEY (`email_id`) REFERENCES `users`(`email`) ON DELETE RESTRICT ON UPDATE CASCADE;
