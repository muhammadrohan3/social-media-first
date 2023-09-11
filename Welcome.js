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
        gap:30
      }}
    >
      <Text style= {{
        fontSize:30
      }}>Welcome {user.email}</Text>
      <TouchableOpacity
        onPress={() => {
          navigate.navigate("Login");
        }}
        style={{
          width: 100,
          height: 50,
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
          Logout
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default Welcome;
