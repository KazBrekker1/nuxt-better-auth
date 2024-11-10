import { betterAuth } from "better-auth";
import { passkey } from "better-auth/plugins";
import { Pool } from "pg";

export const auth = betterAuth({
  database: new Pool({
    connectionString: process.env.AUTH_DATABASE_URL,
  }),
  emailAndPassword: {
    enabled: true,
    minPasswordLength: 8,
    maxPasswordLength: 100,
  },
  plugins: [passkey()],
});
