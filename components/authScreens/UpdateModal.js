import axios from "axios";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
const UpdateModal = ({ modalVisible, setModalVisible, post ,getPosts}) => {
  const [title, setTitle] = useState(post?.title);
  const [loading, setLoading] = useState(false);
  const [description, setDescription] = useState(post?.description);
  useEffect(() => {
  setDescription(post?.description);
  setTitle(post?.title)
  }, [post])
  const handleUpdatePost = async () => {
    if (!title || !description) {
      return Alert.alert("Please Enter the post title and description");
    }
    setLoading(true);
    try {
      const { data } = await axios.put(`/post/update-post`, {_id:post?._id,
        title,
        description,
      });
      if (data?.success) {
        getPosts();
        setLoading(false);
        setModalVisible(false);
      } else {
        setLoading(false);
        Alert.alert(data?.message);
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.container}>
              <View style={styles.userDetails} >               
                  <TouchableOpacity onPress={() => setModalVisible(false)} >
                    <Text>
                      <FontAwesome5
                        style={styles.postIcon}
                        name="window-close"
                        color={"orange"}
                      />
                    </Text>
                  </TouchableOpacity>             
                  <Text style={styles.heading}>Create Post </Text>
                  <TextInput
                    onChangeText={(text) => setTitle(text)}
                    style={styles.textInput}
                    placeholder="Enter Post title"
                    value={title}
                  />
                  <TextInput
                    onChangeText={(text) => setDescription(text)}
                    style={styles.textInput}
                    value={description}
                    placeholder="Enter Post description"
                    multiline={true}
                    numberOfLines={4}
                  />
                  <TouchableOpacity
                    style={styles.btn}
                    onPress={handleUpdatePost}
                  >
                    <Text style={styles.btnText}>
                      {loading ? "Update..." : "Update"}
                    </Text>
                  </TouchableOpacity>
               
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 0,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    textTransform: "uppercase",
  },
  textInput: {
    fontSize: 18,
    fontWeight: "500",
    backgroundColor: "white",
    color: "black",
    paddingHorizontal: 5,
    marginTop: 15,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    width: 280,
  },
  btn: {
    backgroundColor: "black",
    padding: 10,
    marginTop: 15,
    borderRadius: 15,
  },
  btnText: {
    color: "white",
    fontSize: 18,
    fontWeight: "500",
    textAlign: "center",
  },
  postIcon: {
    fontSize: 18,
    fontWeight: "500",
    justifyContent: "flex-end",
  },
  footer: {
    flex: 1,
    justifyContent: "flex-end",
  },
});

export default UpdateModal;
