import { p as patchBrowser, b as bootstrapLazy } from './index-2650486f.js';
import { g as globalScripts } from './app-globals-0f993ce5.js';

patchBrowser().then(options => {
  globalScripts();
  return bootstrapLazy([["my-component",[[0,"my-component",{"page":[32]}]]],["context-consumer",[[0,"context-consumer",{"context":[16],"renderer":[16],"subscribe":[16],"unsubscribe":[32]}]]],["my-variable",[[1,"my-variable",{"jsonata":[1],"data":[8],"promise":[32],"resolvePromise":[32]}]]],["sqh-provider",[[4,"sqh-provider",{"sq_state":[8],"consumers":[32]},[[0,"sq-stencil:mountConsumer","mountConsumer"]]]]]], options);
});
