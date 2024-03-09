import { FastifyRequest, FastifyReply } from "fastify"
import { CreatePlayerService } from '../services/CreatePlayerService'

class CreatePlayerController{
  async handle(request: FastifyRequest, reply: FastifyReply){
    
    const {name, age, img, position, stars} = request.body as {name: string, age: number, img: string, position: string, stars: number}
    
    const playerService = new CreatePlayerService()
    const player = await playerService.execute({ name, age, img, position, stars })
    reply.send(player)
  }
}

export { CreatePlayerController }