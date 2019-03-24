import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };
  _gotoScreen = (key) => {
    console.log("Going to " + key);
  }
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.topContainer}>
            <Text style={styles.greetingText}>Cats are amazing</Text>
            <FlatList
             data={[{key: 'cat1',image: require('../assets/images/cat2.png')},
             {key: 'cat2',image: require('../assets/images/cat1.png')}, {key: 'cat3',image: require('../assets/images/cat2.png')},  {key: 'cat4',image: require('../assets/images/cat1.png')}]}
             keyExtractor={this._keyExtractor}
              renderItem={({item}) => <TouchableOpacity onPress={() => this.props.navigation.push('LinkScreen',{ otherParam: 'Cats are amazing',
})}
>
                <Image source={item.image} style={{width:200,height:200}} />
              </TouchableOpacity>}
            />
          </View>
        </ScrollView>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  topContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },

  contentContainer: {
    paddingTop: 30,
  },

  greetingText: {
    paddingTop: 30,
    fontSize: 28,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
});
