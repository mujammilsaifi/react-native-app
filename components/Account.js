import React, { useContext, useState } from "react";
import { ScrollView, View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from "react-native";
import { AuthContext } from "../context/authContext";
import FooterMenu from "./Menus/FooterMenu";
import axios from "axios";

const Account = () => {
  const [auth, setAuth] = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState({
    name: auth?.user?.name,
    email: auth?.user?.email,
    phone: auth?.user?.phone,
  });

  const handleChange = (name, value) => {
    setUserData({ ...userData, [name]: value });
  };

  const handleUpdate = async () => {
    setLoading(true);
  
    try {
      const response = await axios.put('/auth/update-profile', userData);
  
      if (response.data && response.data.success) {
        setAuth({user:null})
      } else {
        console.error('Update failed:', response.data.message);
      }
    } catch (error) {
      console.error('Error updating profile:', error);
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <View style={styles.container}>
      
        <View style={styles.userDetails}>
        <Image
          style={{width: 200, height: 200,borderRadius:20,marginBottom:20}}
          source={{uri:'https://cdn-icons-png.freepik.com/256/3135/3135715.png?semt=ais_hybrid'}} 
          />
          <TextInput
            style={styles.input}
            placeholder="Name"
            value={userData.name}
            onChangeText={(text) => handleChange("name", text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={userData.email}
            onChangeText={(text) => handleChange("email", text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Phone"
            value={userData.phone}
            onChangeText={(text) => handleChange("phone", text)}
          />
          <TouchableOpacity style={styles.button} onPress={handleUpdate}>
            <Text style={styles.buttonText}>{loading?'Please Wait..':'update'}</Text>
          </TouchableOpacity>
        </View>
      </View>
      <FooterMenu />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContainer: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  userDetails: {
    width: "80%",
    alignItems: "center",
  },
  avatar: {
    width: 40,
    height: 50,
    marginBottom: 20,
  },
  input: {
    width: "100%",
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  button: {
    width: "100%",
    height: 40,
    backgroundColor: "#007bff",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
});

export default Account;
