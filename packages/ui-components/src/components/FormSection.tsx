
import React from "react";
import ProCard from '@ant-design/pro-card';

import '@ant-design/pro-card/dist/card.css'

export class FormSection extends React.Component<any> {
  static defaultProps = {
    title: 'Section',
  }

  render() {
    const {title,  children, ...rest} = this.props

    return (
      <ProCard title={title} ghost gutter={8} collapsible>
          {children}
      </ProCard>
    )
  }
}