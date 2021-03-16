import * as React from "react"
import { componentToCustomElement, componentToBuilder } from '@jsx-lite/core';
import { useState, Show } from '@jsx-lite/core';
import { BuilderComponent } from "@builder.io/react";

export default {
  title: "JSX Lite",
}

declare var window;

export const WebComponentRender = () => {

  const json = require('./jsx-test.lite.json');
  const template = componentToCustomElement(json);
  // console.log(template)

  if (!window.hasJSX) {
    eval(template)
    window.hasJSX=true
  }
  return (<my-component/>)
}

export const BuilderRender = () => {

  const json = require('./jsx-test.lite.json');
  const content = componentToBuilder(json);
  console.log(content)

  const apiKey = 'e9ada5daeb6a4627bc2560d29916c080';
  const data = {};
  const buiderProps = {
    apiKey,
    content,
    data,
    onStateChange: (newData: any) => {
    }
  }
  return (
    <BuilderComponent {...buiderProps}>
    </BuilderComponent> 
  )
}


export const BuilderStatic = () => {

  const content = require('./jsx-test.builder.json');
  console.log(content)

  const apiKey = 'e9ada5daeb6a4627bc2560d29916c080';
  const data = {};
  const buiderProps = {
    apiKey,
    content,
    data,
    onStateChange: (newData: any) => {
    }
  }
  return (
    <BuilderComponent {...buiderProps}>
    </BuilderComponent> 
  )
}
