# Steedos App Builder

Drag and drop app building using your react components

## Register your components

```
import { Builder } from '@steedos/builder'
 
// Register our heading component for use in 
// the visual editor
const Hello = props => (
  <h1 className={style}>Hello {props.name}</h1>
)
 
Builder.registerComponent(Hello, { 
  name: '@custom/hello',
  label: 'Hello',
  props: [{ prop: 'name', type: 'text' }]
})
```

## Design app visually

You can build your app by drag & drop.

### Generate my.page.json

```json
{
    "@type": "@steedos/component-page",
    "children": [
        {
            "@type": "@steedos/component-sections",
            "title": "Section 1",
            "children": [
                {
                    "@type": "@custom/hello",
                    "name": "World"
                }
            ]
        },
    ]
}
```

## Render your visually created page

```
import { Render, Builder } from '@steedos/builder'
  
export default let MyPage = () => {
  const [appJson, setPage] = useState(null)
 
  return <Render content={appJson} />
}

```
