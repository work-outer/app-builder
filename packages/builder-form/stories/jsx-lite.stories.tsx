import * as React from "react"
import { componentToCustomElement } from '@jsx-lite/core';
import { useState, Show } from '@jsx-lite/core';

export default {
  title: "JSX Lite",
}

export const WebComponentSource = () => {

  const json = require('./test.lite.json');
  const template = componentToCustomElement(json);
 
  return (template)
}


export const WebComponentRender = () => {

  const json = require('./test.lite.json');
  const template = componentToCustomElement(json);
 
  eval(template)
  return (<my-jsx-component/>)
}

