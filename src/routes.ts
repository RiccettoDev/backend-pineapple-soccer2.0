import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from 'fastify'
import { CreatePlayerController } from './controllers/CreatePlayerController'
import { ListPlayersController } from './controllers/ListPlayersController'
import { DeletePlayerController } from './controllers/DeletePlayerController'

export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions){
  // route GET test
  fastify.get('/test', async (request: FastifyRequest, reply: FastifyReply) => {
    return {ok: true}
  })

  // route POST player
  fastify.post('/player', async (request: FastifyRequest, reply: FastifyReply) => {
    return new CreatePlayerController().handle(request, reply)
  })

  // route GET players
  fastify.get('/players', async (request: FastifyRequest, reply: FastifyReply) => {
    return new ListPlayersController().handle(request, reply)
  })

  // route DELETE player
  fastify.delete('/player', async (request: FastifyRequest, reply: FastifyReply) => {
    return new DeletePlayerController().handle(request, reply)
  })
}