export const configProTable = {
  name: '@steedos/builder-form:Table',
  inputs: [
    { name: 'title', type: 'string' },
    {
      name: 'dateFormatter', type: 'string',
      enum: ['string', 'number', 'false'], helperText: '转化 moment 格式数据为特定类型，false 不做转化'
    },
    { name: 'columnEmptyText', type: 'string', helperText: '空值时的显示，不设置时显示 -' },
    { name: 'tableClassName', type: 'string', helperText: '封装的 table 的 className' },
    { //dataSource
      name: 'defaultData', type: 'list', subFields: [
        { name: 'col1', type: 'string', defaultValue: 'a1' },
        { name: 'col2', type: 'string', defaultValue: 'b1' },
        { name: 'col3', type: 'string', defaultValue: 'c1' },
      ]
    },

    {
      name: 'options', type: 'object', subFields: [
        { name: 'fullScreen', type: 'boolean', defaultValue: true },
        { name: 'reload', type: 'boolean', defaultValue: true },
        { name: 'setting', type: 'boolean', defaultValue: true },
        { name: 'density', type: 'boolean' },
      ], helperText: 'table 工具栏按钮'
    },

    {
      name: 'search', type: 'object', subFields: [
        {
          name: 'filterType', type: 'string', enum: ['query', 'light'],
          defaultValue: 'query', helperText: '过滤表单类型'
        },
        { name: 'searchText', type: 'string', helperText: '查询按钮的文本' },
        { name: 'resetText', type: 'string', helperText: '重置按钮的文本' },
        { name: 'submitText', type: 'string', helperText: '提交按钮的文本' },
        { name: 'labelWidth', type: 'number', defaultValue: 80, helperText: '标签的宽度' },
        { name: 'span', type: 'number', defaultValue: 80, helperText: '配置查询表单的列数' },
        { name: 'defaultCollapsed', type: 'boolean', defaultValue: true, helperText: '默认是否收起' },
      ], helperText: '搜索表单的配置'
    },

  ],
  canHaveChildren: true
}