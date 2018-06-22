    
import React, { Component } from 'react';
import {  Platform, StyleSheet, Text, View, TouchableOpacity, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { updateDetails } from '../../actions/updateAction';
import { addDetails } from '../../actions/createAction';
import TextInput from '../common/FormElements/input';
import { styles } from './style';
import { generateID, getIndex } from './../../helpers';

class SecondScreen extends Component<Props> {
  constructor(props) {
    super(props);
  
    this.state = {
      id:  0,
      name: (Actions.currentParams.edit) ? Actions.currentParams.detail.name:'',
      age: (Actions.currentParams.edit) ? Actions.currentParams.detail.age:'',
      mobile: (Actions.currentParams.edit) ? Actions.currentParams.detail.mobile:'',
      title: (Actions.currentParams.edit) ? Actions.currentParams.title: 'Add Your Details',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    const { name, age, mobile } = this.state; 
  }


  handleSubmit(){
    const { id, name, age, mobile } = this.state;
    const { details } = this.props;
    
       if (Actions.currentParams.edit){
        let index = getIndex(details, Actions.currentParams.detail.id);
            let detail = details[index];
            detail['name'] = name;
            detail['age'] = age;
            detail['mobile'] = mobile;
            this.props.updateDetails(detail);
        }else{
            let id = generateID();
            let detail = {"id": id, "name": name, "age": age, "mobile": mobile};
            this.props.addDetails(detail);
        }

        Actions.pop();
  }

 

  render() {
    const { name, age, mobile, title } = this.state;
    return (
      <View style={styles.container}>
       <Text style={{marginTop: 50, color: 'white', fontSize: 20}}>{title}</Text> 
        <View style={{width:'80%', marginTop:20}}>
          <TextInput 
              label='Name'
              name='name'
              value={name}
              onChange={(value) => this.setState({name: value})}
              />
          <TextInput 
              label='Age'
              name='age'
              value={age}
              onChange={(value) => this.setState({age: value})} />
          <TextInput 
              label='Mobile number' 
              name='mobile'
              value={mobile}
              keyboardType = 'numeric'
              onChange={(value) => this.setState({mobile: value})} />
        </View>
        <TouchableOpacity style={styles.saveButton}
                          onPress={this.handleSubmit}>
            <Text style={{color: '#4C456C', fontSize: 20}}>Save</Text>
        </TouchableOpacity>
      </View>
    );
  }
}


function mapStateToProps(state, props) {
  console.log(state);
    return {
        details: state.dataReducer.details,
    }
}

export default connect(mapStateToProps, {addDetails, updateDetails})(SecondScreen);
