import React from 'react'
import { View, Text, FlatList, Image } from 'react-native'

function BooksList({books}) {
  return (
    <View
        style={{
          flex: 1,
        }}
      >
        <FlatList
          data={books}
          numColumns={3}
          columnWrapperStyle={{
            paddingVertical: 10,
            gap: 10,
          }}
          contentContainerStyle={{
            paddingHorizontal: 10,
            gap: 10,
          }}
          renderItem={({ item }) => {
            return (
              <View
                style={{
                  flex: 1,
                  flexGrow: 0.33,
                }}
              >
                <Image
                  source={{ uri: item.pic }}
                  style={{
                    height: 180,
                    width: "100%",
                    borderRadius: 10,
                    marginBottom: 10,
                  }}
                />
                <Text
                  style={{
                    textAlign: "left",
                    fontSize: 12,
                    fontWeight: "bold",
                  }}
                >
                  {item.name}
                </Text>
                <Text
                  style={{
                    textAlign: "left",
                    fontSize: 10,
                    fontWeight: "normal",
                  }}
                >
                  By {item.author}
                </Text>
              </View>
            );
          }}
        />
      </View>
  )
}

export default BooksList