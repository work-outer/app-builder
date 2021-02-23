import React from 'react'
import UIBuilder from '~components/UIBuilder'
import * as Chakra from '@chakra-ui/react'

const components: Array<UIBuilderComponentsGroupProps> = [{
  label: "分组标题1",
  components: [{
    type: "button", 
    component: Chakra["Button"], 
    label: "按钮"
  }]
}];


const App = () => {

  return (
    <>
      <UIBuilder components={components}/>
    </>
  )
}

export default App
