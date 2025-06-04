import {IncomingMessage, ServerResponse} from "http"
import { podcastData } from "../data/datapodcast"

export const filterEpisodes = async (podcastName:string) =>{
    const data = await podcastData(podcastName);
    return data;
}