export const configProForm = {
  name: 'Steedos:Form',
  inputs: [
    { name: 'title', type: 'text' },
    { name: 'initialValues', type: 'code', language: 'javascript', defaultValue: "({})"},
    { name: 'onValuesChange', type: 'code', language: 'javascript', defaultValue: "(values) => {  }"},
    { name: 'onFinish', type: 'code', language: 'javascript', defaultValue: "(values) => {  }"},
  ],
  canHaveChildren: true
};
