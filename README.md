# Steedos App Builder

Drag and drop app building using your react components

## Register your components

```
import { AppBuilder } from '@steedos/app-builder'
 
// Register our heading component for use in 
// the visual editor
const Heading = props => (
  <h1 className={style}>{props.title}</h1>
)
 
AppBuilder.registerComponent(Heading, { 
  name: '@custom/heading',
  label: 'Heading',
  settings: [{ name: 'title', type: 'text' }]
})
```

## Design app visually

You can build your app by drag & drop.

### Generate my.app.json

```json
{
    "@type": "@app-builder/page",
    "children": [
        {
            "@type": "@app-builder/sections",
            "label": "Section 1"
            "children": [
                {
                    "@type": "@custom/heading",
                    "title": "Hello World"
                }
            ]
        },
    ]
}
```

## Render your visually created app

```
import { AppRender, AppBuilder } from '@steedos/app-builder'
  
export default let MyPage = () => {
  const [appJson, setPage] = useState(null)
 
  return <AppRender content={appJson} />
}

```
