export const configProFormRadio = {
  name: 'Steedos:FormRadio',
  inputs: [
    { name: 'name', type: 'text', defaultValue: 'radio'},
    { name: 'label', type: 'text', defaultValue: 'Radio'},
    { name: 'radioType', type: 'string', defaultValue: 'radio', enum:['radio', 'button']},
    { name: 'options',  type: 'list', subFields: [
      { name: 'label', type: 'string' },
      { name: 'value', type: 'string' }
    ]}
  ],
  canHaveChildren: false
};
