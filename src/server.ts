import * as http from "http";
import {IncomingMessage, ServerResponse} from "node:http";

const server = http.createServer((req:IncomingMessage, res:http.ServerResponse) => {}
)

server.listen(process.env.SERVER_PORT,
    () => console.log(`Server started at port ${process.env.SERVER_PORT}`));