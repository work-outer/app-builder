
import React from "react";
import Tooltip from '@salesforce/design-system-react/components/tooltip'; 
import {InputText, InputLookup} from '../..'; 


// https://developer.salesforce.com/docs/component-library/bundle/lightning-input/documentation
export class Input extends React.Component<any> {
  static defaultProps = {
    type: "text",
    required: false,
  }

  render() {
    const {type, fieldLevelHelp, ...rest} = this.props
    const autoProps:any = rest

    if (fieldLevelHelp)
        autoProps.fieldLevelHelpTooltip = (
            <Tooltip
                id="field-level-help-tooltip"
                align="top left"
                content={fieldLevelHelp}
                isOpen={this.props.tooltipOpen}
            />)
    if (type=="lookup"){
      return (
        <InputLookup {...autoProps}/>
      )
    }
    else {
      return (
        <InputText {...autoProps}/>
      )
    }
  }
}
