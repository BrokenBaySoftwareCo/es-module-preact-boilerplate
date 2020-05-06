// @flow
import { appPaths } from "./cache_config.js";
import { clearFromCache, restoreIndexFile } from "./cache.js";
/*::
import typeof { appPaths as AppPathsType } from "./cache_config.js";
import {
  clearFromCache as ClearFromCacheType,
  restoreIndexFile as RestoreIndexFileType
} from "./cache.js";
*/

appPaths().forEach((cachePath /*: string */) /*: void */ => {
  if (cachePath !== "/") {
    clearFromCache(cachePath).catch((e /*: Error */) /*: void */ => {
      console.log(e);
    });
  }
});
restoreIndexFile();
