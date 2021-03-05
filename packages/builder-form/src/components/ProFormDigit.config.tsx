export const configProFormDigit = {
  name: 'Steedos:FormDigit',
  inputs: [
    { name: 'name', type: 'text', defaultValue: 'digit'},
    { name: 'readonly', type: 'boolean', defaultValue: false, enum:[true, false]},
    { name: 'width', type: 'string', defaultValue: 'md', enum: ['xs', 'sm', 'md', 'lg', 'xl']}, // todo 未起效
    { name: 'label', type: 'text', defaultValue: 'Digit Field'},
    { name: 'min', type: 'number' },  // 
    { name: 'max', type: 'number' },  // 
    { name: 'fieldProps', type: 'object', subFields: [
      { name: 'decimalSeparator', type: 'string' },
      { name: 'defaultValue', type: 'number' },
      { name: 'disabled', type: 'boolean', defaultValue: false },
      { name: 'keyboard', type: 'boolean', defaultValue: false },
      { name: 'precision', type: 'number' },
      { name: 'size', type: 'string', enum: ['large', 'middle', 'small']},
      { name: 'step', type: 'number', defaultValue: 1 },
      // { name: 'stringMode', type: 'boolean', defaultValue: false },
    ]}
  ],
  canHaveChildren: false
};
