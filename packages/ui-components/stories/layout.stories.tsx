import * as React from "react"
import { Layout, Center, LayoutItem } from "../src"

export default {
  title: "Grid",
}

export const ThreeColumns = () => (
  <Layout column="12" gap="4">
    <LayoutItem bg="tomato" height="100px" colSpan={12}><Center h="100%" color="white">1</Center></LayoutItem>
    <LayoutItem bg="tomato" height="200px" colSpan={3}><Center h="100%" color="white">2</Center></LayoutItem>
    <LayoutItem bg="tomato" height="200px" colSpan={6}><Center h="100%" color="white">3</Center></LayoutItem>
    <LayoutItem bg="tomato" height="200px" colSpan={3}><Center h="100%" color="white">4</Center></LayoutItem>
    <LayoutItem bg="tomato" height="100px" colSpan={12}><Center h="100%" color="white">5</Center></LayoutItem>
  </Layout>
)

export const TwoColumn1 = () => (
  <Layout columns="12" gap="4">
    <LayoutItem bg="tomato" height="100px" colSpan={12}><Center h="100%" color="white">1</Center></LayoutItem>
    <LayoutItem bg="tomato" height="200px" colSpan={4}><Center h="100%" color="white">2</Center></LayoutItem>
    <LayoutItem bg="tomato" height="200px" colSpan={8}><Center h="100%" color="white">3</Center></LayoutItem>
    <LayoutItem bg="tomato" height="100px" colSpan={12}><Center h="100%" color="white">4</Center></LayoutItem>
  </Layout>
)

export const TwoColumn2 = () => (
  <Layout columns="12" gap="4">
    <LayoutItem bg="tomato" height="100px" colSpan={12}><Center h="100%" color="white">1</Center></LayoutItem>
    <LayoutItem bg="tomato" height="200px" colSpan={8}><Center h="100%" color="white">2</Center></LayoutItem>
    <LayoutItem bg="tomato" height="200px" colSpan={4}><Center h="100%" color="white">3</Center></LayoutItem>
    <LayoutItem bg="tomato" height="100px" colSpan={12}><Center h="100%" color="white">4</Center></LayoutItem>
  </Layout>
)


export const OneColumn = () => (
  <Layout columns="12" gap="4">
    <LayoutItem bg="tomato" height="100px" colSpan={12}><Center h="100%" color="white">1</Center></LayoutItem>
    <LayoutItem bg="tomato" height="100px" colSpan={12}><Center h="100%" color="white">2</Center></LayoutItem>
    <LayoutItem bg="tomato" height="100px" colSpan={12}><Center h="100%" color="white">3</Center></LayoutItem>
  </Layout>
)