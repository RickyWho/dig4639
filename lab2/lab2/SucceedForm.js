import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View, TextInput, Button } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: '' , nameAvailable:false , isValid:true};
    this.onPress = this.onPress.bind(this);
  }
  static navigationOptions = {
    title: 'Form' ,
  }
  onChange(event) {
    console.log(event);
  //  this.setState({value: event.target.value});
  }

  onPress() {
  //  event.preventDefault();
    if(!/[^a-zA-Z]/.test(this.onChangeText)) {
        this.setState({nameAvailable:true})
        console.log("Pressed TRUE");
        }
        else{
          this.setState({isValid:false})
          console.log("Pressed FALSE");
        }
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container} flexDirection="column" alignItems='stretch'>
        <View><TextInput style={styles.textInput} onChangeText={this.onChange} placeholder="Enter your name"></TextInput></View>
        <TouchableOpacity style={styles.buttonStyle} onPress={() => navigate('SucceedForm')}><Text style={styles.buttonText}>Submit</Text></TouchableOpacity>

      </View>

    );
  }
}
/*      if(!this.state.nameAvailable) {
          returnArray.push(
            <form onSubmit={this.handleSubmit} key="main">
              <label>
                Name:
                <input type="text" value={this.state.value} onChange={this.handleChange} />
              </label>
              {(!isValid) ?
                <div id="errorText">Please enter valid characters.</div> : null
              }
              <input type="submit" value="Submit" />
            </form>);
            return returnArray;
          } else {
            return (<div>Greetings, {this.state.value}!</div>);
          }
     */
const styles = StyleSheet.create({
  buttonText:
  {
    color:"white",
    fontSize:40
  },
  buttonStyle:
  {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'blue',
    height:75,
    margin:30,
  },
  textInput:
  {
    margin:30,
    height:75,
    fontSize:20
  },
  defaultText:
  {
    fontSize:20
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
