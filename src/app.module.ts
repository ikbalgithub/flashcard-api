import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Card } from './app.entity' 


var mysqlConfig = TypeOrmModule.forRoot({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '',
  database: 'flashcard-api',
  entities: [Card],
  synchronize: true,
})

@Module({
  imports: [
    mysqlConfig,
    TypeOrmModule.forFeature([Card])
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
