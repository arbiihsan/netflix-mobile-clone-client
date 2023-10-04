import { useNavigation } from "@react-navigation/native";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  TouchableOpacity,
} from "react-native";
//   import React, { useEffect, useState } from "react";

const Row = ({ rowTitle, data }) => {
  // console.log(data, "<<<<<<<<<<<<<");
  const navigation = useNavigation();

  return (
    <View>
      <Text
        style={{
          fontSize: 19,
          fontWeight: "bold",
          color: "white",
          marginTop: 5,
          marginLeft: 10,
        }}
      >
        {rowTitle}
      </Text>
      <ScrollView horizontal showsVerticalScrollIndicator={false}>
        {data.movies.map((movie, id) => (
          <TouchableOpacity
            key={id}
            onPress={() => {
              navigation.push("Detail", {
                movieId: movie?.id,
              });
            }}
          >
            <Image
              style={{
                width: 105,
                margin: 10,
                marginRight: 5,
                height: 152,
                borderRadius: 4,
                resizeMode: "cover",
              }}
              source={{
                uri: movie.imgUrl,
              }}
            />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default Row;

const styles = StyleSheet.create({});
