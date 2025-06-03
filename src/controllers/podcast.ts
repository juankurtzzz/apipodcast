import {IncomingMessage, ServerResponse} from 'http'


export const getListEpisodes = async (req:IncomingMessage, res:ServerResponse) => {
    res.writeHead(200, {"Content-Type": "aplication/json"});
    res.end(JSON.stringify({
        nome: "Juan"
    }))
}