import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import styles from "../css/single-blog.module.css"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

const blogTemplate = ({ data }) => {
  const {
    title,
    published,
    text: { json },
  } = data.post
  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        console.log(node.data.target.fields.file["en-US"].url)

        return (
          <div className="rich">
            <h3>this is awesome image</h3>
            <p>images provided by john doe</p>
            <img
              width="400"
              src={node.data.target.fields.file["en-US"].url}
              alt="awesome images"
            />
          </div>
        )
      },
    },
  }
  return (
    <Layout>
      <section className={styles.blog}>
        <div className={styles.center}>
          <h1>{title}</h1>
          <h4>published at :{published}</h4>
          <article className={styles.post}>
            {documentToReactComponents(json, options)}
          </article>

          <AniLink fade to="/blog" className="btn-primary">
            all posts
          </AniLink>
        </div>
      </section>
    </Layout>
  )
}

export default blogTemplate

export const query = graphql`
  query getPost($slug: String!) {
    post: contentfulPost(slug: { eq: $slug }) {
      title
      published(formatString: "MMMM Do, YYYY")
      text {
        json
      }
    }
  }
`
