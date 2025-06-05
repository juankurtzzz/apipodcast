import { IncomingMessage, ServerResponse } from "http";
import { serListEpisodes } from "../services/listepisodes";
import { filterEpisodes } from "../services/filterepisodes";
import { podcastData } from "../data/datapodcast";

export const getListEpisodes = async (
  req: IncomingMessage,
  res: ServerResponse
) => {
  res.writeHead(200, { "Content-Type": "aplication/json" });
  res.end(JSON.stringify(await serListEpisodes(req, res)));
};

export const getFilterEpisodes = async (
  req: IncomingMessage,
  res: ServerResponse
) => {
  const content = await filterEpisodes(req, res, "Fala, Dev!");
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify(content));
};
