export const configProFormDatePicker = {
  name: 'Steedos:FormDatePicker',
  inputs: [
    { name: 'name', type: 'text', defaultValue: 'date'},
    { name: 'width', type: 'string', defaultValue: 'md', enum: ['xs', 'sm', 'md', 'lg', 'xl']},
    { name: 'label', type: 'text', defaultValue: 'Date Picker'}
   
  ],
  canHaveChildren: false
};
