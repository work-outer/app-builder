export function getValueType(fieldType:string) {

    switch(fieldType) { 
      case "boolean": return 'checkbox'
      case "switch": return 'switch'
      case "text": return 'text'
      case "textarea": return 'textarea'
      case "select": return 'select'
      case "number": return 'digit'
      case "percent": return 'percent'
      case "currency": return 'money'
      case "date": return 'date'
      case "datetime": return 'dateTime'
      defaut: return fieldType?fieldType:'text'
    }
}