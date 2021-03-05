export const configProFormTimePicker = {
  name: 'Steedos:FormTimePicker',
  inputs: [
    { name: 'name', type: 'text', defaultValue: 'time'},
    { name: 'readonly', type: 'boolean', defaultValue: false, enum:[true, false]},
    { name: 'width', type: 'string', defaultValue: 'md', enum: ['xs', 'sm', 'md', 'lg', 'xl']},
    { name: 'label', type: 'text', defaultValue: 'Time Picker'}
  ],
  canHaveChildren: false
};
