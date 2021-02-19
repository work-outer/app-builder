
import React from "react";
import ProForm from '@ant-design/pro-form'

// https://developer.salesforce.com/docs/component-library/bundle/lightning-record-edit-form
export class RecordEditForm extends React.Component<any> {
  static defaultProps = {
  }

  render() {
    const {objectApiName, recordId, children, ...rest} = this.props

    return (
      <ProForm {...rest}>
          {children}
      </ProForm>
    )
  }
}

export default RecordEditForm;