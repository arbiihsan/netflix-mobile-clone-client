import { SafeAreaView } from "react-native-safe-area-context";
import {
  Button,
  View,
  Text,
  StyleSheet,
  FlatList,
  ScrollView,
} from "react-native";
import Header from "../components/Header";
import Rows from "../components/Rows";

const HomeScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1, backgroundColor: "black" }}>
        <Header />
        <Rows />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
