export function getFieldValueType(fieldType:string, defaultValueType?:string) {

    switch(fieldType) { 
      case "boolean": return 'checkbox'
      case "switch": return 'switch'
      case "text": return 'text'
      case "href": return 'href'
      case "textarea": return 'textarea'
      case "select": return 'select'
      case "number": return 'digit'
      case "percent": return 'percent'
      case "currency": return 'money'
      case "date": return 'date'
      case "datetime": return 'dateTime'
      defaut: return defaultValueType?defaultValueType:fieldType?fieldType:'text'
    }
}

export function getFieldAllowClear(fieldType: string) {
    // switch(fieldType) { 
    //     case "datetime": return false
    //     case "date": return false
    //     case "lookup": return false
    //     defaut: return true
    // }
    return false
}