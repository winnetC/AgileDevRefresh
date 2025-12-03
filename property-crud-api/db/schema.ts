import { mysqlTable, serial, varchar, decimal, mysqlEnum } from 'drizzle-orm/mysql-core';

export const property = mysqlTable('property', {
    id: serial().primaryKey(),
    title: varchar({ length: 255 }).notNull(),
    price: decimal({ precision: 10, scale: 2 }).notNull(),
    status: mysqlEnum('status', ['available', 'sold', 'pending']).notNull()
});