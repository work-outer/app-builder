import React from 'react'
import { ChangeEvent } from 'react'
import UIBuilder from '~components/UIBuilder'
import * as Chakra from '@chakra-ui/react'
// import 'antd/dist/antd.less'
// const ButtonSettings = () => {
//   const { setValueFromEvent } = useForm()

//   const size = usePropsSelector('size')
//   const variant = usePropsSelector('variant')

//   return (
//     <>
//       <ChildrenControl />

//       <SizeControl name="size" label="Size" value={size} />

//       <FormControl htmlFor="variant" label="Variant">
//         <Select
//           id="variant"
//           onChange={setValueFromEvent}
//           name="variant"
//           size="sm"
//           value={variant || ''}
//         >
//           <option>outline</option>
//           <option>ghost</option>
//           <option>unstyled</option>
//           <option>link</option>
//           <option>solid</option>
//         </Select>
//       </FormControl>

//       <ColorsControl label="Color Scheme" name="colorScheme" />
//       <IconControl label="Left icon" name="leftIcon" />
//       <IconControl label="Right icon" name="rightIcon" />
//     </>
//   )
// }

import {
  FormLabel,
  FormControl as ChakraFormControl,
  Grid,
  Box,
  Input
} from '@chakra-ui/react'

type ComponentSettingsPropType = {
  value: any
  onChange: Function
}

const ButtonSettings: React.FC<ComponentSettingsPropType> = ({
  value,
  onChange
}) => {
  const setValueFromEvent = ({
    target: { name, value },
  }: ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    onChange(name, value)
  }
  return (
    <ChakraFormControl
      mb={3}
      as={Grid}
      display="flex"
      alignItems="center"
      justifyItems="center"
    >
      <FormLabel
        p={0}
        mr={2}
        color="gray.500"
        lineHeight="1rem"
        width={'90px'}
        fontSize="xs"
        htmlFor="children"
      >
        Text
      </FormLabel>
      <Box
        display="flex"
        alignItems="center"
        justifyItems="center"
        width={'130px'}
      >
        <Input
          id="children"
          name="children"
          size="sm"
          value={value.children}
          type="children"
          onChange={setValueFromEvent}
        />
      </Box>
    </ChakraFormControl>
  )
}

const components = {
  "button": {
    "component": Chakra["Button"],
    "componentSettings": ButtonSettings,
    "componentProps": [{
      name: "children",
      valueType: "text"
    }],
  },
  // "container": {
  //   "component": Chakra["Container"],
  //   "componentSettings": ButtonSettings,
  //   "droppable": ["button"],
  // }
};

const componentTree: Array<UIBuilderComponentsGroupProps> = [{
  label: "分组标题1",
  children: [{
    type: "button", 
    label: "按钮"
  },{
    type: "container", 
    label: "容器"
  },{
    type: "container", 
    label: "容器2"
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
