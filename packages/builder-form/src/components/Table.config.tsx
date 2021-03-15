export const configTable = {
  name: 'Steedos:Table',
  inputs: [
    {
      name: 'columns', friendlyName: "列配置", type: 'list', required: true, helperText: '表格列的配置描述', subFields: [
        { name: 'title', type: 'string', helperText: '标题' },
        { name: 'dataIndex', type: 'string', helperText: '列数据在数据项中对应的路径' },
        { name: 'key', type: 'string', helperText: 'React 需要的 key，如果已经设置了唯一的 dataIndex，可以忽略这个属性' },
        { name: 'width', type: 'number', defaultValue: 60, helperText: '列宽' },
        { name: 'align', type: 'string', defaultValue: 'left', helperText: '对齐方式', enum: ['left', 'right', 'center'] },
        {
          name: 'valueType', type: 'string',
          enum: [
            'password', 'money', 'textarea', 'option', 'date',
            'dateWeek', 'dateMonth', 'dateQuarter', 'dateYear',
            'dateRange', 'dateTimeRange', 'dateTime', 'time',
            'timeRange', 'text', 'select', 'checkbox', 'rate',
            'radio', 'radioButton', 'index', 'indexBorder',
            'progress', 'percent', 'digit', 'second', 'avatar',
            'code', 'switch', 'fromNow', 'image', 'jsonCode',
          ]
        },
        { name: 'sorter', type: 'boolean', defaultValue: false, helperText: '排序' },
        { name: 'search', type: 'boolean', defaultValue: false, helperText: '搜索' },
        { name: 'ellipsis', type: 'boolean', defaultValue: false, helperText: '超过宽度将自动省略，暂不支持和排序筛选一起使用' },
        { name: 'copyable', type: 'boolean', defaultValue: false, helperText: '复制按钮' },
        {
          name: 'filters', type: 'list', subFields: [
            { name: 'text', type: 'string' },
            { name: 'value', type: 'string' }
          ], helperText: '表头的筛选菜单项'
        },
        { name: 'tip', type: 'string', helperText: '提示语' },
        {
          name: 'formItemProps', type: 'object', subFields: [
            { name: 'required', type: 'boolean', defaultValue: false },
          ], helperText: '控制标题对应的输入框'
        }
      ],
      defaultValue: [{
        title: 'Name',
        dataIndex: 'name',
      }]
    },
    { name: 'rowKey', friendlyName: "行Key", type: 'string', required: true, defaultValue: 'key', helperText: '表格行 key 的取值，对于 dataSource 默认将每列数据的 key 属性作为唯一的标识。' },
    { name: 'request', friendlyName: "数据源", type: 'code', required: true, language: 'javascript', 
      defaultValue: `async (params, sorter, filter) => {
  return {
    data: [{name: 'Hello World'}],
    success: true,
    total: 1,
  }
}`, helperText: '获取数据源的请求函数' },
    // { //default dataSource
    //   name: 'defaultData', type: 'list', subFields: [
    //     { name: 'col1', type: 'string', defaultValue: 'a1' },
    //     { name: 'col2', type: 'string', defaultValue: 'b1' },
    //     { name: 'col3', type: 'string', defaultValue: 'c1' },
    //   ], 
    //   advanced: true
    // },

    // {
    //   name: 'expandable', type: 'object', subFields: [
    //     { name: 'childrenColumnName', type: 'string', defaultValue: 'children', helperText: '指定树形结构的列名' },
    //     { name: 'columnWidth', type: 'number',helperText: '自定义展开列宽度' },
    //     { name: 'defaultExpandAllRows', type: 'boolean', defaultValue: false, helperText: '初始时，是否展开所有行' },
    //     { name: 'expandIconColumnIndex', type: 'number', helperText: '自定义展开按钮的列顺序，-1 时不展示' },
    //     { name: 'expandRowByClick', type: 'boolean', defaultValue: false, helperText: '通过点击行来展开子行' },
    //     { name: 'indentSize', type: 'number', helperText: '展示树形数据时，每层缩进的宽度，以 px 为单位' },
    //   ], helperText: '展开功能的配置'
    // },

    { name: 'headerTitle', type: 'string', helperText: '表格名称', advanced: true },
    { name: 'size', type: 'string', defaultValue: 'default', enum: ['default', 'middle', 'small'], advanced: true },
    // {
    //   name: 'dateFormatter', type: 'string',
    //   enum: ['string', 'number', 'false'], helperText: '转化 moment 格式数据为特定类型，false 不做转化', advanced: true
    // },
    // { name: 'columnEmptyText', type: 'string', helperText: '空值时的显示，不设置时显示 -', advanced: true },
    // { name: 'tableClassName', type: 'string', helperText: '封装的 table 的 className', advanced: true },
    {
      name: 'options', type: 'object', subFields: [
        { name: 'fullScreen', type: 'boolean', defaultValue: true },
        { name: 'reload', type: 'boolean', defaultValue: true },
        { name: 'setting', type: 'boolean', defaultValue: true },
        { name: 'density', type: 'boolean' },
      ], helperText: 'table 工具栏按钮', advanced: true
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
      ], helperText: '搜索表单的配置', advanced: true
    },

    // { name: 'bordered', type: 'boolean', defaultValue: true, advanced: true },
    { name: 'loading', type: 'boolean', defaultValue: false, advanced: true },
  ],
  canHaveChildren: true
}