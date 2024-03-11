import prismaClient from "../prisma";

interface DeletePlayerProps{
  id: string
}

class DeletePlayerService{
  async execute({ id }: DeletePlayerProps){

    if(!id){
      throw new Error('Invalid request!')
    }
    
    const findPlayer = await prismaClient.player.findFirst({
      where: {
        id: id
      }
    })

    if(!findPlayer){
      throw new Error('Player not found!')
    }

    await prismaClient.player.delete({
      where: {
        id: findPlayer.id
      }
    })

    return { message: 'Player successfully deleted!' }
  }
}

export { DeletePlayerService }