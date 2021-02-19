
import React from "react";
import { Collapse, Row } from 'antd';

export class FormSection extends React.Component<any> {
  static defaultProps = {
    title: 'Section',
  }

  render() {
    const {title,  children, ...rest} = this.props

    return (

      <Collapse defaultActiveKey={["1"]} ghost>
        <Collapse.Panel header={title} {...rest} key="1">
          <Row gutter={16}>
            {children}
          </Row>
        </Collapse.Panel>
      </Collapse>
    )
  }
}

export default FormSection;