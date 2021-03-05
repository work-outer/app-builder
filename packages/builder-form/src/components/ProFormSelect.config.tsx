export const configProFormSelect = {
  name: 'Steedos:FormSelect',
  inputs: [
    { name: 'name', type: 'string', defaultValue: 'select'},
    { name: 'width', type: 'string', defaultValue: 'md', enum: ['xs', 'sm', 'md', 'lg', 'xl']},
    { name: 'label', type: 'string', defaultValue: 'Select Field'},
    { name: 'placeholder', type: 'string'},  // 未生效
    { name: 'options',  type: 'list', subFields: [
      { name: 'label', type: 'string' },
      { name: 'value', type: 'string' }
    ]},
  ],
  canHaveChildren: false
};
