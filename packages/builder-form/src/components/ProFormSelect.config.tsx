export const configProFormSelect = {
  name: '@steedos/builder-form:Select',
  inputs: [
    { name: 'name', type: 'string', defaultValue: 'select', required: true},
    { name: 'label', type: 'string', defaultValue: 'Select Field', required: true},
    { name: 'placeholder', type: 'string' },
    { name: 'readonly', type: 'boolean', defaultValue: false },
    { name: 'options',  type: 'list', required: true, subFields: [
      { name: 'value', type: 'string' },
      { name: 'label', type: 'string' }
    ]},
    { name: 'disabled', type: 'boolean', defaultValue:false},
    { name: 'width', type: 'string', defaultValue: 'md', enum: ['xs', 'sm', 'md', 'lg', 'xl'] },
    { name: 'fieldProps', type: 'object', subFields: [
      { name: 'allowClear', type: 'boolean', defaultValue: false },
      { name: 'autoClearSearchValue', type: 'boolean', defaultValue: true },
      { name: 'defaultActiveFirstOption', type: 'boolean', defaultValue: true },
      { name: 'defaultOpen', type: 'boolean', defaultValue: false },
      { name: 'dropdownClassName', type: 'string' },
      { name: 'dropdownMatchSelectWidth', type: 'boolean', defaultValue: true },
      { name: 'listHeight', type: 'number', defaultValue: 256 },
      { name: 'mode', type: 'string', enum: ['multiple', 'tags'] },
      { name: 'virtual', type: 'boolean', defaultValue: false },
    ]}
  ],
  defaultStyles: {
    display: 'block',
    marginTop: '0',
  },
  canHaveChildren: false
};
