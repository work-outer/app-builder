export const configProFormSlider = {
  name: '@steedos/builder-form:Slider',
  inputs: [
    { name: 'name', type: 'text', defaultValue: 'slider', required: true},
    { name: 'label', type: 'text', defaultValue: 'Slider', required: true},
    { name: 'readonly', type: 'boolean', defaultValue: false},
    { name: 'width', type: 'string', defaultValue: 'md', enum: ['xs', 'sm', 'md', 'lg', 'xl']},
    { name: 'min', type: 'number', defaultValue: 0 },
    { name: 'max', type: 'number', defaultValue: 100 },
    { name: 'step', type: 'number', defaultValue: 1 },
    { name: 'marks',  type: 'list', subFields: [
      { name: 'label', type: 'string' },
      { name: 'value', type: 'number' }
    ]},
    { name: 'fieldProps', type: 'object', subFields: [
      { name: 'allowClear', type: 'boolean', defaultValue: false },
      { name: 'dots', type: 'boolean', defaultValue: false },
      { name: 'range', type: 'boolean', defaultValue: false }
    ]}
  ],
  defaultStyles: {
    display: 'block',
    marginTop: '0',
  },
  canHaveChildren: false
};
