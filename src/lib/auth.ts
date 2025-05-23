import { expo } from "@better-auth/expo";
import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";

import { db } from "~/db";

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg",
  }),
  emailAndPassword: {
    autoSignIn: false,
    enabled: true,
    requireEmailVerification: false,
  },
  plugins: [expo()],
  trustedOrigins: ["expo://"],
});
