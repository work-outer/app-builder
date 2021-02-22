import React from 'react';
import moment from 'moment';
import Input from '@salesforce/design-system-react/components/input';
import Datepicker from '@salesforce/design-system-react/components/date-picker';

export class InputDateTime extends React.Component<any>{
    static defaultProps = {
        type: "date",
    }
    render(){
        const {label, placeholder, ...rest} = this.props;
        const labels = {label, placeholder}
        const state = {
            value: undefined
        };
        const now =  moment(new Date()).format('YYYY-MM-DD hh:ss');
        return (
            <Datepicker
                labels={labels}{...rest}
                input={<Input />}
                placeholder={now}
                onChange={(event:any, data:any) => {
                    if (this.props.action) {
                        const dataAsArray = Object.keys(data).map((key) => data[key]);
                        this.props.action('onChange')(event, data, ...dataAsArray);
                    } else if (console) {
                        console.log('onChange', event, data);
                    }
                }}
                formatter={(date:any) => {
                    return date ? moment(date).format('YYYY-MM-DD hh:ss') : '';
                }}
                parser={(dateString:any) => {
                    return moment(dateString, 'YYYY-MM-DD hh:ss').toDate();
                }}
                value={state.value}
            />
        )
    }
}