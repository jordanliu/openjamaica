import React from "react"

import { Layout, CardWrapper } from "../components/index"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Open Jamaica" />
    <h1 className="title">Resources for Jamaican Developers</h1>
    <CardWrapper />
  </Layout>
)

export default IndexPage
