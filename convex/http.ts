import { httpRouter } from 'convex/server'
import { httpAction } from './_generated/server'
import { internal } from './_generated/api'

const http = httpRouter()

http.route({
  path: '/register',
  method: 'POST',
  handler: httpAction(async (ctx, request) => {
    try {
      const args = await request.json()

      const data = await ctx.runAction(internal.useractions.register, args)

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
