import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";

function Welcome() {
  const router = useRoute();
  const navigate = useNavigation();
  const [user, setUser] = useState(router.params.user);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
        gap: 30,
      }}
    >
      <Text
        style={{
          fontSize: 30,
        }}
      >
        Welcome {user.email}
      </Text>
      <TouchableOpacity
        onPress={() => {
          navigate.navigate("Chats");
        }}
        style={{
          width: 120,
          height: 50,
          padding: 10,
          backgroundColor: "black",
          borderRadius: 10,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            color: "white",
            fontSize: 20,
          }}
        >
          View Chats
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigate.navigate("Books");
        }}
        style={{
          width: 120,
          height: 50,
          padding: 10,
          backgroundColor: "black",
          borderRadius: 10,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            color: "white",
            fontSize: 20,
          }}
        >
          View Books
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default Welcome;
