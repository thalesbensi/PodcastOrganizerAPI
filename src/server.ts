import * as http from "http";
import {IncomingMessage, ServerResponse} from "node:http";
import {findAllEpisodes} from './controllers/PodcastController'


const server = http.createServer(
    async (req:IncomingMessage, res:http.ServerResponse) => {
        if (req.method === "GET") {
            await findAllEpisodes(req,res);
        }
    }
);

server.listen(process.env.SERVER_PORT,
    () => console.log(`Server started at port ${process.env.SERVER_PORT}`));