
import { builder, withChildren } from '@builder.io/react'
import builderConfig from '@config/builder'
import dynamic from 'next/dynamic';

 
builder.init(builderConfig.apiKey)

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

import { Builder, BuilderComponent } from '@builder.io/react';

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