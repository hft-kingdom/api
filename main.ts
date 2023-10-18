import "$std/dotenv/load.ts";
import { Application, Router } from "oak";

const authRouter = new Router()
  .get("/sign-in", (ctx) => {
    ctx.response.body = "sign-in";
  })
  .get("/sign-up", (ctx) => {
    ctx.response.body = "sign-up";
  });

const port = +(Deno.env.get("PORT") || 3000);

console.info(`%c\nhttp://localhost:${port}`, "color: green");

await new Application()
  .use(
    new Router()
      .use("/auth", authRouter.routes(), authRouter.allowedMethods())
      .routes(),
  )
  .listen({
    port,
  });
