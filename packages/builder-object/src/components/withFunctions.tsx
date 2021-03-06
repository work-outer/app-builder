import _ from 'lodash'
import React from "react";
export function withFunctions(Component:Function, functionNames: string[]) {
  return (props:any) => {
    let {initialValues, onFinish, onValuesChange, children, ...rest} = props
    let newProps = _.cloneDeep(props)

    _.forEach(functionNames, (name)=>{
      if (typeof props[name] === 'string'){
        try {
          newProps[name] = eval(props[name])
        } catch(e) {console.log(e)}
      }
    })

    return <Component {...newProps}/>
  }
}