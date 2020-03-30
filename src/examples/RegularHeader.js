import React from "react"
import { StaticQuery, graphql } from "gatsby"

const getSiteData = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        author
        data {
          age
        }
      }
    }
  }
`

const RegularHeader = () => {
  return (
    <StaticQuery
      query={getSiteData}
      render={data => {
        const {
          site: { siteMetadata },
        } = data
        return (
          <div>
            <h2>title : {siteMetadata.title}</h2>
            <h2>author : {siteMetadata.author}</h2>
          </div>
        )
      }}
    />
  )
}

export default RegularHeader
