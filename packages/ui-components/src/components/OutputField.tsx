
import React from "react";
import { Form, Input, Col } from 'antd'

// https://developer.salesforce.com/docs/component-library/bundle/lightning-output-field/documentation
export class OutputField extends React.Component<any> {
  static defaultProps = {
  }

  render() {
    const {fieldName, readonly, ...rest} = this.props

    return (
      <>
        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          <Form.Item name={fieldName} label={fieldName}  {...rest}>
            {fieldName}
          </Form.Item>
        </Col>
      </>
    )
  }
}

export default OutputField;