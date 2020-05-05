// @flow
import fs from "fs";
import path from "path";
/*::
 */

export const readFromCache = (
  url /*: string */,
  cacheTtl /*: number */,
  forceCache /*: boolean */,
) /*: string | false */ => {
  const cachedFilePath = `.${url}/index.html`;
  const fileExists = fs.existsSync(cachedFilePath);
  if (fileExists) {
    const stats = fs.statSync(cachedFilePath);
    const then = Math.floor(stats.mtimeMs / 1000); // seconds
    const now = Math.floor(Date.now() / 1000); // Seconds
    if (now - then < cacheTtl || forceCache === true) {
      return fs.readFileSync(cachedFilePath, "utf8");
    } else {
      return false;
    }
  } else {
    return false;
  }
};

export const writeToCache = (
  url /*: string */,
  renderedOutput /*: string */,
) /*:  void */ => {
  const filePath /*: string */ = `.${url}/index.html`;
  if (!fs.existsSync(path.dirname(filePath))) {
    fs.mkdirSync(path.dirname(filePath), { recursive: true });
  }
  openFile(filePath)
    .then((fd /*: number */) /*: void */ => {
      writeFile(fd, renderedOutput);
    })
    .catch((e /*: Error */) /*: void */ => {
      console.error(e);
    });
};

export const openFile = (filePath /*: string */) /*: Promise<number> */ => {
  return new Promise((resolve, reject) /*: void */ => {
    fs.open(filePath, "w", (
      e /*: ?ErrnoError */,
      fd /*: number */,
    ) /*: void */ => {
      if (e) {
        reject(e);
      } else {
        resolve(fd);
      }
    });
  });
};

export const writeFile = (
  fd /*: number */,
  renderedOutput /*: string */,
) /*: void */ => {
  new Promise((resolve, reject) /*: void */ => {
    fs.write(fd, renderedOutput, 0, "utf8", (
      e /*: ?ErrnoError */,
      written /*: number */,
      string /*: string */,
    ) /*: void */ => {
      if (e) {
        reject(e);
      } else {
        resolve(true);
      }
    });
  }).catch((e /*: Error */) /*: void */ => {
    console.error(e);
  });
};
