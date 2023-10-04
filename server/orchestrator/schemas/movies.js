"use strict";

const axios = require("axios");
const APP_SERVICE_URL = process.env.APP_SERVICE_URL || "http://localhost:4002";
const USER_SERVICE_URL =
  process.env.USER_SERVICE_URL || "http://localhost:4001";
const redis = require("../config/redisConnection");

const typeDefs = `#graphql
  type Movie {
    id: ID
    title: String
    slug: String
    synopsis: String
    trailerUrl: String
    imgUrl: String
    rating: Int
    genreId: Int
    authorId: String
    author: User
    Genre: Genre
    Casts: [Cast]
  }

  type User {
    _id: ID
    usename: String
    email: String
  }

  type Cast {
    id: ID
    name: String
    profilePict: String
    movieId: Int
  }

  type Genre {
    id: ID
    name: String
  }

  type Query {
    movies: [Movie]
    movie(id: ID): Movie
    genres: [Genre]
    genre(id: ID): Genre
  }

  type Msg {
    msg: String
  }

  input CastList {
    name: String
    profilePict: String
  }

  type Mutation {
    addMovie(title: String,
    synopsis: String,
    trailerUrl: String,
    imgUrl: String,
    rating: Int,
    genreId: Int,
    authorId: String,
    Casts: [CastList]): Msg

    editMovie(id: ID,
    title: String,
    synopsis: String,
    trailerUrl: String,
    imgUrl: String,
    rating: Int,
    genreId: Int,
    authorId: String,
    Casts: [CastList]): Msg

    deleteMovie(id: ID): Msg
  }
`;

const resolvers = {
  Query: {
    movies: async () => {
      const movieCache = await redis.get("movies");

      try {
        if (movieCache) {
          const data = JSON.parse(movieCache);
          return data;
        } else {
          const { data } = await axios.get(`${APP_SERVICE_URL}/movies`);
          await redis.set("movies", JSON.stringify(data));
          return data;
        }
      } catch (error) {
        console.log(error);
        throw error;
      }
    },

    movie: async (_, args) => {
      const { id } = args;

      try {
        const { data: movie } = await axios.get(
          `${APP_SERVICE_URL}/movies/${id}`
        );

        const { data: authorData } = await axios.get(
          `${USER_SERVICE_URL}/users/${movie.authorId}`
        );

        movie.author = authorData;
        return movie;
      } catch (error) {
        console.log(error);
        throw error;
      }
    },

    genres: async () => {
      const genreCache = await redis.get("genres");

      if (genreCache) {
        const data = JSON.parse(genreCache);
        return data;
      } else {
        const { data } = await axios.get(`${APP_SERVICE_URL}/genres`);
        await redis.set("genres", JSON.stringify(data));
        return data;
      }
    },
    genre: async (_, args) => {
      const { id } = args;

      const { data } = await axios.get(`${APP_SERVICE_URL}/genres/${id}`);
      return data;
    },
  },

  Mutation: {
    addMovie: async (_, args) => {
      const {
        title,
        synopsis,
        trailerUrl,
        imgUrl,
        rating,
        authorId,
        genreId,
        Casts,
      } = args;
      await axios.post(`${APP_SERVICE_URL}/movies`, {
        title,
        synopsis,
        trailerUrl,
        imgUrl,
        rating,
        authorId,
        genreId,
        Casts,
      });

      await redis.del("movies");

      return { msg: "Successfully add movie" };
    },

    editMovie: async (_, args) => {
      const {
        id,
        title,
        synopsis,
        trailerUrl,
        imgUrl,
        rating,
        authorId,
        genreId,
        Casts,
      } = args;

      await axios.put(`${APP_SERVICE_URL}/movies/${id}`, {
        title,
        synopsis,
        trailerUrl,
        imgUrl,
        rating,
        authorId,
        genreId,
        Casts,
      });

      await redis.del("movies");

      return { msg: "Successfully update movie" };
    },

    deleteMovie: async (_, args) => {
      const { id } = args;
      await axios.delete(`${APP_SERVICE_URL}/movies/${id}`);
      await redis.del("movies");

      return { msg: "Data has been deleted" };
    },
  },
};

module.exports = {
  movieTypeDefs: typeDefs,
  movieResolvers: resolvers,
};
