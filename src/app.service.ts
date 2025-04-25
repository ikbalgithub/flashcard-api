import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Card } from './app.entity' 
import { GoogleGenAI } from "@google/genai";

@Injectable() export class AppService {
  constructor(@InjectRepository(Card) private cardRepository: Repository<Card>){}

  findAll(category:string) {
    if(category != ''){
      return this.cardRepository.find({
        where:{
          addedAt:`${category}`
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

  async runPrompter(params:string){
    const ai = new GoogleGenAI({apiKey:"AIzaSyBv69qTEYVQ2XwdRVy6XbIrChC3kVv-8oA"})
    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: `
        Sebutkan setiap kata yang terdapat pada kalimat ${params} dengan format:
        bentuk kamus dari kata tersebut - romaji - maknanya secara singkat 
      `,
    });

    return JSON.stringify(response.text)
  }
}
