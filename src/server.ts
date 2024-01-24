import express, { Request, Response, NextFunction } from "express";
import "express-async-errors";
import cors from "cors";
import  path  from "path";

import { router } from "./routes";
const server = express();

server.use(express.json());
server.use(cors())
server.use(router);
server.use(
    '/files',
    express.static(path.resolve(__dirname,'..','tmp'))
)

server.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    if(err instanceof Error){
        //Se for uma instancia do tipo erro
        return res.status(400).json({
            error: err.message
        })
    }

    return res.status(500).json({
        status: "erro",
        message: `Erro interno no servidor!`
    })
})

server.listen(3333, () => {
    console.log("Servidor online...")
})

