import * as React from "react"
import ProForm, { ProFormText, ProFormDateRangePicker, ProFormSelect } from '@ant-design/pro-form';

import { adapt } from "webcomponents-in-react";

import { Builder, BuilderComponent, builder, withChildren } from '@builder.io/react';

export default {
  title: "Pro Form",
}

const apiKey = 'e9ada5daeb6a4627bc2560d29916c080';

export const Editor = () => {

  if (!window.hasEditor) {
    const script = document.createElement("script");
    script.src = "https://cdn.builder.io/js/editor";
    script.async = true;
    document.body.appendChild(script);
    window.hasEditor = true;
  }

  const BuilderEditor = adapt("builder-editor");
  const builderOptions = {
    // useDefaultStyles: true,
    // hideAnimateTab: true,
    previewUrl: 'http://localhost:6006/iframe.html?id=pro-form--preview&viewMode=story',
  };

  const initialContent = {
    data: {
      blocks: [{
        "@type": "@builder.io/sdk:Element",
        "@version": 2,
        "id": "builder-0e6f5d94e39e41f0bc39bd42b55cd457",
        "component": {
          "name": "Text",
          "options": {
            "text": "<p>Steedos App Builder</p>"
          }
        },
      }]
    }
  }
  return (
    <BuilderEditor
      class="absolute top-0 right-0 bottom-0 left-0 width-full"
      onChange={(e:any) => {
        console.log(e)
      }}
      data={initialContent}
      env='production'
      options={builderOptions}/>
  ) 
}

export const Fiddle = () => {

  if (!window.hasFiddle) {
    const script = document.createElement("script");
    script.src = "https://cdn.builder.io/js/fiddle";
    script.async = true;
    document.body.appendChild(script);
    window.hasFiddle = true;
  }

  const BuilderFiddle = adapt("builder-fiddle");
  const builderOptions = {
    // useDefaultStyles: true,
    // hideAnimateTab: true,
    previewUrl: 'http://localhost:6006/iframe.html?id=pro-form--preview&viewMode=story',
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

  builder.init(apiKey);

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
      <BuilderComponent apiKey={apiKey}>

      </BuilderComponent> 
    )
}


export const ContractForm = () => {

  builder.init(apiKey);

  const content = require('./contract.form.builder.json');
  return (
      <BuilderComponent apiKey={apiKey} content={content}>
      </BuilderComponent> 
    )
}

