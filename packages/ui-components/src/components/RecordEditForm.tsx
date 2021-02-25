
import React from "react";

import ProForm from '@ant-design/pro-form';
import { Form, Col } from 'antd';
import { SteedosContext } from '..'

// https://developer.salesforce.com/docs/component-library/bundle/lightning-record-edit-form
export class RecordEditForm extends React.Component<any> {
  static defaultProps = {
    layout:'horizontal'
  }
  static contextType = SteedosContext;
  render() {
    console.log('RecordEditForm--this.context--render-', this.context)
    const {objectApiName, recordId, layout, children, ...rest} = this.props
    
    return <ProForm 
          layout = {layout}
          {...rest}>
          {children}
      </ProForm>
  }
}
