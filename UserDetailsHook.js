import React, { useState,useEffect } from 'react';
import { Button, Text, StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import { Avatar, ListItem } from 'react-native-elements';


function UserDetails(){

    let [name, setName] = useState();
    let [picture, setPicture] = useState();
    let [email, setEmail] = useState();
    let [gender, setGender] = useState();
   

    const { item } = navigation.getParam('item', 'NO-ID');


    if (item != null) {
        setName(item[0].name.first + " " + item.name.last);
        setPicture(item[0].picture.medium);
        setEmail(email[0] = item.email);
        setGender(gender[0] = item.gender);
      }

      return (
        <>
          <View>
            <ListItem>
              <Avatar
                size="large"
                rounded
                activeOpacity={0.7}
  
                source={{
                  uri:
                    {picture},
                }}
              />
              <Text style={styles.title}>Name</Text><Text style={styles.name}>{name}</Text>
            </ListItem>
          </View>
  
          <View
        style={{
          flexDirection: "row",
          height: 100,
          padding: 20
        }}
      >
        <View style={{ backgroundColor:"", flex: 0.3 }} >
        <Text style={styles.title}>Gender</Text>
                <Text style={styles.info}>{gender}</Text>
        </View>
        <View style={{backgroundColor:"",flex: 0.7 }} >
        <Text style={styles.title}>Email</Text>
                <Text style={styles.info}>{email}</Text>
        </View>
        
      </View>
  
          <View>
            <View style={styles.body}>
              <View style={styles.bodyContent}>
              
                <TouchableOpacity
                  style={styles.buttonContainer}
                  onPress={_goHome}
                >
                  <Text>Home</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
  
        </>
      );
      
async function _goHome  () {
    props.navigation.navigate('Home');
  };
    
}






const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
  },
  header: {
    backgroundColor: "#00BFFF",
    height: 200,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom: 10,
    alignItems: 'center',
  },

  body: {
    marginTop: 40,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding: 30,
  },
  name: {
    fontSize: 22,
    color: "#00BFFF",
    fontWeight: "600"
  },
  title: {
    fontSize: 22,
    color: "#696969",
    fontWeight: "600"
  },
  info: {
    fontSize: 16,
    color: "#00BFFF",
    marginTop: 10
  },
  description: {
    fontSize: 16,
    color: "#696969",
    marginTop: 10,
    textAlign: 'center'
  },
  buttonContainer: {
    marginTop: 10,
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
    backgroundColor: "#00BFFF",
  },

});


export default UserDetails