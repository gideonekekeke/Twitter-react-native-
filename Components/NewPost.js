import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import {
  MoreOutlined,
  MessageOutlined,
  RetweetOutlined,
  HeartOutlined,
  ShareAltOutlined,
} from "@ant-design/icons";
// import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

const NewPost = ({ text, profile }) => {
  return (
    <View
      style={{
        // height: 200,
        width: 320,
        border: "1px solid white",
        borderBottomColor: "silver",
        alignItems: "center",
        // flexDirection: "row",
        fontFamily: "poppins",
        // margin: 20,
        // marginTop: 40,
      }}
    >
      <View style={{ margin: 20, alignItems: "center" }}>
        <View style={{ flexDirection: "row" }}>
          <Image
            source={profile}
            style={{
              height: 40,
              width: 40,
              borderRadius: 50,
              backgroundColor: "silver",
            }}
          />

          <View style={{ marginLeft: 10 }}>
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 10,
              }}
            >
              Gideon ekeke{" "}
              <Text
                style={{ fontWeight: "lighter", color: "gray", marginLeft: 5 }}
              >
                2h
              </Text>
              <MoreOutlined
                style={{ marginLeft: 150, fontSize: 10, fontWeight: "bold" }}
              />
            </Text>

            <Text style={{ width: 250, fontSize: 12, marginTop: 5 }}>
              {text}
            </Text>
          </View>
        </View>
        {/* <Image
          source={img}
          style={{
            height: 130,
            width: 240,
            backgroundColor: "silver",
            marginLeft: 40,
            marginTop: 20,
            borderRadius: 5,
          }}
        /> */}
        <View
          style={{
            flexDirection: "row",
            width: 240,
            // backgroundColor: "red",
            marginLeft: 20,
            marginTop: 7,
            justifyContent: "space-around",
            fontSize: 13,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <MessageOutlined />
            <Text style={{ fontSize: 10, marginLeft: 5 }}>30</Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <RetweetOutlined />
            <Text style={{ fontSize: 10, marginLeft: 5 }}>1,1k</Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <HeartOutlined />
            <Text style={{ fontSize: 10, marginLeft: 5 }}>2.5k</Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <ShareAltOutlined />
            <Text style={{ fontSize: 10, marginLeft: 5 }}>510</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default NewPost;

const styles = StyleSheet.create({});
