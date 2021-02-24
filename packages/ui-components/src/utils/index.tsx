export function getFieldValueType(fieldType:string, defaultValueType?:string) {

    switch(fieldType) { 
      case "checkbox": return 'switch'
      case "switch": return 'switch'
      case "text": return 'text'
      case "href": return 'href'
      case "textarea": return 'textarea'
      case "select": return 'select'
      case "number": return 'digit'
      case "percent": return 'percent'
      case "currency": return 'money'
      case "date": return 'date'
      case "datetime": return 'datetime'
      defaut: return defaultValueType?defaultValueType:fieldType?fieldType:'text'
    }
}