import { LinearGradient } from "expo-linear-gradient";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { storeColors } from "../constants/theme";
import {
  ArrowDownTrayIcon,
  Bars3CenterLeftIcon,
  BellIcon,
} from "react-native-heroicons/solid";
import { useState } from "react";
import GradientButton from "../components/gradientButton";
import GameCard from "../components/gameCard";
import { Image } from "react-native";

const categories = ["Action", "Family", "Puzzle", "Adventure", "Strategy"];

const featured = [
  {
    id: 1,
    title: "Zooba",
    image: require("./../assets/images/zooba.png"),
    downloads: "1.2M",
  },
  {
    id: 2,
    title: "Subway Surfer",
    image: require("./../assets/images/subway.png"),
    downloads: "1M",
  },
  {
    id: 3,
    title: "Free Fire",
    image: require("./../assets/images/freeFire.png"),
    downloads: "100k",
  },
  {
    id: 4,
    title: "Alto's Adventure",
    image: require("./../assets/images/altosAdventure.png"),
    downloads: "10k",
  },
];

const games = [
  {
    id: 1,
    title: "Shadow Fight",
    image: require("../assets/images/shadowFight.png"),
    downloads: "1.2M",
  },
  {
    id: 2,
    title: "Subway Surfer",
    image: require("../assets/images/subway.png"),
    downloads: "1M",
  },
  {
    id: 3,
    title: "Free Fire",
    image: require("../assets/images/freeFire.png"),
    downloads: "100k",
  },
];
export default function Index() {
  const [activeCategory, setActiveCategory] = useState("Action");

  return (
    <LinearGradient
      colors={["rgba(58,131,244,0.4)", "rgba(9,181,211,0.4)"]}
      className="w-full flex-1"
    >
      <SafeAreaView>
        <View className="container">
          <View className="flex-row justify-between items-center px-4">
            <Bars3CenterLeftIcon color={storeColors.text} size={30} />
            <BellIcon color={storeColors.text} size={30} />
          </View>

          {/* categories */}
          <View className="mt-3 space-y-3">
            <Text
              style={{ color: storeColors.text }}
              className="ml-4 text-3xl font-bold"
            >
              Browse Games
            </Text>
            <View className="pl-4">
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {categories.map((cat) => {
                  if (cat == activeCategory) {
                    // show gradient category
                    // lets create gradient category button
                    return (
                      <GradientButton
                        key={cat}
                        containerClass="mr-2"
                        value={cat}
                      />
                    );
                  } else {
                    // show normal category
                    return (
                      <TouchableOpacity
                        onPress={() => setActiveCategory(cat)}
                        key={cat}
                        className="bg-blue-200 p-3 px-4 rounded-full mr-2"
                      >
                        <Text>{cat}</Text>
                      </TouchableOpacity>
                    );
                  }
                })}
              </ScrollView>
            </View>
          </View>

          {/* featured row */}
          <View className="mt-3 space-y-4">
            <Text
              style={{ color: storeColors.text }}
              className="ml-4 text-lg font-bold"
            >
              Featured Games
            </Text>
            <View>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {featured.map((item, index) => {
                  return <GameCard key={index} game={item} />;
                })}
              </ScrollView>
            </View>
          </View>

          {/* Top action game list */}
          <View className="mt-3">
            <View className="flex-row justify-between items-center mb-2">
              <Text
                style={{ color: storeColors.text }}
                className="ml-4 text-lg font-bold"
              >
                Top Action Games
              </Text>
              <TouchableOpacity className="mr-4">
                <Text className="text-blue-600 font-bold">See All</Text>
              </TouchableOpacity>
            </View>

            <ScrollView
              style={{ height: 300 }}
              showsVerticalScrollIndicator={false}
            >
              {games.map((game, index) => {
                return (
                  <TouchableOpacity
                    key={index}
                    className="mx-4 p-2 mb-2 flex-row"
                  >
                    <Image
                      source={game.image}
                      style={{ height: 80, width: 80 }}
                      className="rounded-2xl"
                    />
                    <View className="ml-4 space-y-1 flex-1">
                      <Text
                        style={{ color: storeColors.text }}
                        className="font-semibold text-lg"
                      >
                        {game.title}
                      </Text>
                      <View className="flex-row items-center space-x-1">
                        <ArrowDownTrayIcon
                          size="20"
                          className="text-blue-600"
                          color="blue"
                        />
                        <Text className="text-lg">{game.downloads}</Text>
                      </View>
                    </View>

                    <View>
                      <GradientButton value="Play" buttonClass="py-2 px-5" />
                    </View>
                  </TouchableOpacity>
                );
              })}
            </ScrollView>
          </View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}
