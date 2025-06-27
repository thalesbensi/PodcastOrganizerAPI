import {repositoryPodcast} from "../../repositories/PodcastRepository";


export const serviceListEpisodesService = async () => {
    const data = await repositoryPodcast();
    return data
}