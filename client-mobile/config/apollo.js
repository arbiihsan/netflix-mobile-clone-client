import { ApolloClient, InMemoryCache } from "@apollo/client";
import { API_URL } from "./api";

const client = new ApolloClient({
  uri: API_URL, //ngrok
  cache: new InMemoryCache(),
});

export default client;
