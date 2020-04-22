import {Express, Request, Response} from "express";

export class Server {

    private app: Express;

    // initializing routes
    constructor(app: Express) {
        this.app = app;

        this.app.get("/api", (req: Request, res: Response): void => {
            res.send("Hello from the API");
        })
    }

    public start(port: number): void {
        this.app.listen(port, () => console.log(`Server listening on port ${port}`));
    }

}