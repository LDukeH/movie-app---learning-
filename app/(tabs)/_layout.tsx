import { Tabs } from "expo-router";
import { View, Text, ImageBackground, Image } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { images } from "@/constants/images";
import { icons } from "@/constants/icons";

function TabIcon({ focused, title, icon }: any) {
  return focused ? (
    <ImageBackground
      source={images.highlight}
      className="flex-row gap-2 flex-1 w-full min-w-[112px] justify-center items-center min-h-16 mt-4 rounded-full overflow-hidden"
    >
      <Image source={icon} className="size-6" tintColor="#151312" />
      <Text className="font-semibold">{title}</Text>
    </ImageBackground>
  ) : (
    <View className="items-center justify-center flex-1 w-full h-full mt-4 min-h-16">
      <Image source={icon} className="size-6" tintColor="white" />
    </View>
  );
}

export default function Layout() {
  return (
    <SafeAreaProvider>
      <Tabs
        screenOptions={{
          headerShown: false,
          animation: "shift",
          tabBarStyle: {
            backgroundColor: "#151312",
            borderRadius: 50,
            marginHorizontal: 16,
            marginBottom: 36,
            height: 52,
            position: "absolute",
            overflow: "hidden",
            boxSizing: "border-box",
            borderWidth: 1,
            borderBlockColor: "#151312",
          },
          tabBarItemStyle: {
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            height: "100%",
          },
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            headerShown: false,
            title: "",
            tabBarIcon: ({ focused }) => (
              <TabIcon focused={focused} title="Home" icon={icons.home} />
            ),
          }}
        />
        <Tabs.Screen
          name="search"
          options={{
            title: "",
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <TabIcon focused={focused} title="Search" icon={icons.search} />
            ),
          }}
        />
        <Tabs.Screen
          name="saved"
          options={{
            title: "",
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <TabIcon focused={focused} title="Saved" icon={icons.save} />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: "",
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <TabIcon focused={focused} title="Profile" icon={icons.person} />
            ),
          }}
        />
      </Tabs>
    </SafeAreaProvider>
  );
}
