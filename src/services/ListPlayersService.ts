import prismaClient from '../prisma'

class ListPlayersService{
  async execute(){

    const players = await prismaClient.player.findMany()

    return players

  }
}

export { ListPlayersService }