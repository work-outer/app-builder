import React from 'react';
import { DatePicker} from 'antd';
import moment from 'moment';

function onChange(date:any, dateString:any) {
  console.log(date, dateString);
}

export class InputDate extends React.Component<any>{
    
    render(){
        const {label, placeholder, ...rest} = this.props;
        const dateFormat = 'YYYY-MM-DD';
        return (
            <DatePicker 
                onChange={onChange}
                defaultValue={moment(new Date(), dateFormat)}
             />
        )
    }
}