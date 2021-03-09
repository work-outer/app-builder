export const configProFormSlider = {
  name: '@steedos/builder-form:Slider',
  inputs: [
    { name: 'name', type: 'text', defaultValue: 'slider', required: true },
    { name: 'label', type: 'text', defaultValue: 'Slider', required: true },
    { name: 'readonly', type: 'boolean', defaultValue: false },
    { name: 'width', type: 'string', defaultValue: 'md', enum: ['xs', 'sm', 'md', 'lg', 'xl'] },
    { name: 'disabled', type: 'boolean', defaultValue: false, helperText: '禁用' },
    { name: 'min', type: 'number', defaultValue: 0, helperText: '最小值' },
    { name: 'max', type: 'number', defaultValue: 100, helperText: '最大值' },
    { name: 'rules',  type: 'list', subFields: [
      { name: 'required', type: 'boolean', defaultValue: false },
      { name: 'message', type: 'string', defaultValue: 'Please slider...' }
    ], helperText: '控制组件是否必填和校验信息'},
    {
      name: 'step', type: 'number', defaultValue: 1,
      helperText: '步长，取值必须大于 0，并且可被 (max - min) 整除。当 marks 不为空对象时，可以设置 step 为 null，此时 Slider 的可选值仅有 marks 标出来的部分'
    },
    {
      name: 'marks', type: 'list', subFields: [
        { name: 'value', type: 'number' },
        { name: 'label', type: 'string' }
      ], helperText: '刻度标记，key 的类型必须为 number 且取值在闭区间 [min, max] 内，每个标签可以单独设置样式'
    },
    {
      name: 'fieldProps', type: 'object', subFields: [
        { name: 'allowClear', type: 'boolean', defaultValue: false, helperText: '支持清除, 单选模式有效' },
        { name: 'dots', type: 'boolean', defaultValue: false, helperText: '是否只能拖拽到刻度上' },
        { name: 'range', type: 'boolean', defaultValue: false, helperText: '双滑块模式' },
        { name: 'reverse', type: 'boolean', defaultValue: false, helperText: '反向坐标轴' }
      ]
    }
  ],
  defaultStyles: {
    display: 'block',
    marginTop: '0',
  },
  canHaveChildren: false
};
