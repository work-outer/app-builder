import React from 'react'
import UIBuilder from '~components/UIBuilder'
import * as Chakra from '@chakra-ui/react'


const components = {
  "button": {
    "component": Chakra["Button"],
    // "componentSettings": FormSectionSettings,
  }
};

const componentTree: Array<UIBuilderComponentsGroupProps> = [{
  label: "分组标题1",
  children: [{
    type: "button", 
    label: "按钮"
  }]
}];


const App = () => {

  return (
    <>
      <UIBuilder components={components} componentTree={componentTree}/>
    </>
  )
}

export default App
