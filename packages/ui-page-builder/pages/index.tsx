
import { builder, withChildren } from '@builder.io/react'

import { Builder, BuilderComponent } from '@builder.io/react';

import builderConfig from '@config/builder'
import dynamic from 'next/dynamic';

 
builder.init(builderConfig.apiKey)

Builder.register('editor.settings', {
  hideStyleTab: true,      // Hide the style tab
  hideMainTabs: true,      // Hide all main tabs
  hideDataTab: true ,      // Hide the data tab
  hideOptionsTab: true,    // Hide the options tab
  hideToolbar: true,       // Hide the main toolbar
  hideHeatMap: true,       // Hide the heatmap button
  hidePageUrlEditor: false, // Hide the page URL editor
  hideAnimateTab: true,    // Hide the animate tab
  hideInsertTab: false,     // Hide the insert tab
  hideTargeting: false,     // Hide the targeting UI
})

const Form:any = dynamic(
  () => import('@steedos/ui-components').then((mod:any) => {return mod.Form}),
  {ssr: false},
);

Builder.registerComponent(withChildren(Form), { 
  name: 'Steedos:Form',
  inputs: [
    { name: 'columns', type: 'number' },
    { name: 'layout', type: 'text' },
    { name: 'mode', type: 'text' },
  ],
  canHaveChildren: true
})

const FormField:any = dynamic(
  () => import('@steedos/ui-components').then((mod:any) => {return mod.FormField}),
  {ssr: false},
);

Builder.registerComponent(FormField, { 
  name: 'Steedos:FormField',
  inputs: [
    { name: 'name', type: 'text' },
    { name: 'label', type: 'text' },
    { name: 'valueType', type: 'text' }
  ],
  // noWrap: true,
  canHaveChildren: false
})


// Register our heading component for use in 
// the visual editor
const Heading = (props:any) => (
  <h1 >{props.title}</h1>
)
 
Builder.registerComponent(Heading, { 
  name: 'Heading',
  inputs: [{ name: 'title', type: 'text' }]
})

const initialData = {
  "data":{
    // "blocks":[
    //   {
    //     "@type":"@builder.io/sdk:Element",
    //     "@version":2,
    //     "id":"builder-ee480423fc424372984d8a0a424870f0",
    //     "component":{
    //       "name":"Text",
    //       "options":{"text":"Enter some text..."}
    //     },
    //     "responsiveStyles":{"large":{"position":"relative"}}
    //   }
    // ]
  }
}

export default function Page (){
  return ( 
    <>
      {/* <Form>
        <FormField name='text'></FormField>
      </Form>
      <hr></hr> */}
      <BuilderComponent /> 
    </>
  )
}


export const getServerSideProps = async () => {
  return {
    props: {
    },
  }
}