import { Select } from 'antd';
import React from 'react';

const Option = Select;

const children:any = [];
for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}

function onChange(value:any) {
	console.log(`selected ${value}`);
}

function onBlur() {
	console.log('blur');
}

function onFocus() {
	console.log('focus');
}

function onSearch(val:any) {
	console.log('search:', val);
}

export class InputLookup extends React.Component<any> {
    static defaultProps = {
        referenceTo: null,
        filters: [],
        referenceKey: '_id'
    }
    render() {
        const {style, label, placeholder, ...rest} = this.props
        
        return (
            <Select
                mode="multiple"
                allowClear
                style={{ width: '100%' }}
                placeholder={placeholder}
				onChange={onChange}
				onFocus={onFocus}
				onBlur={onBlur}
				onSearch={onSearch}
            >
            {children}
          </Select>
        )
      }
}
