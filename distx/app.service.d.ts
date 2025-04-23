import { Repository } from 'typeorm';
import { Card } from './app.entity';
export declare class AppService {
    private cardRepository;
    constructor(cardRepository: Repository<Card>);
    findAll(): Promise<Card[]>;
    addOrUpdate(params: any): void;
}
