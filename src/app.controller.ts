import { Controller,Get,Post,Body,Put,Delete,Param,Query } from '@nestjs/common';
import { AppService } from './app.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';


@Controller() export class AppController {
  constructor(private appService:AppService,){}
  @Get() findAll(@Query('category') category:string) {
    return this.appService.findAll(category)
  }

  @Post() add(@Body() params:any){
    return this.appService.addOrUpdate(
      params
    )

    return 'added'
  }
 
  @Put() update(@Body() params:any){
    return this.appService.addOrUpdate(
      params
    )

    return 'updated'
  }

  @Delete(':id') delete(@Param('id') id: any){
    return this.appService.remove(id)
  }

  @Get(':criteria') findByCriteria(@Param('criteria') criteria: any) {
    return this.appService.findByCriteria(criteria)
  }

  @Get('/test') test(){
    return {
      'works':true
    }
  }
}

