export const configProFormDateRangePicker = {
  name: '@steedos/builder-form:DateRangePicker',
  inputs: [
    { name: 'name', type: 'text', defaultValue: 'dateRange', required: true},
    { name: 'label', type: 'text', defaultValue: 'DateRange Picker', required: true},
    { name: 'readonly', type: 'boolean', defaultValue: false},
    { name: 'width', type: 'string', defaultValue: 'md', enum: ['xs', 'sm', 'md', 'lg', 'xl']},
    { name: 'fieldProps', type: 'object', subFields: [
      { name: 'allowClear', type: 'boolean', defaultValue: true},
      { name: 'size', type: 'string', defaultValue:'middle', enum: ['large', 'middle', 'small']},
      { name: 'autoFocus', type: 'boolean', defaultValue: false},
      { name: 'inputReadOnly', type: 'boolean', defaultValue: false}
    ]}
  ],
  canHaveChildren: false
};
