import * as React from "react"
import { componentToCustomElement } from '@jsx-lite/core';
import { useState, Show } from '@jsx-lite/core';

export default {
  title: "JSX Lite",
}


export const WebComponentRender = () => {

  const json = require('./test.lite.json');
  const template = componentToCustomElement(json);
  console.log(template)

  if (!window.hasJSX) {
    eval(template)
    window.hasJSX=true
  }
  return (<my-jsx-component/>)
}

