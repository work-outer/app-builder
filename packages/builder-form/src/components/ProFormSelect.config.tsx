export const configProFormSelect = {
  name: 'Steedos:FormSelect',
  inputs: [
    { name: 'name', type: 'string', defaultValue: 'select'},
    { name: 'readonly', type: 'boolean', defaultValue: false, enum:[true, false] },
    { name: 'width', type: 'string', defaultValue: 'md', enum: ['xs', 'sm', 'md', 'lg', 'xl'] },
    { name: 'label', type: 'string', defaultValue: 'Select Field' },
    // { name: 'placeholder', type: 'string' },  // 未生效
    { name: 'options',  type: 'list', subFields: [
      { name: 'label', type: 'string' },
      { name: 'value', type: 'string' }
    ]},
    { name: 'fieldProps', type: 'object', subFields: [
      { name: 'allowClear', type: 'boolean', defaultValue: false },
      { name: 'autoClearSearchValue', type: 'boolean', defaultValue: true },
      { name: 'bordered', type: 'boolean', defaultValue: true },
      { name: 'defaultActiveFirstOption', type: 'boolean', defaultValue: true },
      { name: 'defaultOpen', type: 'boolean', defaultValue: false },
      // { name: 'defaultValue', type: 'list', subFields:[
      //   { type: 'string' },
      // ]},
      { name: 'disabled', type: 'boolean', defaultValue: false },
      { name: 'dropdownClassName', type: 'string' },
      { name: 'dropdownMatchSelectWidth', type: 'boolean', defaultValue: true },
      { name: 'listHeight', type: 'number', defaultValue: 256 },
      { name: 'mode', type: 'string', enum: ['multiple', 'tags'] },
      { name: 'placeholder', type: 'string' },
      // { name: 'tokenSeparators', type: 'list', subFields:[
      //   { type: 'string' },
      // ]},
      { name: 'virtual', type: 'boolean', defaultValue: false },
    ]}
  ],
  canHaveChildren: false
};
