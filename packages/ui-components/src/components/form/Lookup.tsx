
import React from "react";
import {render as renderAmis} from 'amis';

// https://developer.salesforce.com/docs/component-library/bundle/lightning-input-field/documentation
export class FieldLookup extends React.Component<any> {
  static defaultProps = {
  }

  render() {
    const { ...rest} = this.props

    return renderAmis({
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
    });
  }
}

export default FieldLookup;