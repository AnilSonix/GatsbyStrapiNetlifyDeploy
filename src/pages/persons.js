import React from "react"
import { graphql } from "gatsby"

const PersonsPage = ({ data }) => {
  return (
    <div>
      <h1>
        All persons <small>from Strapi</small>
      </h1>

      <ul>
        {data.persons.edges.map(({ node }) => (
          <li>
            <strong>{node.name}</strong> @ <small>{node.email}</small>
          </li>
        ))}
      </ul>
    </div>
  )
}

export const query = graphql`
  {
    persons: allStrapiPersons {
      edges {
        node {
          email
          dob
          name
          ussername
        }
      }
    }
  }
`

export default PersonsPage
