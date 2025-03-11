// Element creation utilities
export * from "./element-factory";
export * from "./create-element";

// Element manipulation utilities
export * from './modifiers';
export * from './assemble-dom';
export * from './append';

// State management
export { bindState, unbindState } from "./dom-state";

import useArray from "../hooks/use-array";
import useObject, {useObjectProp} from "../hooks/use-object";

export {useArray, useObject, useObjectProp};