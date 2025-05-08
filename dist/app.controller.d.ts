import { AppService } from './app.service';
export declare class AppController {
    private appService;
    constructor(appService: AppService);
    findAll(category: string): Promise<import("./app.entity").Card[]>;
    add(params: any): void | "added";
    update(params: any): void | "updated";
    delete(id: any): void;
    findByCriteria(criteria: any): Promise<import("./app.entity").Card[]>;
    test(): {
        works: boolean;
    };
}
