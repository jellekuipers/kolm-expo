import { count } from "drizzle-orm";

import { user } from "~/db/schema";
import { createTRPCRouter, protectedProcedure } from "~/trpc/init";

export const statsRouter = createTRPCRouter({
  getStats: protectedProcedure.query(async ({ ctx }) => {
    const [users] = await ctx.db.select({ count: count() }).from(user);

    return {
      users: users.count,
    };
  }),
});
