import { IncomingMessage, ServerResponse } from "http";
import { podcastData } from "../data/datapodcast";

export const serListEpisodes = async (req: IncomingMessage, res: ServerResponse) => {
  const data = await podcastData();
  return data;
};
