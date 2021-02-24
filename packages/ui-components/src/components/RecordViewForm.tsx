
import React from "react";

import ProForm from '@ant-design/pro-form';

// https://developer.salesforce.com/docs/component-library/bundle/lightning-record-view-form
export class RecordViewForm extends React.Component<any> {
  static defaultProps = {
    layout:'horizontal'
  }

  render() {
    const {objectApiName, recordId, layout, children, ...rest} = this.props

    return (
      <ProForm 
          layout={layout}
          {...rest}>
          {children}
      </ProForm>
    )
  }
}
