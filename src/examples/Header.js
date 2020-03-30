import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const getSiteData = graphql`
  {
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

const Header = () => {
  const data = useStaticQuery(getSiteData)
  const {
    site: { siteMetadata },
  } = data
  return (
    <div>
      <h1>title:{siteMetadata.title}</h1>
      <h1>author:{siteMetadata.author}</h1>
      <p>age: {siteMetadata.data.age}</p>
    </div>
  )
}

export default Header
