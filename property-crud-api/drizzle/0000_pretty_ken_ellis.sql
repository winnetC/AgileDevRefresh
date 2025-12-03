CREATE TABLE `property` (
	`id` serial AUTO_INCREMENT NOT NULL,
	`title` varchar(255) NOT NULL,
	`price` decimal(10,2) NOT NULL,
	`status` enum('available','sold','pending') NOT NULL,
	CONSTRAINT `property_id` PRIMARY KEY(`id`)
);
