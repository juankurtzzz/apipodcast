import { IncomingMessage, ServerResponse } from "http";
import { serListEpisodes } from "../services/listepisodes";

export const getListEpisodes = async (
  req: IncomingMessage,
  res: ServerResponse
) => {
  res.writeHead(200, { "Content-Type": "aplication/json" });
  res.end(JSON.stringify(await serListEpisodes(req, res)));
};


