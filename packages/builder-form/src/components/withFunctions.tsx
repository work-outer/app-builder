import _ from 'lodash'
export function withFunctions(Component:any, functionNames: string[]) {
  return (props) => {
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