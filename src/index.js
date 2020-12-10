import { compose, pipe } from "lodash/fp";

let input = "   Javascript  ";

const trim = (str) => str.trim();
const wrap = (type) => (str) => `<${type}>${str}</${type}>`; // currying
const toLowerCase = (str) => str.toLowerCase();

const transform = pipe(trim, toLowerCase, wrap("div"));
const transformedOutput = transform(input);

console.log(transformedOutput);
