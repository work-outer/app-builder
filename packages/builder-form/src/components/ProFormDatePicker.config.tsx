export const configProFormDatePicker = {
  name: 'Steedos:FormDatePicker',
  inputs: [
    { name: 'name', type: 'text', defaultValue: 'date'},
    { name: 'readonly', type: 'boolean', defaultValue: false, enum:[true, false]},
    { name: 'width', type: 'string', defaultValue: 'md', enum: ['xs', 'sm', 'md', 'lg', 'xl']},
    { name: 'label', type: 'text', defaultValue: 'Date Picker'}
   
  ],
  canHaveChildren: false
};
