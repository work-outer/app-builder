
import React from "react";
import { Grid } from '@chakra-ui/react';

export class Layout extends React.Component<any> {
  static defaultProps = {
    column: 12,
    gap: 4,
  }

  render() {
    const {height, columns, gap} = this.props

    return (
      <>
        <Grid
          h={height}
          templateColumns={`repeat(${columns}, 1fr)`}
          gap={gap}
          />
      </>
    )
  }
}

export default Layout;