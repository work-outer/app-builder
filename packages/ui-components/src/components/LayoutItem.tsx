
import React from "react";
import { GridItem } from '@chakra-ui/react';

export class LayoutItem extends React.Component<any> {
  static defaultProps = {
    colSpan: 12,
  }

  render() {
    const {colSpan, ...rest} = this.props

    return (
      <>
        <GridItem
          colSpan={[1,colSpan,colSpan,colSpan]}
          {...rest}
          >
        </GridItem>
      </>
    )
  }
}

export default LayoutItem;