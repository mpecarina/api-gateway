/* eslint-disable no-unused-vars */
import { BaseContext } from "koa"

export const hello = async (ctx: BaseContext) => {
  ctx.status = 200
  ctx.body = { status: "success", msg: `hello ${ctx.query.name || "world"}` }
}
