import App from './App';

import { createRenderFunction } from "svelte-draft/dist/utility";

const render = createRenderFunction(document.body, App, null);

export default render;