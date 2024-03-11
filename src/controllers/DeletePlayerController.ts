import { FastifyRequest, FastifyReply } from "fastify";
import { DeletePlayerService } from "../services/DeletePlayerService";

class DeletePlayerController{
  async handle(request: FastifyRequest, reply: FastifyReply){

    const { id } = request.query as { id: string }

    const playerService = new DeletePlayerService()

    const player = await playerService.execute({ id })
    
    reply.send(player)

  }
}

export { DeletePlayerController }