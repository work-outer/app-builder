export const configProFormDigit = {
  name: '@steedos/builder-form:Digit',
  inputs: [
    { name: 'name', type: 'text', defaultValue: 'digit', required: true},
    { name: 'label', type: 'text', defaultValue: 'Digit Field', required: true},
    { name: 'readonly', type: 'boolean', defaultValue: false},
    { name: 'width', type: 'string', defaultValue: 'md', enum: ['xs', 'sm', 'md', 'lg', 'xl']},
    { name: 'min', type: 'number' },
    { name: 'max', type: 'number' },
    { name: 'fieldProps', type: 'object', subFields: [
      { name: 'precision', type: 'number', defaultValue: 0, required: true}, // 保留小数位数
      { name: 'size', type: 'string', enum: ['large', 'middle', 'small']},
      { name: 'decimalSeparator', type: 'string' },
      { name: 'defaultValue', type: 'number', defaultValue: 0},
      { name: 'keyboard', type: 'boolean', defaultValue: false },
      { name: 'step', type: 'number', defaultValue: 1 },
      // { name: 'stringMode', type: 'boolean', defaultValue: false },
    ]}
  ],
  defaultStyles: {
    display: 'block',
    marginTop: '0',
  },
  canHaveChildren: false
};
