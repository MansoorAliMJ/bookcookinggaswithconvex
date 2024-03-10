'use node'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { internalAction } from './_generated/server'
import { v } from 'convex/values'
import { internal } from './_generated/api'
export const register = internalAction({
  args: {
    username: v.string(),
    name: v.string(),
    phone: v.string(),
    password: v.string(),
    preferredLanguage: v.string(),
    state: v.string(),
    city: v.string(),
    area: v.string(),
    block: v.optional(v.string()),
    address: v.optional(v.string()),
    role: v.string(),
  },
  handler: async (ctx, args: any) => {
    // do something with `args.a` and `args.b`
    try {
      let password = await bcrypt.hash(args.password, 8)

      const token = jwt.sign(
        { username: args.username, phone: args.phone },
        'apiuserverify@123',
        {
          expiresIn: '1d', // it will be expired after 10 hours
          //expiresIn: "20d" // it will be expired after 20 days
          //expiresIn: 120 // it will be expired after 120ms
          //expiresIn: "120s" // it will be expired after 120s
        }
      )

      const data = await ctx.runMutation(internal.user.register, {
        ...args,
        password,
        token,
      })
      // optionally return a value
      return 'success'
    } catch (err) {
      console.log('errdssd', err)
      throw new Error('something went worng while registering')
    }
  },
})
