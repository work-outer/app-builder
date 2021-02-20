
import React from "react";
import Input from '@salesforce/design-system-react/components/input'; 
import Tooltip from '@salesforce/design-system-react/components/tooltip'; 


// https://developer.salesforce.com/docs/component-library/bundle/lightning-input-field/documentation
export class InputText extends React.Component<any> {
  static defaultProps = {
  }

  render() {
    const { ...rest} = this.props
    
    return (
      <Input {...rest}
        fieldLevelHelpTooltip={
          <Tooltip
              id="field-level-help-tooltip"
              align="top left"
              content="Some helpful information"
              isOpen={this.props.tooltipOpen}
          />}
        ></Input>
    )
  }
}