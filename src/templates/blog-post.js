import React, { Component } from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

class BlogPost extends Component {
  render() {
    const { title, slug, content } = this.props.data.contentfulBlog
    return (
      <div>
        <h1>{title}</h1>
        {documentToReactComponents(content.json, {
          renderMark: {
            bold: text => <b /* style={{ color: "red" }} */>{text}</b>,
          },
        })}
      </div>
    )
  }
}

BlogPost.propTypes = {
  data: PropTypes.object.isRequired,
}

export default BlogPost

export const pageQuery = graphql`
  query blogPostQuery($slug: String!) {
    contentfulBlog(slug: { eq: $slug }) {
      title
      slug
      content {
        json
      }
    }
  }
`
