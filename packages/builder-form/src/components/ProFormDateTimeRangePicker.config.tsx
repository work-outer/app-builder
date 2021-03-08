export const configProFormDateTimeRangePicker = {
  name: '@steedos/builder-form:DatetimeRangePicker',
  inputs: [
    { name: 'name', type: 'text', defaultValue: 'dateTimeRange', required: true},
    { name: 'label', type: 'text', defaultValue: 'DateTimeRange Picker', required: true},
    { name: 'readonly', type: 'boolean', defaultValue: false},
    { name: 'width', type: 'string', defaultValue: 'md', enum: ['xs', 'sm', 'md', 'lg', 'xl']},
    { name: 'disabled', type: 'boolean', defaultValue:false},
    { name: 'fieldProps', type: 'object', subFields: [
      { name: 'allowClear', type: 'boolean', defaultValue: true},
      { name: 'size', type: 'string', defaultValue:'middle', enum: ['large', 'middle', 'small']},
      { name: 'autoFocus', type: 'boolean', defaultValue: false},
      { name: 'inputReadOnly', type: 'boolean', defaultValue: false}
    ]}
  ],
  defaultStyles: {
    display: 'block',
    marginTop: '0',
  },
  canHaveChildren: false
};
