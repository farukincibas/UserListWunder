
import React from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import { Avatar, ListItem, Icon } from 'react-native-elements';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';







class UserDetails extends React.Component {
  constructor(props) {
    super(props);

    //console.log(this.props)
  }
  static navigationOptions = {
    title: 'Detail',
  };

  render() {
    console.log(this.props.route.params.item.x[0]);
    const item = this.props.route.params.item.x[0];
    let name = "";
    let img = "";
    let email = "";
    let gender = "";
    let latitudeVal = 37.78825;
    let longitudeVal = -122.4324;

    if (item != null) {
      name = item.name.first + " " + item.name.last;
      img = item.picture.medium;
      email = item.email;
      gender = item.gender;
      latitudeVal = parseFloat(item.location.coordinates.latitude);
      longitudeVal = parseFloat(item.location.coordinates.longitude);

    }

    function Gender() {
      return gender == "male" ? <Icon
        name='mars'
        type='font-awesome'
        color='#f50'
      /> : <Icon
          name='venus'
          type='font-awesome'
          color='#f50'
        />;
    }



    return (
      <>
        <View>
          <ListItem containerStyle={{ backgroundColor: "black" }}>
            <Avatar
              size="large"
              rounded
              activeOpacity={0.7}

              source={{
                uri:
                  img,
              }}
            />

            <Text style={styles.title}>Name</Text><Text style={styles.name}>{name}</Text>

          </ListItem>


        </View>
        <View style={styles.container2}>
          <MapView
            provider={PROVIDER_GOOGLE} // remove if not using Google Maps
            style={styles.map}
            region={{
              latitude: latitudeVal,
              longitude: longitudeVal,
              latitudeDelta: 0.015,
              longitudeDelta: 0.0121,
            }}
          >
          </MapView>
        </View>

        <View
          style={{
            flexDirection: "row",
            height: 100,
            padding: 20
          }}
        >
          <View style={{ backgroundColor: "", flex: 0.3 }} >
            <Text style={styles.title}>Gender</Text>
            <Gender></Gender>

          </View>
          <View style={{ backgroundColor: "", flex: 0.7 }} >
            <Text style={styles.title}>Email</Text>
            <Text style={styles.info}>{email}</Text>
          </View>

        </View>

        <View>
          <View style={styles.body}>
            <View style={styles.bodyContent}>

              <TouchableOpacity
                style={styles.buttonContainer}
                onPress={this._goHome}
              >
                <Text>Home</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

      </>
    );
  }
  _goHome = async () => {
    this.props.navigation.navigate('Home');
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container2: {
    //...StyleSheet.absoluteFillObject,
    height: 400,
    width: 400,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
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

export default UserDetails;