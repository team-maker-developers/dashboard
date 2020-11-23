import gql from 'graphql-tag'

export const getEmploymentCategories = gql`
  query {
    employmentCategories {
      id
      name
    }
  }
`

export const getIndustries = gql`
  query($parent_id: ID) {
    industries(parent_id: $parent_id) {
      id
      name
      children {
        id
        name
        children {
          id
          name
          children {
            id
            name
          }
        }
      }
    }
  }
`

export const getOccupations = gql`
  query($parent_id: ID) {
    occupations(parent_id: $parent_id) {
      id
      name
      children {
        id
        name
        children {
          id
          name
        }
      }
    }
  }
`
