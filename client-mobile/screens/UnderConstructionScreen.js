import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const UnderConstructionScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "black" }}>
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "55%",
        }}
      >
        <MaterialCommunityIcons name="tools" size={45} color="grey" />
        <Text
          style={{
            color: "white",
            fontSize: 25,
            marginBottom: 5,
            marginTop: 5,
            fontWeight: "bold",
          }}
        >
          Under Construction
        </Text>
        <Text style={{ color: "white" }}>
          Sorry, this page is under construction!
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default UnderConstructionScreen;
