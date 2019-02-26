import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View, TextInput, Button } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {field: {},error: {},validate: {},validForm: false,}
    this.onChange = this.onChange.bind(this);
    this.onPress = this.onPress.bind(this);

  }

  static navigationOptions = {
    title: 'Form' ,

  }

  onChange(event) {
    this.state.field.event = event;
  //  this.setState={value: this.onChangeText};
  }

  onPress(event) {
    event.preventDefault();

    if (this.validateForm()) {
      let field = {};
      let validate = {};
      field["event"] = "";
      validate["event"] = "Hi, \n" + this.state.field.event;
      this.setState({
        field:field,validate:validate,validForm: true
      });

    }

    console.log("yes");
  }

  validateForm() {
    let field = this.state.field;
    let error = {};
    let validForm = true;

    /* if(!/[^a-zA-Z]/.test(this.onChangeText)) {
      this.setState(state => ({
    isValid: !state.isValid
    }));
    } */
    if (typeof field["event"] !== "undefined") {
      if (!field["event"].match(/^[A-Za-z ]*$/)) {
        validForm = false;
        error["event"] = "Please enter valid characters only.";
      }
    }
    this.setState({
      error:error
    });
    return validForm;
  }

  render() {
    return (
      /*
      <View style={styles.container} flexDirection="column" alignItems='stretch'>
        <View><TextInput style={styles.textInput} onChangeText={this.onChange} value={this.onChangeText} placeholder="Enter your name"></TextInput></View>
        <TouchableOpacity style={styles.buttonStyle}  onPress={this.onPress}><Text style={styles.buttonText}>Submit</Text></TouchableOpacity>
      </View> */
      <View style={styles.container}>
        <View>
          {(!this.state.validForm)  ?
          <View>
            <TextInput style={styles.textInput} event="event" onChangeText={this.onChange} placeholder="Please enter a name">
            </TextInput>
            <TouchableOpacity style={styles.buttonStyle} onPress={this.onPress}>
              <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
          </View>
          :  (<Text style={styles.validateText}>{this.state.validate.event}</Text>)}
        </View>
        <View>
          {(this.state.validForm)  ?  null  :  (<Text style={styles.errorText}>{this.state.error.event}</Text>)}
        </View>
      </View>
    );
  }
}
// <Text style={styles.validationText}>{this.state.isValid ? 'Yes, valid' : 'No, not valid'}</Text>
//    <Text>The user is <b>{isValid ? 'currently' : 'not'}</b> logged in.</Text>

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
  buttonText: {
    color: "white",
    fontSize: 30
  },

  validateText: {
    color: "green",
    fontSize: 30,
  },

  errorText: {
    color: "red",
    fontSize: 25,
  },

  buttonStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    height: 50,
    margin: 50,
  },

  textInput: {
    margin: 30,
    height: 75,
    fontSize: 20
  },

  defaultText: {
    fontSize: 20
  },

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
