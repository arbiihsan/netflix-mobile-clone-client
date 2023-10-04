import {
  Image,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { AntDesign, Entypo, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Header = () => {
  const navigation = useNavigation();
  return (
    <View style={{ backgroundColor: "black" }}>
      <ImageBackground
        style={{ width: "100%", height: 410, position: "relative" }}
        source={{
          uri: `https://www.themoviedb.org/t/p/original/cW6nfuf35oXXq1tvHEg9l5COo9c.jpg`,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            // justifyContent: "space-between",
            gap: 25,
            padding: 15,
            paddingTop: 20,
          }}
        >
          <Image
            style={{ height: 33, width: 20 }}
            source={{
              uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Netflix_2015_N_logo.svg/423px-Netflix_2015_N_logo.svg.png",
            }}
          />
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Pressable
              onPress={() => {
                navigation.navigate("UnderConstruction");
              }}
            >
              <Text style={{ fontSize: 14, color: "white" }}>TV shows</Text>
            </Pressable>
            <Pressable
              onPress={() => {
                navigation.navigate("UnderConstruction");
              }}
            >
              <Text
                style={{
                  fontSize: 14,
                  color: "white",
                  marginHorizontal: 25,
                }}
              >
                Movies
              </Text>
            </Pressable>
            <Pressable
              onPress={() => {
                navigation.navigate("UnderConstruction");
              }}
            >
              <Text style={{ fontSize: 14, color: "white" }}>My List</Text>
            </Pressable>
          </View>
        </View>
      </ImageBackground>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
          marginBottom: 10,
          margin: 15,
        }}
      >
        <View>
          <Pressable
            onPress={() => {
              navigation.navigate("UnderConstruction");
            }}
          >
            <AntDesign
              style={{ textAlign: "center" }}
              name="plus"
              size={24}
              color="white"
            />
            <Text style={{ fontSize: 11, color: "white", marginTop: 3 }}>
              My List
            </Text>
          </Pressable>
        </View>

        <TouchableOpacity
          onPress={() => {
            navigation.push("Detail", {
              movieId: 8,
            });
          }}
        >
          <View
            style={{
              backgroundColor: "white",
              padding: 8,
              paddingLeft: 1,
              width: 80,
              justifyContent: "space-evenly",
              alignItems: "center",
              borderRadius: 4,
              flexDirection: "row",
            }}
          >
            <Entypo name="controller-play" size={24} color="black" />
            <Text style={{ fontSize: 15, fontWeight: "bold", color: "black" }}>
              Play
            </Text>
          </View>
        </TouchableOpacity>

        <View>
          <Pressable
            onPress={() => {
              navigation.navigate("UnderConstruction");
            }}
          >
            <MaterialIcons
              style={{ textAlign: "center" }}
              name="info-outline"
              size={28}
              color="white"
            />
            <Text
              style={{
                fontSize: 11,
                color: "white",
                marginTop: 3,
                marginLeft: 5,
              }}
            >
              Info
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
