import { ScrollView, StyleSheet, View } from "react-native";
import { useContext } from "react";
import FooterMenu from "./Menus/FooterMenu";
import PostScreen from "./authScreens/PostScreen";
import { PostContext } from "../context/postContext";

useContext;
const Home = () => {
  const {posts}=useContext(PostContext);
  return (
    
    <View style={styles.container}>
      <ScrollView>      
     <PostScreen posts={posts} auth={true}/>
      </ScrollView>
      <FooterMenu />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  }
});
export default Home;
