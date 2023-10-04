import { gql, useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  FlatList,
  Pressable,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  AntDesign,
  MaterialIcons,
  Entypo,
  Feather,
  FontAwesome,
} from "@expo/vector-icons";
import URLFormatter from "../helpers/URLFormatter";
import YoutubePlayer from "react-native-youtube-iframe";
import { GET_MOVIE_BY_ID } from "../config/queries";
import Preloader from "../components/Preloader";
import ErrorData from "../components/ErrorData";

const DetailScreen = ({ navigation, route }) => {
  const { movieId } = route.params;
  const [movie, setMovie] = useState({});
  const [showTrailer, setShowTrailer] = useState(false);
  const { data, loading, error } = useQuery(GET_MOVIE_BY_ID, {
    variables: {
      movieId,
    },
  });

  console.log(movie, "<<<<<<<<<<<<<<<");
  // console.log(showTrailer, "<><><><>><><<><><>");
  // console.log(movie.Casts, "><><><><><><><>");
  useEffect(() => {
    setMovie(data?.movie || {});
  }, [data]);

  if (loading) {
    return <Preloader />;
  }

  if (error) {
    return <ErrorData />;
  }

  return (
    <View style={{ backgroundColor: "black" }}>
      {showTrailer ? (
        <YoutubePlayer height={300} videoId={URLFormatter(movie.trailerUrl)} />
      ) : (
        <ImageBackground
          source={{
            uri: movie.imgUrl,
          }}
          style={{
            width: "100%",
            height: 300,
            resizeMode: "center",
          }}
        ></ImageBackground>
      )}

      <FlatList
        style={{ marginBottom: 350 }}
        ListHeaderComponent={
          <View style={{ padding: 12 }}>
            <Text style={styles.title}>{movie.title}</Text>
            <View style={{ flexDirection: "row", gap: 3, marginBottom: 5 }}>
              <Text style={styles.match}>98% match</Text>
              <View style={styles.ageContainer}>
                <Text style={styles.age}>12+</Text>
              </View>
              <Text style={styles.attributes}>Seasons</Text>
              <MaterialIcons name="hd" size={24} color="white" />
            </View>
            <TouchableOpacity
              style={styles.playButton}
              onPress={() => setShowTrailer(!showTrailer)}
            >
              <Text style={styles.playButtonText}>
                <Entypo name="controller-play" size={16} color="black" />
                {showTrailer ? "Hide" : "Play"} Trailer
              </Text>
            </TouchableOpacity>
            <Pressable style={styles.downloadButton}>
              <Text style={styles.downloadButtonText}>
                <AntDesign name="download" size={16} color="white" /> Download
              </Text>
            </Pressable>
            <Text style={{ marginVertical: 10, color: "white" }}>
              {movie.synopsis}
            </Text>

            <Text style={{ marginVertical: 10, color: "grey" }}>Casts:</Text>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                flex: 1,
                paddingVertical: 10,
                gap: 20,
                // backgroundColor: "white",
              }}
            >
              {movie?.Casts?.map((cast) => (
                <View key={cast.id}>
                  <Image
                    source={{
                      uri: cast.profilePict,
                    }}
                    style={{
                      width: "100%",
                      height: 120,
                      flex: 1,
                    }}
                  />
                  <Text style={{ color: "white", width: 80, height: 35 }}>
                    {cast.name}
                  </Text>
                </View>
              ))}
            </View>

            <Text style={{ marginVertical: 10, color: "white" }}>
              Author: {movie?.author?.username}
            </Text>
            <View style={{ flexDirection: "row", marginTop: 20 }}>
              <View style={{ alignItems: "center", marginHorizontal: 20 }}>
                <AntDesign name="plus" size={24} color={"white"} />
                <Text style={{ color: "darkgrey", marginTop: 5 }}>My List</Text>
              </View>

              <View style={{ alignItems: "center", marginHorizontal: 20 }}>
                <Feather name="thumbs-up" size={24} color="white" />
                <Text style={{ color: "darkgrey", marginTop: 5 }}>Rate</Text>
              </View>

              <View style={{ alignItems: "center", marginHorizontal: 20 }}>
                <FontAwesome name="send-o" size={24} color="white" />
                <Text style={{ color: "darkgrey", marginTop: 5 }}>Share</Text>
              </View>
            </View>
            <View style={{ backgroundColor: "white" }}></View>
          </View>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    aspectRatio: 16 / 9,
    resizeMode: "cover",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    marginBottom: 5,
  },
  match: {
    color: "#59d467",
    fontWeight: "bold",
    marginRight: 5,
  },
  attributes: {
    color: "#757575",
    marginRight: 5,
  },
  ageContainer: {
    backgroundColor: "#e6e229",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 2,
    paddingHorizontal: 3,
    marginRight: 5,
  },
  age: {
    color: "black",
    fontWeight: "bold",
  },

  playButton: {
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    borderRadius: 3,
    marginVertical: 5,
  },
  playButtonText: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
  },
  downloadButton: {
    backgroundColor: "#2b2b2b",
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    borderRadius: 3,
    marginVertical: 5,
  },
  downloadButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },

  video: {
    width: "100%",
    aspectRatio: 16 / 9,
  },

  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
  },
});

export default DetailScreen;
