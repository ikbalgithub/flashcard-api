import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Card } from './app.entity' 


var mysqlConfig = TypeOrmModule.forRoot({
  type: 'mysql',
  host: 'sql7.freesqldatabase.com',
  port: 3306,
  username: 'sql7774806',
  password: '5V5Hjptfu8',
  database: 'sql7774806',
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
