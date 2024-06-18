import { registerApplication, start } from "single-spa";

registerApplication(
    'card-designer',
    () => import("../src/card-designer.app.js"),
    () => location.pathname.startsWith('/')
)

start()