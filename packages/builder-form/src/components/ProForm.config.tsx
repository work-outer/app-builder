export const configProForm = {
  name: '@steedos/builder-form:Form',
  image:
  'https://cdn.builder.io/api/v1/image/assets%2FIsxPKMo2gPRRKeakUztj1D6uqed2%2Fef36d2a846134910b64b88e6d18c5ca5',
  inputs: [
    { name: 'name', type: 'string' },
    { name: 'columns', type: 'number', defaultValue: 2},
    { name: 'layout', type: 'string', defaultValue: 'horizontal', enum: ['horizontal', 'vertical', 'inline']},
    { name: 'labelAlign', type: 'string', enum:['left', 'right'], defaultValue: 'right' },
    { name: 'size', type: 'string', enum: ['small', 'middle', 'large'], defaultValue: 'middle' },
    { name: 'initialValues', helperText:'表单默认值，只有初始化以及重置时生效。', type: 'code', language: 'javascript', defaultValue: "({})"},
    { name: 'onValuesChange', type: 'code', language: 'javascript', defaultValue: "(values) => {  }"},
    { name: 'onFinish', type: 'code', language: 'javascript', defaultValue: "(values) => {  }"},
    { name: 'preserve', type: 'boolean', defaultValue: 'true' },  // 当字段被删除时保留字段值
    { name: 'submitter', type: 'boolean', defaultValue: 'true' },
    { name: 'scrollToFirstError', type: 'boolean', defaultValue: 'false' },  // 提交失败自动滚动到第一个错误字段
    { name: 'dateFormatter', type: 'string', enum: ['string', 'number', 'false'], defaultValue: 'string'},  // 自动格式数据,主要是 moment 的表单
    // ProForm 会自动清空 null 和 undefined 的数数据，如果你约定了 nil 代表某种数据，可以设置为 false 关闭此功能
    { name: 'omitNil', type: 'boolean', defaultValue: 'true' },
    { name: 'labelCol', type: 'object', subFields: [
      { name: 'span', type: 'number' },
      { name: 'offset', type: 'number' }
    ]},

  ],
  canHaveChildren: true
};
