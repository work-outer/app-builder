import React from 'react';
import { Input} from 'antd';
const { TextArea } = Input;

export class InputTextarea extends React.Component<any> {
    static defaultProps = {
        referenceTo: null,
        filters: [],
        referenceKey: '_id'
    }
    render() {
        const {rows, ...rest} = this.props
        
        return (
          <TextArea rows={rows} />
        )
      }
}
