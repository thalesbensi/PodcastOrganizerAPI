import {IncomingMessage, ServerResponse} from "http";
import {serviceListEpisodesService} from '../services/Podcast/findAllEpisodesService'
import {serviceFindByName} from "../services/Podcast/findByNameService";

export const  findAllEpisodes = async (
    req: IncomingMessage,
    res: ServerResponse
) => {
    const content = await serviceListEpisodesService();

    res.writeHead(200, {"Content-Type": "application/json"});
    res.end(
        JSON.stringify(content)
    );
};

export const findByName = async (
    req: IncomingMessage,
    res: ServerResponse
) => {
    const content = await serviceFindByName("flow");

    res.writeHead(200, {"Content-Type": "application/json"});
    res.end(
        JSON.stringify(content)
    );
};
