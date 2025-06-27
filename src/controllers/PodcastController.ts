import {IncomingMessage, ServerResponse} from "http";
import {serviceListEpisodesService} from  '../services/findAllEpisodesService'

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
