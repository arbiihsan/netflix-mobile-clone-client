import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import MainStack from "./MainStack";
import { Ionicons, AntDesign, Octicons } from "@expo/vector-icons";
import UnderConstructionScreen from "../screens/UnderConstructionScreen";

const Tab = createBottomTabNavigator();

export default function MainTab() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "gray",
        tabBarLabelPosition: 10,
        tabBarStyle: {
          height: 55,
          paddingHorizontal: 5,
          paddingTop: 5,
          backgroundColor: "black",
          position: "absolute",
          borderTopWidth: 0,
          paddingBottom: 5,
        },
      }}
    >
      <Tab.Screen
        name="Dashboard"
        component={MainStack}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <Octicons
                name="home"
                color={focused ? "white" : "grey"}
                size={22}
              />
            );
          },
        }}
      ></Tab.Screen>
      <Tab.Screen
        name="Search"
        component={UnderConstructionScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <AntDesign
                name="search1"
                color={focused ? "white" : "grey"}
                size={22}
              />
            );
          },
        }}
      ></Tab.Screen>
      <Tab.Screen
        name="Downloads"
        component={UnderConstructionScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <AntDesign
                name="download"
                color={focused ? "white" : "grey"}
                size={22}
              />
            );
          },
        }}
      ></Tab.Screen>
      <Tab.Screen
        name="More"
        component={UnderConstructionScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <Ionicons
                name="md-menu"
                color={focused ? "white" : "grey"}
                size={22}
              />
            );
          },
        }}
      ></Tab.Screen>
    </Tab.Navigator>
  );
}
