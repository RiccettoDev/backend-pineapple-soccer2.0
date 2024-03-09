import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from 'fastify'
import { CreatePlayerController } from './controllers/CreatePlayerController'

export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions){
  // route test
  fastify.get('/test', async (request: FastifyRequest, reply: FastifyReply) => {
    return {ok: true}
  })

  // route POST player
  fastify.post('/player', async (request: FastifyRequest, reply: FastifyReply) => {
    return new CreatePlayerController().handle(request, reply)
  })
}