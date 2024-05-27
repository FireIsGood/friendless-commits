import { Elysia, NotFoundError } from "elysia";
import { html } from "@elysiajs/html";
import { staticPlugin } from "@elysiajs/static";
import App from "./App";
import Generator from "./routes/Generator";
import { ListType, hashToMessage, messageToHash, randomMessage } from "@/scripts/util";

const app = new Elysia()
  .use(html())
  .use(staticPlugin())
  .get("/", ({ redirect }) => redirect("all"))
  .get("/:mode", ({ params: { mode }, query }) => {
    if (!["all", "safe", "unsafe"].includes(mode)) {
      throw new NotFoundError();
    }

    const message = randomMessage(mode as ListType);
    const permalink = messageToHash(message);

    const textOnlyMode = query?.text !== undefined;
    if (textOnlyMode) {
      return message;
    }

    if (permalink === null) {
      return new NotFoundError();
    }

    return App(Generator({ message, permalink }, mode as ListType));
  })
  .get("/p/:hash", ({ params: { hash } }) => {
    const permalink = hash;
    const message = hashToMessage(hash);
    if (message === null) {
      return new NotFoundError();
    }

    return App(Generator({ message, permalink }));
  })
  .listen(3000);

console.log(`🦊 Elysia is losing all your friends at ${app.server?.hostname}:${app.server?.port}`);
