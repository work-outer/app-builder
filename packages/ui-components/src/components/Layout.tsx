
import React from "react";
import { Grid } from '..';

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