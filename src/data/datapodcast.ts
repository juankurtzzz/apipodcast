import fs from "fs"
import path from "path"


interface podcastJsonModel{
    podcastNAME:string;
    episode: string;
    videoID:string;
    categories: string[];
}

const  writePodcast= path.join(__dirname, "../data/podcast.json");

export const podcastData = async (podcastName?:string): Promise <podcastJsonModel[]> => {
    const data = fs.readFileSync(writePodcast, "utf-8")
    let jsonFile = JSON.parse(data)

    if(podcastName){
        jsonFile = jsonFile.filter((podcast:podcastJsonModel) => podcast.podcastNAME === podcastName)
    }

    return jsonFile;
}
