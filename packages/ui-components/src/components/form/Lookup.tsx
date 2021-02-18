
import React from "react";
import {render as renderAmis} from 'amis';

// https://developer.salesforce.com/docs/component-library/bundle/lightning-input-field/documentation
export class FieldLookup extends React.Component<any> {
  static defaultProps = {
  }

  render() {
    const { ...rest} = this.props
    
    const schema = {
      "type": "form",
      "api": "https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/mock2/form/saveForm",
      "controls": [
        {
          "type": "picker",
          "name": "picker",
          "label": "picker",
          "options": [
            {
              "label": "A",
              "value": "a"
            },
            {
              "label": "B",
              "value": "b"
            },
            {
              "label": "C",
              "value": "c"
            }
          ]
        }]
      }
    return (
      <>
      {renderAmis(schema, {})}
      </>
    )
  }
}

export default FieldLookup;