export const configProFormRadio = {
  name: 'Steedos:FormRadio',
  inputs: [
    { name: 'name', type: 'text', defaultValue: 'radio'},
    { name: 'label', type: 'text', defaultValue: 'Radio'},
    { name: 'radioType', type: 'list', 
      defaultValue: 'radio', 
      enum:['button','radio']
    },
    { name: 'options',  type: 'list', subFields: [
      { name: 'label', type: 'string' },
      { name: 'value', type: 'string' }
    ]}
  ],
};
