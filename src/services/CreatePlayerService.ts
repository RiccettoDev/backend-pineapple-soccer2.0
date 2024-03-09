import prismaClient from "../prisma";

interface CreatePlayerProps{
  name: string 
  age: number 
  img: string 
  position: string 
  stars: number
}

class CreatePlayerService{
  async execute({ name, age, img, position, stars }: CreatePlayerProps){
    
    if(!name || !age || !img || !position || !stars){
      throw new Error('Fill in all fields!')
    }

    const player = await prismaClient.player.create({
      data: {
        name, 
        age, 
        img, 
        position, 
        stars,
        status: true
      }
    })

    return player
  }
}

export { CreatePlayerService }