export const configProFormDateTimePicker = {
  name: '@steedos/builder-form:DatetimePicker',
  inputs: [
    { name: 'name', type: 'text', defaultValue: 'dateTime', required: true},
    { name: 'label', type: 'text', defaultValue: 'DateTime Picker', required: true},
    { name: 'readonly', type: 'boolean', defaultValue: false},
    { name: 'width', type: 'string', defaultValue: 'md', enum: ['xs', 'sm', 'md', 'lg', 'xl']},
    { name: 'fieldProps', type: 'object', subFields: [
      { name: 'allowClear', type: 'boolean', defaultValue: true},
      { name: 'size', type: 'string', defaultValue:'middle', enum: ['large', 'middle', 'small']},
      { name: 'autoFocus', type: 'boolean', defaultValue: false},
      { name: 'inputReadOnly', type: 'boolean', defaultValue: false},
    ]}
  ],
  defaultStyles: {
    display: 'block',
    marginTop: '0',
  },
  canHaveChildren: false
};
