import { initApps, logger, bodyParser, json, koaRouter } from "@mpecarina/koa-template"
import path from "path"

const { NODE_ENV, APP_PORT_0, APP_PORT_1 } = process.env
const postmanProxyRoutes = path.join(__dirname, `../service_definitions/postman-echo-routes-${NODE_ENV}.yaml`)
const exampleHelloRoutes = path.join(__dirname, `../service_definitions/example-hello-routes-${NODE_ENV}.yaml`)
const exampleControllers = path.join(__dirname, `./controllers`)

const [app, metricsApp] = initApps([
  logger(),
  bodyParser(),
  json({ pretty: false, param: "pretty", spaces: 2 }),
  koaRouter(postmanProxyRoutes),
  koaRouter(exampleHelloRoutes, exampleControllers),
])

app.listen(APP_PORT_0 || 3000)
metricsApp.listen(APP_PORT_1 || 3001)
