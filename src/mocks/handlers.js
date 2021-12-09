import { rest } from "msw";
import { data } from "./data";

 const handlers = [
  rest.get("https://dog.ceo/api/breeds/image/random", (req, res, ctx) => {
    return res(ctx.json(data));
  }),
];


export default handlers;