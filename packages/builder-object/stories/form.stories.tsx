import * as React from "react"
import { adapt } from "webcomponents-in-react";

import { BuilderComponent, builder } from '@builder.io/react';

export default {
  title: "Steedos Object",
}



export const Editor = () => {

  const script = document.createElement("script");
  script.src = "https://cdn.builder.io/js/editor";
  script.async = true;
  document.body.appendChild(script);

  const BuilderEditor = adapt("builder-editor");
  const builderOptions = {
    // useDefaultStyles: true,
    // hideAnimateTab: true,
    previewUrl: 'http://localhost:6006/iframe.html?id=steedos-object--preview&viewMode=story',
  };
  const builderData = {}
  return (
    <BuilderEditor
      class="absolute top-0 right-0 bottom-0 left-0 width-full"
      onChange={(e:any) => {
        console.log(e)
      }}
      data={{}}
      env='production'
      options={builderOptions}/>
  ) 
}

export const Fiddle = () => {

  const script = document.createElement("script");
  script.src = "https://cdn.builder.io/js/fiddle";
  script.async = true;
  document.body.appendChild(script);

  const BuilderFiddle = adapt("builder-fiddle");
  const builderOptions = {
    // useDefaultStyles: true,
    // hideAnimateTab: true,
    previewUrl: 'http://localhost:6006/iframe.html?id=steedos-object--preview&viewMode=story',
  };
  const builderData = {}
  return (
    <BuilderFiddle
      class="absolute top-0 right-0 bottom-0 left-0 width-full"
      onChange={(e:any) => {
        console.log(e)
      }}
      data={{}}
      env='production'
      options={builderOptions}/>
  ) 
}


export const Preview = () => {

  builder.init('e9ada5daeb6a4627bc2560d29916c080');

  // Builder.register('editor.settings', {
  //   hideStyleTab: false, // Hide the style tab
  //   hideMainTabs: true, // Hide all main tabs
  //   hideDataTab: false, // Hide the data tab
  //   hideOptionsTab: true, // Hide the options tab
  //   hideToolbar: false, // Hide the main toolbar
  //   hideHeatMap: true, // Hide the heatmap button
  //   hidePageUrlEditor: false, // Hide the page URL editor
  //   hideAnimateTab: true, // Hide the animate tab
  //   hideInsertTab: false, // Hide the insert tab
  //   hideTargeting: false, // Hide the targeting UI
  // });

  require('../src');

  return (
      <BuilderComponent data={{}} /> 
    )
}

