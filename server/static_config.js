// @flow
import fs from "fs";

export const cacheTtl /*: number */ = 0; // Seconds
export const appPaths = () /*: Array<string> */ => {
  const appContents = fs.readFileSync("./js/App.js", "utf8");
  const keyValues = appContents.match(/path=".+"/g);
  const paths /*: Array<string>*/ = [];
  if (Array.isArray(keyValues)) {
    keyValues.forEach((currentElement /*: string */) /*: void */ => {
      const [key, value] = currentElement.split("=");
      paths.push(value.replace(/\"/g, ""));
    });
  }
  return paths;
};
export const unCachedUrls /*: Array<string> */ = ["/people/tim"];
