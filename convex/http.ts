import { httpRouter } from 'convex/server'
import { httpAction } from './_generated/server'
const http = httpRouter()

http.route({
  path: '/test',
  method: 'GET',
  handler: httpAction(async (ctx, request) => {
    try {
      return new Response(null, {
        status: 200,
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
