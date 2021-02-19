
import React from "react";
import Input from '@salesforce/design-system-react/components/input'; 
import Tooltip from '@salesforce/design-system-react/components/tooltip'; 


// https://developer.salesforce.com/docs/component-library/bundle/lightning-input-field/documentation
export class InputField extends React.Component<any> {
  static defaultProps = {
    required: false,
  }

  render() {
    const {fieldName, placeholder, required, ...rest} = this.props

    return (
      <div className="col-span-6">
					<Input
						id={fieldName}
            label="My Label"
            placeholder={fieldName}
            required={required}
            {...rest}
						fieldLevelHelpTooltip={
							<Tooltip
								id="field-level-help-tooltip"
								align="top left"
								content="Some helpful information"
								isOpen={this.props.tooltipOpen}
							/>
						}
					/>
      </div>
    )
  }
}

export default InputField;