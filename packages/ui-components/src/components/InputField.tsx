
import React from "react";
import { Form, Input, Col } from 'antd'


// https://developer.salesforce.com/docs/component-library/bundle/lightning-input-field/documentation
export class InputField extends React.Component<any> {
  static defaultProps = {
  }

  render() {
    const {fieldName, ...rest} = this.props

    return (
      <>
        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          <Form.Item name={fieldName} label={fieldName}  {...rest}>
            <Input />
          </Form.Item>
        </Col>
      </>
    )
  }
}

export default InputField;