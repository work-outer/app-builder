export const configProFormTimePicker = {
  name: 'Steedos:FormTimePicker',
  inputs: [
    { name: 'name', type: 'text', defaultValue: 'time'},
    { name: 'width', type: 'string', defaultValue: 'md', enum: ['xs', 'sm', 'md', 'lg', 'xl']},
    { name: 'label', type: 'text', defaultValue: 'Time Picker'}
  ],
  canHaveChildren: false
};
