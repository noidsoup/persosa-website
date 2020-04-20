import React from "react";
import { Link, graphql } from "gatsby";
import Footer from "../components/Footer";

import App from "../components/App";
import Navigation from "../components/Navigation";
import SEO from "../components/Seo";

const BlogPost = ({node}) => {
  return (
    <li>
      <Link to={node.slug}>{node.title}</Link>
    </li>
  )
}

const Blog = ({data}) => (
  <App>
    <SEO title="Blog" />
    <Navigation />
    <ul>
      {data.allContentfulBlog.edges.map((edge) => <BlogPost key={edge.node.title}  node={edge.node} />)}
    </ul>
    <Link to="/page-2/">Go to page 2</Link>
    <Footer />
  </App>
)

export default Blog

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