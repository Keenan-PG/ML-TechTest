import {Express, Request, Response} from "express"
import express from "express";
import * as path from "path";

export class Server {

    private app: Express;

    constructor(app: Express) {
        this.app = app;
    
        // setting front as static asset directory - express will serve from here
        this.app.use(express.static(path.resolve("./") + "/build/front/build"));

        // importing routes module & passing in app (to set API Endpoints AFTER statically serving front end)
        require('./routes/order.routes')(app);
    
        // wildcard to bring any unmanaged routes to react app
        this.app.get("*", (req: Request, res: Response): void => {
            res.sendFile(path.resolve("./") + "/build/front/build/index.html");
        });
    }

    public start(port: number): void {
        this.app.listen(port, () => console.log(`Server listening on port ${port}`));
    }

}