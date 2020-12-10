import { compose, pipe } from "lodash/fp";

let input = "   Javascript  ";
let output = "<div>" + input.trim() + "</div>";

const trim = (str) => str.trim();
const wrapInDiv = (str) => `<div>${str}</div>`;
const toLowerCase = (str) => str.toLowerCase();

const result = wrapInDiv(toLowerCase(trim(input)));

const transform = pipe(trim, toLowerCase, wrapInDiv);
const transformedOutput = transform(input);

console.log(transformedOutput);
