import { httpRouter } from 'convex/server'
import { httpAction } from './_generated/server'
import { internal } from './_generated/api'

const http = httpRouter()

http.route({
  path: '/user-register',
  method: 'POST',
  handler: httpAction(async (ctx, request) => {
    try {
      const args = await request.json()

      for (const prop in args) {
        if (
          args[prop] === null ||
          args[prop] === undefined ||
          args[prop] === ''
        ) {
          throw new Error(`please ${prop} enter the value`)
        }
      }

      const data = await ctx.runAction(internal.useractions.register, {
        ...args,
        role: 'user',
      })

      return new Response(JSON.stringify(args), {
        status: 200,
        headers: new Headers({
          // e.g. https://mywebsite.com, configured on your Convex dashboard
          'Access-Control-Allow-Origin': '*',
          Vary: 'origin',
        }),
      })
    } catch (err: any) {
      console.error(err)
      return new Response(err, {
        status: 400,
      })
    }
  }),
})

http.route({
  path: '/delivery-register',
  method: 'POST',
  handler: httpAction(async (ctx, request) => {
    try {
      const args = await request.json()

      for (const prop in args) {
        if (
          prop !== 'block' &&
          prop !== 'address' &&
          (args[prop] === null || args[prop] === undefined || args[prop] === '')
        ) {
          throw new Error(`Please enter a value for ${prop}`)
        }
      }
      const data = await ctx.runAction(internal.useractions.register, {
        ...args,
        role: 'delevery',
      })
      return new Response(JSON.stringify(args), {
        status: 200,
        headers: new Headers({
          // e.g. https://mywebsite.com, configured on your Convex dashboard
          'Access-Control-Allow-Origin': '*',
          Vary: 'origin',
        }),
      })
    } catch (err) {
      console.error(err)
      return new Response('something went wrong', {
        status: 400,
      })
    }
  }),
})
export default http
