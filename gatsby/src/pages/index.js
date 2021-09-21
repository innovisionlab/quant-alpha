import React from "react"
import { graphql } from "gatsby"
//import Layout from "../components/layout"
//import SEO from "../components/seo"

export default function Home({ data }) {
  return (
    <div>
        {data.allWpPage.nodes[6].content}
    </div>
  )
}

export const pageQuery = graphql`
query MyQuery {
  allWpPage {
    nodes {
      title
        content
    }
  }
}

`