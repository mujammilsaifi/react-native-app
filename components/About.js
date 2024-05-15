import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import FooterMenu from './Menus/FooterMenu';

const About = () => {
  return (
    <View style={styles.container}> 
      <View style={styles.userDetails}>
        <Text style={styles.header}>About Us</Text>
        <Text style={styles.text}>
          My name is Mujammil, and I am a developer. Welcome to our app, a platform where users can share their thoughts and ideas through posts. Our app allows users to create posts with a title and description, making it easy to share detailed information.
        </Text>
        <Text style={styles.text}>
          Here, you can:
        </Text>
        <Text style={styles.text}>
          - Create posts with a title and description.
        </Text>
        <Text style={styles.text}>
          - View posts from other users.
        </Text>
        <Text style={styles.text}>
          - Engage with the community through your posts.
        </Text>
        <Text style={styles.text}>
          We are committed to providing a seamless and enjoyable experience for all our users. Thank you for being a part of our community!
        </Text>
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
    textAlign: 'center',
  },
  footer: {
    justifyContent: 'flex-end',
  }
});

export default About;
