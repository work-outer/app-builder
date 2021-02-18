
import React from "react";

// https://developer.salesforce.com/docs/component-library/bundle/lightning-record-edit-form
export class RecordEditForm extends React.Component<any> {
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

export default RecordEditForm;