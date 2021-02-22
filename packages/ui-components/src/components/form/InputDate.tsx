import React from 'react';
import moment from 'moment';
import Input from '@salesforce/design-system-react/components/input';
import Datepicker from '@salesforce/design-system-react/components/date-picker';

export class InputDate extends React.Component<any>{
    static defaultProps = {
        type: "date",
    }
    render(){
        const {style, ...rest} = this.props;
        const state = {
            value: undefined
        };
        return (
            <Datepicker
                labels={{
                    label: 'Date',
                }}
                input={<Input placeholder="With custom Input"  />}
                onChange={(event:any, data:any) => {
                    if (this.props.action) {
                        const dataAsArray = Object.keys(data).map((key) => data[key]);
                        this.props.action('onChange')(event, data, ...dataAsArray);
                    } else if (console) {
                        console.log('onChange', event, data);
                    }
                }}
                formatter={(date:any) => {
                    return date ? moment(date).format('YYYY-MM-DD') : '';
                }}
                parser={(dateString:any) => {
                    return moment(dateString, 'YYYY-MM-DD').toDate();
                }}
                value={state.value}
            />
        )
    }
}