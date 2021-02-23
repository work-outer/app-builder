import React from 'react';
import { DatePicker} from 'antd';
import moment from 'moment';

function onChange(value:any, dateString:any) {
    console.log('Selected Time: ', value);
    console.log('Formatted Selected Time: ', dateString);
}
function onOk(value:any) {
    console.log('onOk: ', value);
}
export class InputDateTime extends React.Component<any>{
    static defaultProps = {
        type: "date",
    }
    render(){
        const {label, placeholder, ...rest} = this.props;
        return (
            <DatePicker showTime onChange={onChange} onOk={onOk} />
    )
    }
}