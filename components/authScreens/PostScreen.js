import axios from "axios";
import { useContext } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { PostContext } from "../../context/postContext";
import UpdateModal from "./UpdateModal";
import React,{useState} from 'react';
const PostScreen = ({ posts, auth }) => {
  const { getPosts } = useContext(PostContext);
  const handleDeletePost = async (_id) => {
    try {
      const { data } = await axios.delete(`/post/delete-post/${_id}`);
      if (data?.success) {
        getPosts();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const [modalVisible, setModalVisible] = useState(false);
  const [updatePost, setUpdatepost] = useState({});
  return (
    <>
    <UpdateModal modalVisible={modalVisible} setModalVisible={setModalVisible} post={updatePost} getPosts={getPosts}/>
      {posts?.map((p, i) => (
        <View style={styles.post} key={i}>
          
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={styles.title}>{p?.title}</Text>
            {!auth && (
              <TouchableOpacity onPress={() => handleDeletePost(p?._id)}>
                <Text>
                  <FontAwesome5
                    style={styles.postIcon}
                    name="window-close"
                    color={"red"}
                  />
                </Text>
              </TouchableOpacity>
            )}
          </View>

          <Text style={styles.postDesc}> {p?.description}</Text>
          <View style={styles.postUser}>
            {auth && (
              <Text style={styles.userTitle}>
                <FontAwesome5
                  style={styles.postIcon}
                  name="user"
                  color={"orange"}
                />{" "}
                {p?.postedBy?.name}
              </Text>
            )}
            <Text style={styles.userTitle}>
              <FontAwesome5
                style={styles.postIcon}
                name="clock"
                color={"orange"}
              />{" "}
              {p?.createdAt && new Date(p.createdAt).toLocaleString()}
            </Text>
            {!auth && (
              <TouchableOpacity onPress={() =>{ setModalVisible(true);setUpdatepost(p)}}>
                <Text>
                  <FontAwesome5
                    style={styles.postIcon}
                    name="edit"
                    color={"orange"}
                  />
                </Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      ))}
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
  post: {
    backgroundColor: "white",
    padding: 10,
    margin: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#808098",
  },
  title: {
    fontSize: 16,
    fontWeight: "500",
  },
  postDesc: {
    fontSize: 14,
    fontWeight: "400",
  },
  postUser: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    paddingVertical: 5,
    marginTop: 15,
  },
  userTitle: {
    fontSize: 16,
    fontWeight: "500",
  },
  postIcon: {
    fontSize: 18,
    fontWeight: "500",
  },
});
export default PostScreen;
