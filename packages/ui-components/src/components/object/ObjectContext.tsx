
import React from "react";

export type ObjectContextValueType = {
  queryOptions?: object
  requestObject: (name: string) => Promise<object|void>
  setObject?: (name: string, object: object) => Promise<object>
  getObject?: (name: string, object: object) => Promise<object>
}

export const ObjectContext = React.createContext<ObjectContextValueType>({
  requestObject: async (name) =>{
    console.error(`requestObject ${name} failed, you should impl this function in ObjectProvider.`)
  }
});
