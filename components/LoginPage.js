import React, { useState } from "react";
import {
  Button,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import favIcon from "../assets/favicon.png";
import { useNavigation } from "@react-navigation/native";
const height = Dimensions.get("window").height;

export default function Login() {
  const navigate = useNavigation();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const handleSubmit = () => {
    if (user.email.length === 0 || user.password.length === 0) {
      alert("Please fill all the fields");
      return;
    }
    navigate.navigate("Welcome", { user: user });
  };
  return (
    <View style={[{ height: height, backgroundColor: "white" }]}>
      <View style={styles.container}>
        <View
          style={{
            flex: 0.2,
            justifyContent: "center",
            alignItems: "center",
            width : '100%'
          }}
        >
          <Image source={favIcon} style={{ width: 100, height: 100 }} />
        </View>
        <View
          style={{
            flex: 0.6,
            gap: 30,
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 30 }}>Login</Text>
          <TextInput
            placeholder="Email"
            value={user.email}
            onChangeText={(e) => setUser({ ...user, email: e })}
            style={{
              width: "90%",
              height: 50,
              borderColor: "black",
              borderWidth: 1,
              borderRadius: 10,
              padding: 10,
            }}
          />
          <TextInput
            placeholder="Password"
            secureTextEntry={true}
            value={user.password}
            onChangeText={(e) => setUser({ ...user, password: e })}
            style={{
              width: "90%",
              height: 50,
              borderColor: "black",
              borderWidth: 1,
              borderRadius: 10,
              padding: 10,
            }}
          />
        </View>
        <View
          style={{
            flex: 0.25,
          }}
        >
          <TouchableOpacity
            onPress={() => {
              handleSubmit();
            }}
            style={{
              width: 190,
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
              Login
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});
