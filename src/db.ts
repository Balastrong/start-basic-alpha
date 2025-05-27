import { neon } from "@neondatabase/serverless";
import "dotenv/config";
import { drizzle } from "drizzle-orm/neon-http";
import { integer, pgTable, text } from "drizzle-orm/pg-core";

const connectionString = process.env.DATABASE_URL!;

export const sql = neon(connectionString);

export const db = drizzle(sql);

export const eventTable = pgTable("events", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: text().notNull(),
});
