import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Card } from './app.entity' 

@Injectable() export class AppService {
  constructor(@InjectRepository(Card) private cardRepository: Repository<Card>){}

  findAll(category:string) {
    if(category === 'today'){
      var _date = new Date()
      var year = _date.getFullYear()
      var month = _date.getMonth() + 1
      var date = _date.getDate()

      return this.cardRepository.find({
        where:{
          addedAt:`${year}/${month}/${date}`
        }
      })
    }
    if(category === 'yesterday'){
      var _date = new Date()
      var year = _date.getFullYear()
      var month = _date.getMonth() + 1
      var date = _date.getDate() - 1

      return this.cardRepository.find({
        where:{
          addedAt:`${year}/${month}/${date}`
        }
      })
    }
    if(category === 'all'){
      return this.cardRepository.find()
    }
  }

  addOrUpdate(params:any){
    var newCard = new Card()

    Object.keys(params).map(key => {
      newCard[key] = params[key]
    })

    this.cardRepository.save(newCard)
  }

  remove(id:string){
    this.cardRepository.delete(id)
  }

  findByCriteria(c:string){
    return this.cardRepository
    .createQueryBuilder('card')
    .where('card.romaji REGEXP :c',{c:`^${c}`})
    .getMany()
  }
}
