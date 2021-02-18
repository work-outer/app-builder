
import React from "react";
import { Accordion,AccordionItem,AccordionButton,Box,AccordionIcon,AccordionPanel } from '@chakra-ui/react';

// https://developer.salesforce.com/docs/component-library/bundle/lightning-input-field/documentation
export class FormSection extends React.Component<any> {
  static defaultProps = {
    title: 'Section',
  }

  render() {
    const {title,  children, ...rest} = this.props

    return (
      <><Accordion defaultIndex={[0]} allowToggle allowMultiple>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  {title}
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              {children}
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </>
    )
  }
}

export default FormSection;