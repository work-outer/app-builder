
import React from "react";

// https://developer.salesforce.com/docs/component-library/bundle/lightning-record-form/documentation
export class RecordForm extends React.Component<any> {
  static defaultProps = {
  }

  render() {
    const {objectApiName, recordId, children, ...rest} = this.props

    return (
      <>
          {children}
      </>
    )
  }
}

export default RecordForm;