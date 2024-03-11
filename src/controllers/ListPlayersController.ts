import { FastifyRequest, FastifyReply } from "fastify"
import { ListPlayersService } from "../services/ListPlayersService"

class ListPlayersController{
  async handle(request: FastifyRequest, reply: FastifyReply){

    const listplayersService = new ListPlayersService()

    const players = await listplayersService.execute()

    reply.send(players)

  }
}

export { ListPlayersController }