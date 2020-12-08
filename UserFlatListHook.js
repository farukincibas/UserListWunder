import React, { useState,useEffect } from 'react';
import { Button, Text, StyleSheet, View, FlatList, Image } from 'react-native';
import { ListItem , Avatar} from "react-native-elements";
import { useNavigation } from '@react-navigation/native';

function UserFlatList() {
    // Declare a new state variable, which we'll call "count"
    let [users, setUsers] = useState([]);
    const navigation = useNavigation();

    useEffect(() => {
        // Update the document title using the browser API
       
        setInterval(getRemoteData,3000);
      });

   function getRemoteData() {
        const url = "https://randomuser.me/api/";
        fetch(url)
          .then(res => res.json())
          .then(res => {
            let x=res.results;
            setUsers(prevArray => [...prevArray, x]);
         
          })
          .catch(error => {
            console.log("get data error from:" + url + " error:" + error);
          });
      };
    
     function capFirstLetter (string)  {
        return string.charAt(0).toUpperCase() + string.slice(1);
      }
    
    function  renderNativeItem  (item)  {
      console.log(item[0].name.first);
        console.log(item[0].name.first.charAt(0).toUpperCase()+item[0].name.first.slice(1));
        const name = capFirstLetter(item[0].name.title) + ". " 
          + capFirstLetter(item[0].name.first) + " " 
          + capFirstLetter(item[0].name.last);
        return <ListItem  button  onPress={() => onPressItem(item)}>
        <Avatar source={{uri: item[0].picture.thumbnail}} />
        <ListItem.Content>
          <ListItem.Title>{name}</ListItem.Title>
          <ListItem.Subtitle>{item[0].email}</ListItem.Subtitle>
        </ListItem.Content>
        <ListItem.Chevron />
      </ListItem>;
      }
    
     function onPressItem (item)  {
        console.log("onPress email with item: " + item);
        navigation.navigate('Detail', {item: item})
      }

    return (
        <View>
        
        <FlatList
          data={users}
          renderItem={({item}) => renderNativeItem(item)}
          keyExtractor={(item, index) => index.toString()}
        />
       
      
      </View>
    );
  }

  export default UserFlatList