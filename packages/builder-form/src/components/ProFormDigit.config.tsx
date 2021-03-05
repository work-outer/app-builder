export const configProFormDigit = {
  name: 'Steedos:FormDigit',
  inputs: [
    { name: 'name', type: 'text', defaultValue: 'digit'},
    { name: 'width', type: 'string', defaultValue: 'md', enum: ['xs', 'sm', 'md', 'lg', 'xl']},
    { name: 'label', type: 'text', defaultValue: 'Digit Field'},
    { name: 'min', type: 'number' },  // 
    { name: 'max', type: 'number' },  // 
  ],
  canHaveChildren: false
};
