export const configProForm = {
  name: 'Steedos:Form',
  inputs: [
    { name: 'title', type: 'text' },
    { name: 'layout', type: 'string', defaultValue: 'horizontal', enum: ['horizontal', 'vertical', 'inline']},
    { name: 'initialValues', helperText:'表单默认值，只有初始化以及重置时生效。', type: 'code', language: 'javascript', defaultValue: "({})"},
    { name: 'onValuesChange', type: 'code', language: 'javascript', defaultValue: "(values) => {  }"},
    { name: 'onFinish', type: 'code', language: 'javascript', defaultValue: "(values) => {  }"},
  ],
  canHaveChildren: true
};
