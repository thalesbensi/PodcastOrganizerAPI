import {repositoryPodcast} from "../../repositories/PodcastRepository";

export const serviceFindByName = async (podcastName: string) => {
    const data = await repositoryPodcast(podcastName);

    return data;
}