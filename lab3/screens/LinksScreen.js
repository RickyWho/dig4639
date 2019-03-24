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

export default class LinkScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };
  static navigationOptions = {
    title: 'Info about Cats',
  };

  render() {
            const {navigate} = this.props.navigation;

    return (
      <ScrollView style={styles.container}>
                            <Text style={styles.infoText}>Cat</Text>


      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  infoText: {
    paddingTop: 30,
    fontSize: 28,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
});
