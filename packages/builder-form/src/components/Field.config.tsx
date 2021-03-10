export const configField = {
  name: 'Steedos:Field',
  image:
    'https://cdn.builder.io/api/v1/image/assets%2FIsxPKMo2gPRRKeakUztj1D6uqed2%2Fad6f37889d9e40bbbbc72cdb5875d6ca',
  inputs: [
    { name: 'name', type: 'text', required: true},
    { name: 'label', type: 'text', defaultValue: 'Label', required: true}, 
    { name: 'valueType', type: 'string', defaultValue: 'text', required: true,
      enum: [
            'password','money','textarea','option','date',
            'dateWeek','dateMonth','dateQuarter','dateYear',
            'dateRange','dateTimeRange','dateTime','time',
            'timeRange','text','select','checkbox','rate',
            'radio','radioButton','index','indexBorder',
            'progress','percent','digit','second','avatar',
            'code','switch', 'fromNow','image', 'jsonCode',
          ]
    },
    { name: 'options',  type: 'list', required: true, subFields: [
      { name: 'value', type: 'string', defaultValue: 'value' },
      { name: 'label', type: 'string', defaultValue: 'label' }
    ], showIf: 'options.get("valueType") === "checkbox" || options.get("valueType") === "radio" '
            + '|| options.get("valueType") === "radioButton" || options.get("valueType") === "select" '},
    { name: 'readonly', type: 'boolean', defaultValue: false },  
    { name: 'required', type: 'boolean', defaultValue: false },
    { name: 'allowClear', type: 'boolean', defaultValue: false },
    { name: 'placeholder', type: 'string' },
    { name: 'tooltip', type: 'string' },
    { name: 'disabled', type: 'boolean', defaultValue: false, helperText: '禁用' },

    { name: 'count', type: 'number', defaultValue: 5, helperText: 'star 总数', showIf: 'options.get("valueType") === "rate"'},

    { 
      name: 'defaultValue', type: 'number', helperText: '初始值', 
      showIf: 'options.get("valueType") === "money" || options.get("valueType") === "progress"' 
      + ' || options.get("valueType") === "digit" || options.get("valueType") === "percent"'
      + ' || options.get("valueType") === "rate" '
    },
    { 
      name: 'precision', type: 'number', helperText: '数值精度', 
      showIf: 'options.get("valueType") === "money" || options.get("valueType") === "progress"' 
      + ' || options.get("valueType") === "digit"'
    },
    
    { name: 'defaultChecked', type: 'boolean', defaultValue: false, helperText: '初始是否选中', showIf: 'options.get("valueType") === "switch"' },
    
    { name: 'type', type: 'string', defaultValue:'circle', enum: ['line', 'circle', 'dashboard' ], showIf: 'options.get("valueType") === "progress"'}

    // {
    //   name: 'fieldProps', type: 'object', subFields: [
    //     { name: 'autoFocus', type: 'boolean', defaultValue: false, helperText: '自动获取焦点' },
    //     { name: 'inputReadOnly', type: 'boolean', defaultValue: false, helperText: '设置输入框为只读（避免在移动设备上打开虚拟键盘）' }
    //   ], showIf: 'options.get("valueType") === "text" || options.get("valueType") === "fromNow"'
    //           + ' || options.get("valueType") === "date" || options.get("valueType") === "dateRange"'
    //           + ' || options.get("valueType") === "time" || options.get("valueType") === "timeRange"'
    //           + ' || options.get("valueType") === "dateTime" || options.get("valueType") === "dateTimeRange"'
    //           + ' || options.get("valueType") === "dateWeek" || options.get("valueType") === "dateMonth"'
    //           + ' || options.get("valueType") === "dateQuarter" || options.get("valueType") === "dateYear"'
    //           + ' || options.get("valueType") === "progress" || options.get("valueType") === "percent"'
    // },

  ],
  defaultStyles: {
    display: 'block',
    marginTop: '0',
    marginBottom: '0',
  },
  noWrap: true,
  canHaveChildren: false,
  requiresParent: {
    message: 'This block must be inside a "Field Section" block',
    query: {
      'component.name': { $in: ['Steedos:Form','Steedos:FieldSection', 'Steedos:FieldObject'] }
    }
  }
};
