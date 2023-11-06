import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Svg, Path } from "react-native-svg";

function Nav() {
  const [show, setShow] = useState(false);
  return (
    <View
      style={{
        width: "100%",
        position: "relative",
      }}
    >
      <View
        style={{
          backgroundColor: "black",
          width: "100%",
          height: 50,
          justifyContent: "center",
          alignItems: "left",
        }}
      >
        <View
          style={{
            width: 35,
            height: 35,
            backgroundColor: "white",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 50,
            marginLeft: 10,
          }}
        >
          <Text
            style={{
              color: "black",
              fontSize: 30,
            }}
            onPress={()=>{
                setShow(!show)
            }}
          >
            +
          </Text>
        </View>
      </View>
      <View
        style={{
          position: "absolute",
          width: "50%",
          height: "100%",
          backgroundColor: "black",
          borderColor: "black",
          borderWidth: 1,
          top: 0,
          left: show ? "0%" : "-50%",
          zIndex: 5,
        }}
      >
        <View
          style={{
            width: "100%",
            height: 50,
            backgroundColor: "black",
            alignItems: "center",
            justifyContent: "flex-end",
            flexDirection: "row",
          }}
        >
          <View
            style={{
              width: 30,
              height: 30,
              backgroundColor: "white",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 50,
              marginRight: 10,
            }}
          >
            <Text
              style={{
                color: "black",
                fontSize: 25,
              }}
                onPress={()=>{
                    setShow(!show)
                }}
            >
              x
            </Text>
          </View>
        </View>
        <View style = {{
            width : "100%",
            height : "100%",
            backgroundColor : "white",
            
        }}>
          <Text
            style={{
              fontSize: 20,
              margin: 10,
            }}
          >
            Social Media
          </Text>
          <TouchableOpacity
            style={{
              paddingLeft: 10,
              paddingTop: 10,
              backgroundColor: "#E4E4E4",
              width: "100%",
              height: 50,
              justifyContent: "center",
              alignItems: "left",
            }}
          >
            <Text
              style={{
                fontSize: 15,
              }}
            >
              Books
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              paddingLeft: 10,
              paddingTop: 10,
              backgroundColor: "#E4E4E4",
              width: "100%",
              height: 50,
              justifyContent: "center",
              alignItems: "left",
            }}
          >
            <Text
              style={{
                fontSize: 15,
              }}
            >
              Chats
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default Nav;
