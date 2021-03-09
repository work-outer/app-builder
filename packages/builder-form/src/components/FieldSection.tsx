import React, { useContext } from 'react';
import { Grid, GridItem, Flex, Box } from '@chakra-ui/layout'
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/accordion";
import _ from 'lodash';

export function FieldSection(props: any) {
  const { attributes, title, columns = 3, gap = '0rem 2rem', children } = props
  
  const boxOptions = {
    templateColumns: [`repeat(1, 1fr)`, `repeat(${columns}, 1fr)`],
    gap,
  }
  
  const renderChildren = (children:any) => {
    const result: any[] = []
    _.forEach(children, (child:any) => {
      result.push(child)
      return child
    })
    return (result)
  }

  return (
    <Accordion defaultIndex={[0]} allowMultiple colorScheme='gray' pb={2} {...attributes}>
      <AccordionItem borderBottom={0} borderTop={0}>
        <Box background='gray.100' borderRadius={2}>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              {title}
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </Box>
        <AccordionPanel py={2} px={4}>
          <Grid {...boxOptions}>
            {renderChildren(children)}
          </Grid>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  )
}