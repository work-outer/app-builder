# Steedos UI Builder

通过可视化化的配置方式，生成 Steedos UI Json 定义文件。

例如

```js
builderOptions = {
  components: {
    "Code Block": 
    {
      "label": "Code Block",
      "component": CodeBlockComponent,
      "inputs": [
        {
          name: 'code',
          type: 'text',
          defaultValue: 'const incr = num => num + 1',
        },
        {
          name: 'language',
          type: 'text',
          defaultValue: 'javascript',
        }
      ],
      "dropTarget": ["@steedos/ui-components/form-item"],
    }
  },
  sections: [
    
  ]
},
```