export const configProFormDateRangePicker = {
  name: 'Steedos:FormDateRangePicker',
  inputs: [
    { name: 'name', type: 'text', defaultValue: 'dateRange'},
    { name: 'readonly', type: 'boolean', defaultValue: false, enum:[true, false]},
    { name: 'width', type: 'string', defaultValue: 'md', enum: ['xs', 'sm', 'md', 'lg', 'xl']},
    { name: 'label', type: 'text', defaultValue: 'DateRange Picker'}
  ],
  canHaveChildren: false
};
