
import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/accordion";
import {
  Box
} from "@chakra-ui/layout";
import { FormItemProps } from "./FormItem";
import { createFormItem } from "./Form";
import { Grid } from "@chakra-ui/react";

export type FormSectionProps<T = Record<string, any>>  = {
  fields?: FormItemProps[],
  columns?:number,
  formProps?: any,
  children?: any,
}


export default class FormSection extends React.Component<any> {
  static defaultProps = {
    title: 'Section',
  }
  render() {
    const {
      title,  
      columns,
      children, 
      fields = [], 
      formProps,
      ...rest} = this.props

    return (
      <Accordion defaultIndex={[0]} allowMultiple colorScheme='gray' pb={2}>
        <AccordionItem borderBottom={0} borderTop={0}>
          <Box background='gray.100' borderRadius={2}>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                {title}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </Box>
          <AccordionPanel py={2} px={0}>
          <Grid templateColumns={[`repeat(1, 1fr)`, `repeat(${columns}, 1fr)`]} gap={4}>
            {
              fields.map((field:FormItemProps) => {
                return createFormItem(field, formProps)
              })
            }
            {children}
          </Grid>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    )
  }
}