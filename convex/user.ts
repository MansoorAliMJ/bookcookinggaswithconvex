import { v } from 'convex/values'
import { internalMutation, query } from './_generated/server'

export const register = internalMutation({
  args: {
    username: v.string(),
    name: v.string(),
    phone: v.string(),
    password: v.string(),
    preferredLanguage: v.string(),
    state: v.string(),
    city: v.string(),
    area: v.optional(v.string()),
    block: v.optional(v.string()),
    address: v.optional(v.string()),
    token: v.optional(v.string()),
    role: v.string(),
  },

  handler: async (ctx, args) => {
    console.log(args)
    return await ctx.db.insert('users', {
      ...args,
      active: true,
      country: 'KW',
    })
  },
})
