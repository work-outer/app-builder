
import React from "react";
import ProCard from '@ant-design/pro-card';
import { Row } from 'antd';

import '@ant-design/pro-card/dist/card.css'

export class FormSection extends React.Component<any> {
  static defaultProps = {
    title: 'Section',
  }

  schemaToFormItem:any = (
    items: any[],
  ) => {
    // 因为 Descriptions 只是个语法糖，children 是不会执行的，所以需要这里处理一下
    const children = items?.map?.((item, index) => {
      if (React.isValidElement(item)) {
        return item;
      }
      return (item);
    })
    return {children}
  }

  render() {
    const {title,  children, ...rest} = this.props
    const {children2} = this.schemaToFormItem(children);

    return (
      <ProCard title={title} ghost collapsible>
        <Row gutter={[24,0]}>
          {children}
        </Row>
      </ProCard>
    )
  }
}