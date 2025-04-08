import "dotenv/config";

import { type Config, defineConfig } from "drizzle-kit";

export default defineConfig({
	schema: "./src/db/schema.ts",
	dialect: "postgresql",
	dbCredentials: {
		url: process.env.EXPO_PUBLIC_DATABASE_URL!,
	},
}) satisfies Config;
