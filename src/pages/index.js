import React from "react"
import { Link, graphql } from "gatsby"

import App from "../components/App";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

import SEO from "../components/seo";
import "bootstrap/dist/css/bootstrap.min.css"

const IndexPage = () => (
  <App>
    <SEO title="Home" />
    <CTA>
      <h2>Persosa</h2>
      <p>Connecting TV and Digital Experiences</p>
      <p>
        Monetize all consumer touchpoints by connecting consumer experiences and
        the underlying data.
      </p>
    </CTA>
    <Link to="/blog/">Blog</Link>
    <Footer />
  </App>
)

export default IndexPage
