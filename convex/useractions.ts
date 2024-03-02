import { action } from './_generated/server'
import { v } from 'convex/values'
import { internal } from './_generated/api'
export const register = action({
  args: {
    username: v.string(),
    name: v.string(),
    phone: v.number(),
    password: v.string(),
    preferredLanguage: v.string(),
    state: v.string(),
    city: v.string(),
    address: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    // do something with `args.a` and `args.b`

    try {
      const data = await ctx.runMutation(internal.user.register, args)
      // optionally return a value
      return 'success'
    } catch (err) {
      console.log('errdssd', err)
      throw new Error('something went worng while registering')
    }
  },
})