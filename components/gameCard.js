import { View, Text, Image } from "react-native";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { TouchableOpacity } from "react-native";
import { ArrowDownTrayIcon, HeartIcon } from "react-native-heroicons/solid";
import { storeColors } from "../constants/theme";

export default function GameCard({ game }) {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <View className="mr-4 relative">
      <Image source={game.image} className="w-80 h-60 rounded-3xl" />
      <LinearGradient
        colors={["transparent", "rgba(0,0,0,0.6)"]}
        className="absolute p-4 h-full w-full flex justify-between rounded-3xl"
      >
        <View className="flex-row justify-end">
          <TouchableOpacity
            onPress={() => setIsFavorite(!isFavorite)}
            className="p-3 rounded-full"
            style={{ backgroundColor: "rgba(255,255,255, 0.3)" }}
          >
            <HeartIcon
              size="25"
              color={isFavorite ? storeColors.redHeart : "white"}
            />
          </TouchableOpacity>
        </View>

        <Text className="text-xl font-bold text-gray-300">{game.title}</Text>

        <View className="flex-row items-center space-x-2">
          <ArrowDownTrayIcon size="18" color="lightgray" />
          <Text className="text-gray-300 text-sm font-semibold">
            {game.downloads} Downloads
          </Text>
        </View>
      </LinearGradient>
    </View>
  );
}
