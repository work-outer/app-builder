
import React from "react";
import { Grid } from '@chakra-ui/react';

export class Layout extends React.Component<any> {
  static defaultProps = {
    column: 12,
  }

  render() {
    const {column, ...rest} = this.props

    return (
      <>
        <Grid
          // column={[1, column,column,column]}
          {...rest}
          >
        </Grid>
      </>
    )
  }
}

export default Layout;