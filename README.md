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
  name: 'Heading',
  settings: [{ name: 'title', type: 'text' }]
})
```

## App Designer

You can build your app by drag & drop.

## App json

```json
{
    "name": "Hello World",
    "type": "page",
    "components": [
        {
            "type": "section",
            "label": "Section 1",
            "droppable": true,
            "components": [
                {
                    "type": "header",
                    "props: {
                        title: "Hello World"
                     }
                }
            ]
        },
    ]
}
```

## App Render

Render you app by json
  
