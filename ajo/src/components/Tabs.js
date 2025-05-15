import React, { useRef, useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Feather from "@expo/vector-icons/Feather";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import {
  View,
  StyleSheet,
  Animated,
  Easing,
  Dimensions,
  Image,
} from "react-native";
import Text from "./Text";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import Groups from "../screens/Groups";
import FundWallet from "../screens/Contributions";
const Tab = createBottomTabNavigator();
const { width } = Dimensions.get("window");

const AnimatedTabIcon = ({ children, focused }) => {
  const scale = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.timing(scale, {
      toValue: focused ? 1.2 : 1,
      duration: 300,
      easing: Easing.out(Easing.exp),
      useNativeDriver: true,
    }).start();
  }, [focused]);

  return (
    <Animated.View style={{ transform: [{ scale }] }}>{children}</Animated.View>
  );
};

const Tabs = () => {
  const insets = useSafeAreaInsets();

  return (
    <SafeAreaProvider>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarActiveTintColor: "crimson",
          tabBarInactiveTintColor: "white",
          tabBarStyle: {
            backgroundColor: "#FFFFFF",
            height:
              width >= 360
                ? 60 + (insets.bottom || 20)
                : 30 + (insets.bottom || 20),
            overflow: "hidden",
            // justifyContent: "center",
            // alignItems: "center",
          },
          tabBarLabelStyle: {
            display: "none",
          },
        })}
      >
        <Tab.Screen
          name="Home_"
          component={Home}
          options={{
            tabBarIcon: ({ focused }) => (
              <AnimatedTabIcon focused={focused}>
                <View
                  style={[
                    styles.iconContainer,
                    focused && styles.iconContainerActive,
                  ]}
                >
                  <Image
                    source={require("../../assets/home-icon.png")}
                    style={styles.icon}
                  />
                  <Text style={styles.iconLabel}>Home</Text>
                </View>
              </AnimatedTabIcon>
            ),
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Groups"
          component={Groups}
          options={{
            tabBarIcon: ({ focused }) => (
              <AnimatedTabIcon focused={focused}>
                <View
                  style={[
                    styles.iconContainer,
                    focused && styles.iconContainerActive,
                  ]}
                >
                  <Image
                    source={require("../../assets/user-multiple.png")}
                    style={styles.icon}
                  />
                  <Text style={styles.iconLabel}>Groups</Text>
                </View>
              </AnimatedTabIcon>
            ),
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Contributions"
          component={FundWallet}
          options={{
            tabBarIcon: ({ focused }) => (
              <AnimatedTabIcon focused={focused}>
                <View
                  style={[
                    styles.iconContainer,
                    focused && styles.iconContainerActive,
                  ]}
                >
                  <Image
                    source={require("../../assets/piggy-icon.png")}
                    style={styles.icon}
                  />
                  <Text style={styles.iconLabel}>Home</Text>
                </View>
              </AnimatedTabIcon>
            ),
            headerShown: false,
          }}
        />
      </Tab.Navigator>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
    borderRadius: 20,
    height: 40,
    width: 100,
    marginTop: 30,
  },
  iconContainerActive: {
    // width: 90,
  },
  iconLabel: {
    color: "#7F38FF",
    marginLeft: 5,
    fontSize: 14,
  },
  icon: {
    width: 24,
    height: 24,
  },
});

export default Tabs;
