import { passkeyClient } from "better-auth/plugins";
import { createAuthClient } from "better-auth/vue";

export const authClient = createAuthClient({
  baseURL: "http://localhost:3000",
  plugins: [passkeyClient()],
});
