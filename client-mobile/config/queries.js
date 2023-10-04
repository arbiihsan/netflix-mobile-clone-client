import { gql } from "@apollo/client";

export const GET_MOVIES = gql`
  query movies {
    movies {
      id
      title
      imgUrl
      Genre {
        name
      }
    }
  }
`;

export const GET_MOVIE_BY_ID = gql`
  query Movie($movieId: ID) {
    movie(id: $movieId) {
      id
      title
      synopsis
      imgUrl
      rating
      trailerUrl
      Casts {
        id
        name
        profilePict
      }
      author {
        username
        _id
      }
    }
  }
`;
