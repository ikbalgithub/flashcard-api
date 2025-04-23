import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity() export class Card {
  @PrimaryGeneratedColumn('uuid') id: string;

  @Column({type:"varchar",length: 255}) kanji: string;

  @Column({type:"varchar",length:255}) furigana:string

  @Column({type:'text'}) mean:string

  @Column({type:'text'}) context:string

  @Column({type:'text'}) romaji:string

  @Column({type:'text'}) addedAt:string
}

