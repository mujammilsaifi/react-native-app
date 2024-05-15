import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const FooterMenu = () => {
  const navigation = useNavigation();
  const route = useRoute();

  return (
    <View style={styles.footer}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Home')}>
        <FontAwesome5
          name="home"
          style={[styles.iconStyle, route.name === 'Home' && styles.activeIcon]}
        />
        <Text style={[styles.link, route.name === 'Home' && styles.activeText]}>
          Home
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Post')}>
        <FontAwesome5
          name="plus-square"
          style={[styles.iconStyle, route.name === 'Post' && styles.activeIcon]}
        />
        <Text style={[styles.link, route.name === 'Post' && styles.activeText]}>
          Post
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('MyPost')}>
        <FontAwesome5
          name="list"
          style={[styles.iconStyle, route.name === 'MyPost' && styles.activeIcon]}
        />
        <Text style={[styles.link, route.name === 'MyPost' && styles.activeText]}>
          My Post
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('About')}>
        <FontAwesome5
          name="info-circle"
          style={[styles.iconStyle, route.name === 'About' && styles.activeIcon]}
        />
        <Text style={[styles.link, route.name === 'About' && styles.activeText]}>
          About
        </Text>
      </TouchableOpacity>
      
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Account')}>
        <FontAwesome5
          name="user-cog"
          style={[styles.iconStyle, route.name === 'Account' && styles.activeIcon]}
        />
        <Text style={[styles.link, route.name === 'Account' && styles.activeText]}>
          Account
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
    paddingHorizontal: 20,
    paddingVertical:10,
    backgroundColor: '#f5f5f5',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  button: {
    alignItems: 'center',
  },
  link: {
    fontSize: 14,
    fontWeight: '500',
    marginTop: 5,
  },
  iconStyle: {
    fontSize: 22,
    marginBottom: 5,
  },
  activeIcon: {
    color: 'orange',
  },
  activeText: {
    color: 'orange',
  },
});

export default FooterMenu;
