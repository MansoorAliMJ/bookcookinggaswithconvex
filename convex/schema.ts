import { defineSchema, defineTable } from 'convex/server'
import { v } from 'convex/values'

export default defineSchema({
  users: defineTable({
    username: v.string(),
    name: v.string(),
    phone: v.string(),
    password: v.string(),
    preferredLanguage: v.string(),
    state: v.string(),
    city: v.string(),
    country: v.string(),
    address: v.optional(v.string()),
    photo: v.optional(v.string()),
    role: v.string(),
    active: v.boolean(),
    token: v.optional(v.string()),
  }),
})
