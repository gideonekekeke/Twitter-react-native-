import React from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import {
  MenuOutlined,
  TwitterOutlined,
  StarOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons";

import { FlatList } from "react-native-gesture-handler";
import Post from "./post";
import NewPost from "./NewPost";
import Follow from "./Follow";
const data = [
  { id: 1, avatar: require("../img/2.jpg") },
  { id: 2, avatar: require("../img/3.jpg") },
  { id: 3, avatar: require("../img/4.jpg") },
  { id: 4, avatar: require("../img/5.jpg") },
  { id: 5, avatar: require("../img/6.jpg") },
  { id: 5, avatar: require("../img/7.jpg") },
];

const HomeScreen = ({ text, profile, img }) => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View
          style={{
            width: 320,
            height: 50,
            backgroundColor: "",
            // margin: 10,
            marginTop: 30,
            border: "1px solid white",
            borderBottomColor: "silver",
            borderTopColor: "silver",
            display: "flex",
            alignItems: "center",
          }}
        >
          <View
            style={{
              height: 50,
              width: 270,
              justifyContent: "space-between",
              alignItems: "center",
              display: "flex",
              // backgroundColor: "red",
              flexDirection: "row",
            }}
          >
            <MenuOutlined
              style={{ fontSize: 20, color: "#08a0e9", fontWeight: "bold" }}
            />
            <TwitterOutlined
              style={{ fontSize: 20, color: "#08a0e9", fontWeight: "bold" }}
            />
            <StarOutlined
              style={{ fontSize: 20, color: "#08a0e9", fontWeight: "bold" }}
            />
          </View>
        </View>
        <View
          style={{
            width: 320,
            height: 70,
            backgroundColor: "",
            // margin: 10,
            // marginTop: 30,
            border: "1px solid white",
            borderBottomColor: "silver",
            // borderTopColor: "silver",
            display: "flex",
            alignItems: "center",
          }}
        >
          <View
            style={{
              height: 70,
              width: 270,
              justifyContent: "space-between",
              alignItems: "center",
              display: "flex",
              // backgroundColor: "red",
              flexDirection: "row",
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <Image
                source={require("../img/1.jpg")}
                style={{
                  height: 40,
                  width: 40,
                  borderRadius: 50,
                  backgroundColor: "silver",
                }}
              />
              <PlusCircleOutlined
                style={{
                  marginTop: 23,
                  marginLeft: -15,
                  backgroundColor: "#08a0e9",
                  color: "white",
                  borderRadius: 50,
                  zIndex: 10,
                }}
              />
            </View>

            <FlatList
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              data={data}
              keyExtractor={(data) => data.id.toString()}
              renderItem={({ item }) => (
                <View style={{ flexDirection: "row", marginLeft: 10 }}>
                  <Image
                    source={item.avatar}
                    style={{
                      height: 40,
                      width: 40,
                      borderRadius: 50,
                      backgroundColor: "silver",
                      margin: 5,
                      border: "2px solid #08a0e9",
                    }}
                  />
                </View>
              )}
            />
          </View>
        </View>
        <Post
          profile={require("../img/1.jpg")}
          img={require("../img/my1.jpeg")}
          text="Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s"
        />
        <Post
          profile={require("../img/5.jpg")}
          img={require("../img/my2.jpg")}
          text="Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s"
        />
        <NewPost
          profile={require("../img/3.jpg")}
          text="here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
        />
        <Post
          profile={require("../img/6.jpg")}
          img={require("../img/my3.jpg")}
          text="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."
        />
        <NewPost
          profile={require("../img/4.jpg")}
          text="here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
        />
        <Follow />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
