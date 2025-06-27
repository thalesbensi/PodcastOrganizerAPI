import {IncomingMessage, ServerResponse} from "http";

export const  findAllEpisodes = async (
    req: IncomingMessage,
    res: ServerResponse
) => {
    res.writeHead(200, {"Content-Type": "application/json"});
    res.end(
        JSON.stringify(
            [
                {
                    "podcastName": "flow",
                    "episode": "CBUM – Flow #319",
                    "videoId": "pQSuQmUfS30",
                    "cover": "https://i.ytimg.com/vi/pQSuQmUfS30/maxresdefault.jpg",
                    "link": "https://www.youtube.com/watch?v=pQSuQmUfS30",
                    "categories": ["saúde", "esporte", "bodybuilder"]
                },
                {
                    "podcastName": "flow",
                    "episode": "RUBENS BARRICHELLO – Flow #339",
                    "videoId": "4KDGTdiOV4I",
                    "cover": "https://i.ytimg.com/vi/4KDGTdiOV4I/maxresdefault.jpg",
                    "link": "https://www.youtube.com/watch?v=4KDGTdiOV4I",
                    "categories": ["esporte", "corrida"]
                }
            ]
        )
    );
};
