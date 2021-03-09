export const configProFormDigit = {
  name: '@steedos/builder-form:Digit',
  inputs: [
    { name: 'name', type: 'text', defaultValue: 'digit', required: true},
    { name: 'label', type: 'text', defaultValue: 'Digit Field', required: true},
    { name: 'readonly', type: 'boolean', defaultValue: false},
    { name: 'width', type: 'string', defaultValue: 'md', enum: ['xs', 'sm', 'md', 'lg', 'xl']},
    { name: 'min', type: 'number', helperText: '最小值' },
    { name: 'max', type: 'number', helperText: '最大值' },
    { name: 'disabled', type: 'boolean', defaultValue:false, helperText: '禁用' },
    { name: 'initialValue', type: 'number', defaultValue: 0},
    { name: 'fieldProps', type: 'object', subFields: [
      { name: 'precision', type: 'number', defaultValue: 0, required: true, helperText: '数值精度' },
      { name: 'decimalSeparator', type: 'string', helperText: '小数点' },
      { name: 'keyboard', type: 'boolean', defaultValue: false, helperText: '是否启用键盘快捷行为' },
      { name: 'step', type: 'number', defaultValue: 1, helperText: '每次改变步数，可以为小数' },
      // { name: 'stringMode', type: 'boolean', defaultValue: false, helperText: '字符值模式，开启后支持高精度小数' },
    ]},
    { name: 'rules',  type: 'list', subFields: [
      { name: 'required', type: 'boolean', defaultValue: false },
      { name: 'message', type: 'string', defaultValue: 'Please input number' }
    ], helperText: '控制组件是否必填和校验信息'},
  ],
  defaultStyles: {
    display: 'block',
    marginTop: '0',
  },
  canHaveChildren: false
};
