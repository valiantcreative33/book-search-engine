import gql from 'graphql-tag';

export const QUERY_ME = gql`
    {
        me {
            _id
            username
            email
            bookCount
            savedBooks {
                authors
                title
                description
                bookId
                image
                link
            }
        }
    }
`;