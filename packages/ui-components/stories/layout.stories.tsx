import * as React from "react"
import { Layout, Box } from "../src"

export default {
  title: "Layout",
}

export const WithColumns = () => (
  <Layout columns={[2, null, 3]} spacing="40px">
    <Box bg="tomato" height="200px" />
    <Box bg="tomato" height="200px" />
    <Box bg="tomato" height="200px" />
    <Box bg="tomato" height="200px" />
    <Box bg="tomato" height="200px" />
  </Layout>
)
