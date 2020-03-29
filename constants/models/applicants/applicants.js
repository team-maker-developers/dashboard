import gql from 'graphql-tag'

export const getApplicants = gql`
  query($id: ID!) {
    applicants(id: $id) {
        id,
        name,
        info,
      }
    }
  }
`
