import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity() export class Card {
  @PrimaryGeneratedColumn('uuid') id: string;

  @Column({type:"varchar",length: 255}) original: string;

  @Column({type:'text'}) romaji:string

  @Column({type:'text'}) mean:string

  @Column({type:'text'}) addedAt:string
}

