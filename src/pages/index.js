import React from "react"
import { Link, graphql } from "gatsby"

import App from "../components/App"
/* import Image from "../components/image" */
import SEO from "../components/seo"
import 'bootstrap/dist/css/bootstrap.min.css';

const BlogPost = ({node}) => {
  return (
    <li>
      <Link to={node.slug}>{node.title}</Link>
    </li>
  )
}

const IndexPage = ({data}) => (
  <App>
    <SEO title="Home" />
    <ul>
      {data.allContentfulBlog.edges.map((edge) => <BlogPost key={edge.node.title}  node={edge.node} />)}
    </ul>
    <Link to="/page-2/">Go to page 2</Link>
  </App>
)

export default IndexPage

export const pageQuery = graphql`
  query pageQuery {
    allContentfulBlog (filter: {
      node_locale: {eq: "en-US"}
    }) {
      edges {
        node {
          title
          slug
        }
      }
    }
  }
`