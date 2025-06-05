import { IncomingMessage, ServerResponse } from "http";
import { podcastData } from "../data/datapodcast";

export const filterEpisodes = async (
  req: IncomingMessage,
  res: ServerResponse<IncomingMessage>,
  podcastName: string
) => {
  const data = await podcastData(podcastName);
  return data;
};
