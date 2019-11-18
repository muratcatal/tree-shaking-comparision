import * as math from "./math"; // will be removed in all bundlers
import * as lodash from "./lodash"; // all other lodash functions will be removed and only difference will be included
import { concat } from "./helper";
import './str'; // will be removed 

require("./cmn"); // will be included in webpack

concat("Hello"); // will be removed in parcel
lodash.difference([1, 2, 3]);
const helloVar = "hello-var"; // will be removed in all bundlers
console.log('Hello world!'); // will be removed in parcel