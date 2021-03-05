export const configProFormDateTimePicker = {
  name: 'Steedos:FormDateTimePicker',
  inputs: [
    { name: 'name', type: 'text', defaultValue: 'dateTime'},
    { name: 'readonly', type: 'boolean', defaultValue: false, enum:[true, false]},
    { name: 'width', type: 'string', defaultValue: 'md', enum: ['xs', 'sm', 'md', 'lg', 'xl']},
    { name: 'label', type: 'text', defaultValue: 'DateTime Picker'}
  ],
  canHaveChildren: false
};
