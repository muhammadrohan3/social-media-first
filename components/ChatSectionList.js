import React, {useState, useEffect} from "react";
import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
const chatData = [
  {
    name: "Ali",
    time: "10:00",
    read: false,
    message: "Hello",
    profile:
      "https://imgv3.fotor.com/images/gallery/Realistic-Male-Profile-Picture.jpg",
  },
  {
    name: "Ahmed",
    time: "10:00",
    read: true,
    message: "How Are you ? ",
    profile:
      "https://www.shutterstock.com/image-photo/head-shot-portrait-close-smiling-250nw-1714666150.jpg",
  },
  {
    name: "Asad",
    time: "10:00",
    read: false,
    message: "I am fine",
    profile:
      "https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg",
  },
];

const chat = ({ item }) => {
  console.log(item);
  return (
    <TouchableOpacity
      style={{
        width: "90%",
        height: 80,
        backgroundColor: "white",
        borderWidth : 1,
        borderRadius : 10,
        padding : 10,
        flexDirection: "row",
        borderColor: "gray",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <View
        style={{
          flex: 0.2,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          source={{ uri: item.profile }}
          alt=""
          width={60}
          height={60}
          style={{
            borderRadius: 50,
            border: 1,
            borderWidth: 2,
            borderColor: "green",
          }}
        />
      </View>
      <View
        style={{
          fontSize: 20,
          textAlign: "left",
          flex: 0.6,
          
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontWeight: "semibold",
          }}
        >
          {item.name}
        </Text>
        <Text
          style={{
            color: "gray",
            fontSize: 15,
            fontWeight: "normal",
          }}
        >
          {item.message}
        </Text>
      </View>
      <View
        style={{
          margin: "4",
          textAlign: "left",
          flex: 0.15,
          gap: 10,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: 8,
            margin: "4",
            textAlign: "left",
          }}
        >
          {item.time} pm
        </Text>
        {item.read && (
          <View
            style={{
              borderRadius: 50,
              borderColor: "green",
              backgroundColor: "green",
              width: 20,
              height: 20,
              borderWidth: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: 10,
                textAlign: "center",
                color: "white",
              }}
            >
              {1}
            </Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

function Chats() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",

        alignItems: "center",
        width: "100%",
      }}
    >
      <Text
        style={{
          width: "100%",
          textAlign: "center",
          fontSize: 30,
          marginTop: 30,
        }}
      >
        Chats
      </Text>
      <FlatList data={chatData} renderItem={chat} style ={{
        width:"100%"

      }}
      contentContainerStyle = {{
        alignItems:"center",
        gap : 10,
        marginTop : 20

      }}
      />
    </View>
  );
}

export default Chats;
