import{IncomingMessage, ServerResponse}from "http"
import fs from "fs"
import path from "path"

interface podcastJsonModel{
    podcastNAME:string;
    episode: string;
    videoID:string;
    categories: string[];
}

const  writePodcast= path.join(__dirname, "../data/podcast.json");

export const podcastData = async (): Promise <podcastJsonModel[]> => {
    const data = fs.readFileSync(writePodcast, "utf-8")
    const jsonFile = JSON.parse(data)
    return jsonFile;
}