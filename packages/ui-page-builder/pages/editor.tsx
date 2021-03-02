
import { adapt } from "webcomponents-in-react";
import builderConfig from '@config/builder'

// import editor from '@builder.io/editor';
import { Builder, BuilderComponent } from "@builder.io/react";

const BuilderEditor = adapt("builder-editor");

export default function Admin(){
  const builderOptions = {
     useDefaultStyles: false,
     hideAnimateTab: true,
     previewUrl: 'http://localhost:3000/',
  };
  const builderData = {}
  return (
    <BuilderEditor
      class="absolute bottom-0 left-0 top-0 right-0"
      onChange={(e) => {
        console.log(e)
      }}
      // api-key={builderConfig.apiKey}
      data={builderData}
      env='production'
      options={builderOptions}/>
  ) 
};