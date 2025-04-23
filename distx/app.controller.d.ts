import { AppService } from './app.service';
export declare class AppController {
    private appService;
    constructor(appService: AppService);
    findAll(): Promise<import("./app.entity").Card[]>;
    add(params: any): void;
    update(params: any): void;
}
