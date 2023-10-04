import { StyleSheet, Text, View } from "react-native";
import Row from "./Row";
import { gql, useQuery } from "@apollo/client";
import { GET_MOVIES } from "../config/queries";
import { SafeAreaView } from "react-native-safe-area-context";
import Preloader from "./Preloader";
import ErrorData from "./ErrorData";

const Rows = () => {
  const { loading, error, data } = useQuery(GET_MOVIES);

  if (loading) {
    return <Preloader />;
  }

  if (error) {
    return <ErrorData />;
  }

  return (
    <View>
      <Row rowTitle={"Netflix Originals"} data={data} />
      <Row rowTitle={"Top Rated"} data={data} />
      <Row rowTitle={"Trending Now"} data={data} />
    </View>
  );
};

export default Rows;

const styles = StyleSheet.create({});
