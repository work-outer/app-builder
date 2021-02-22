import React from 'react';
import { Input} from 'antd';

export class InputTextWithFix extends React.Component<any> {
    static defaultProps = {
        referenceTo: null,
        filters: [],
        referenceKey: '_id'
    }
    render() {
        const {prefix, label, placeholder, ...rest} = this.props
        
        return (
          <Input 
            prefix={prefix}
            placeholder={placeholder}
          />
        )
      }
}
