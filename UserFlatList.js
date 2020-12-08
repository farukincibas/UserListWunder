import React from 'react';
import { View, FlatList } from 'react-native';
import { ListItem, Avatar, Icon } from "react-native-elements";



class UserFlatList extends React.Component {
  constructor() {
    super();

    this.state = {
      users: [],

      // dataSource: [{key:1, name:'abc item'}, {key:2, name:'def item'}],
    };
    this.getRemoteData();
  }

  componentDidMount() {

    this.timer = setInterval(this.getRemoteData, 10000);
  }
  componentWillUnmount() {
    clearInterval(this.timer);
    this.timer = null;
  }

  getRemoteData = () => {
    const url = "https://randomuser.me/api/";
    fetch(url)
      .then(res => res.json())
      .then(res => {
        let x = res.results;
        this.state.users.push({ x });
        this.setState({
          data: res.results,
          count: this.state.count + 1
        });
      })
      .catch(error => {
        console.log("get data error from:" + url + " error:" + error);
      });
  };

  capFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  renderNativeItem = (item) => {
    console.log(item.x[0].name.first.charAt(0).toUpperCase() + item.x[0].name.first.slice(1));
    const name = this.capFirstLetter(item.x[0].name.title) + ". "
      + this.capFirstLetter(item.x[0].name.first) + " "
      + this.capFirstLetter(item.x[0].name.last);
    return <ListItem button onPress={() => this.onPressItem(item)}>
      <Avatar source={{ uri: item.x[0].picture.thumbnail }} />

      <ListItem.Content>
        <ListItem.Title>{name}</ListItem.Title>
        <ListItem.Subtitle>{item.x[0].email}</ListItem.Subtitle>
      </ListItem.Content>
      <Icon name='chevron-right' type='FontAwesome' />
    </ListItem>;
  }

  onPressItem = (item) => {
    this.props.navigation.navigate('Detail', { item: item })
  }

  render() {
    return (
      <View>

        <FlatList
          data={this.state.users}
          renderItem={({ item }) => this.renderNativeItem(item)}
          keyExtractor={(item, index) => index.toString()}
        />


      </View>
    );
  }
}

export default UserFlatList