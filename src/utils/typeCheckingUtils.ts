import {type JSX} from "react";

export const isHeadingFunction = (value: string | (() => JSX.Element)): value is () => JSX.Element => {
    return typeof value === 'function';
};