import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Button } from "antd";
import { FlatList } from "react-native-gesture-handler";

const Follow = () => {
  const data = [
    { id: 1, name: "Chizoba Emma", image: require("../img/f1.png") },
    { id: 1, name: "Malush ", image: require("../img/f3.png") },
    { id: 1, name: "Samuel", image: require("../img/f2.jpg") },
    { id: 1, name: "pick a studio", image: require("../img/f4.png") },
  ];
  return (
    <View
      style={{
        // height: 200,
        width: 320,
        border: "1px solid white",
        borderBottomColor: "silver",
        // alignItems: "center",
        // flexDirection: "row",
        fontFamily: "poppins",
        // margin: 20,
        // marginTop: 40,
      }}
    >
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={data}
        keyExtractor={(data) => data.id.toString()}
        renderItem={({ item }) => (
          <View
            style={{
              height: 150,
              width: 100,
              border: "1px solid silver",
              margin: 20,
              borderRadius: 10,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              resizeMode="cover"
              source={item.image}
              style={{
                height: 50,
                width: 50,
                borderRadius: 50,
                backgroundColor: "silver",
              }}
            />
            <Text style={{ fontSize: 12, marginTop: 20 }}> {item.name}</Text>
            <Button
              style={{
                width: 70,
                marginTop: 10,
                color: "white",
                background: "#08a0e9",
                border: "none",
                height: 30,
                borderRadius: 10,
              }}
            >
              Follow
            </Button>
          </View>
        )}
      />
    </View>
  );
};

export default Follow;

const styles = StyleSheet.create({});
