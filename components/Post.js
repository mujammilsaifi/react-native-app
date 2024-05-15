import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import React,{useState} from "react";
import FooterMenu from "./Menus/FooterMenu";
import axios from "axios";

const Post = ({navigation}) => {
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(false);
  const [description, setDescription] = useState("");
  const handlePost = async () => {

    if (!title || !description) {
      return Alert.alert("Please Enter the post title and description");
    }
    setLoading(true);
    try {
      const { data } = await axios.post("/post/add-post", {
        title,
        description,
      });
      if (data?.success) {
        setLoading(false)
        Alert.alert(data?.message);
        navigation.navigate('Home')
      } else { 
        setLoading(false)
        Alert.alert(data?.message);
      }
    } catch (error) {
        setLoading(false)
      console.log(error);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.userDetails}>
        <View>
          <Text style={styles.heading}>Create Post</Text>
          <TextInput onChangeText={text=>setTitle(text)} style={styles.textInput} placeholder="Enter Post title" />
          <TextInput
          onChangeText={text=>setDescription(text)}
            style={styles.textInput}
            placeholder="Enter Post description"
            multiline={true}
            numberOfLines={4}
          />
          <TouchableOpacity style={styles.btn} onPress={handlePost}>
            <Text style={styles.btnText}>{loading?'Creating...':'Create'}</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.footer}>
        <FooterMenu />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userDetails: {
    flex: 1,
    padding: 20,
  },
  heading: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    textTransform: "uppercase",
  },
  textInput: {
    fontSize: 18,
    fontWeight: "600",
    backgroundColor: "white",
    color: "black",
    padding: 5,
    marginTop: 15,
    borderWidth:1,
    borderColor:'gray',
    borderRadius:5
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
  footer: {
    flex: 1,
    justifyContent: "flex-end",
  },
});

export default Post;
