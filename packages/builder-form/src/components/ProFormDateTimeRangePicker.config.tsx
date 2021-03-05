export const configProFormDateTimeRangePicker = {
  name: 'Steedos:FormDateTimeRangePicker',
  inputs: [
    { name: 'name', type: 'text', defaultValue: 'dateTimeRange'},
    { name: 'width', type: 'string', defaultValue: 'md', enum: ['xs', 'sm', 'md', 'lg', 'xl']},
    { name: 'label', type: 'text', defaultValue: 'DateTimeRange Picker'}
  ],
  canHaveChildren: false
};
