import { Repository } from 'typeorm';
import { Card } from './app.entity';
export declare class AppService {
    private cardRepository;
    constructor(cardRepository: Repository<Card>);
    findAll(category: string): Promise<Card[]>;
    addOrUpdate(params: any): void;
    remove(id: string): void;
    findByCriteria(c: string): Promise<Card[]>;
    runPrompter(params: string): Promise<string>;
}
