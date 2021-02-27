
import React from "react";
import ProCard from '@ant-design/pro-card';
import { Row } from 'antd';


export default class FormSection extends React.Component<any> {
  static defaultProps = {
    title: 'Section',
  }
  render() {
    const {title,  children, ...rest} = this.props

    return (
      <ProCard title={title} ghost collapsible>
        <Row gutter={[24,0]}>
          {children}
        </Row>
      </ProCard>
    )
  }
}