import React from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'

function Search({handleChanges}) {
  return (
    <View
        style={{
          felx: 1,
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          flexDirection: "row",
          padding: 10,
          gap: 10,
        }}
      >
        <TextInput
          style={{
            borderWidth: 1,
            borderColor: "black",
            borderRadius: 10,
            flexGrow: 1,
            height: 50,
            padding: 10,
            margin: 10,
          }}
          onChangeText={(text) => {
            handleChanges(text);
          }}
          placeholder="Book name"
        />
        <TouchableOpacity
          style={{
            backgroundColor: "black",
            borderRadius: 10,
            padding: 10,
            height: 50,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              color: "white",
            }}
          >
            Search
          </Text>
        </TouchableOpacity>
      </View>
  )
}

export default Search