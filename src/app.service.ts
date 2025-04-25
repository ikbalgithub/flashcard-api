import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Card } from './app.entity' 
import { GoogleGenAI } from "@google/genai";

@Injectable() export class AppService {
  constructor(@InjectRepository(Card) private cardRepository: Repository<Card>){}

  findAll(category:string) {
    if(category != ''){
      if(category === 'all'){
        return this.cardRepository.find()
      }
      else{
        return this.cardRepository.find({
          where:{
            addedAt:`${category}`
          }
        })
      }
     
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
