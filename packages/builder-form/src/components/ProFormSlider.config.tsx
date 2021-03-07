export const configProFormSlider = {
  name: 'Steedos:FormSlider',
  inputs: [
    { name: 'name', type: 'text', defaultValue: 'slider'},
    { name: 'readonly', type: 'boolean', defaultValue: false},
    { name: 'width', type: 'string', defaultValue: 'md', enum: ['xs', 'sm', 'md', 'lg', 'xl']},
    { name: 'label', type: 'text', defaultValue: 'Slider'},
    { name: 'min', type: 'number', defaultValue: 0 },
    { name: 'max', type: 'number', defaultValue: 100 },
    { name: 'step', type: 'number', defaultValue: 1 },
    { name: 'marks',  type: 'list', subFields: [
      { name: 'label', type: 'string' },
      { name: 'value', type: 'number' }
    ]},
    { name: 'fieldProps', type: 'object', subFields: [
      { name: 'allowClear', type: 'boolean', defaultValue: false },
      { name: 'disabled', type: 'boolean', defaultValue: false },
      { name: 'dots', type: 'boolean', defaultValue: false },
      // { name: 'vertical', type: 'boolean', defaultValue: false }, // todo 未生效
      { name: 'range', type: 'boolean', defaultValue: false },
    ]}
  ],
  canHaveChildren: false
};
