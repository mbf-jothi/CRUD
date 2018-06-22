
import React, { Component } from 'react';
import {  Platform, StyleSheet, Text, View,  TouchableOpacity,  NativeModules,  FlatList, Alert} from 'react-native';
import { Actions } from 'react-native-router-flux';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux'; 
import { getDetails } from '../../actions/readAction'; 
import { deleteDetail } from '../../actions/deleteAction'; 
import { getAllDetailsState } from '../../selectors';
import {config} from './../../theme/config';
import { styles } from './style';

class FirstScreen extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      
    };
    this.buttonClick = this.buttonClick.bind(this);
    this.editTapped = this.editTapped.bind(this);
    this.deleteTapped = this.deleteTapped.bind(this);
  }
  componentDidMount() {
    this.props.getDetails();
  }
  buttonClick() {
    Actions.SecondScreen();
  }
  displayTapped(item) {
    Alert.alert(
      '',
      'Choose one',
      [
        {text: 'Edit', onPress: this.editTapped.bind(this, item)},
        {text: 'Delete', onPress: this.deleteTapped.bind(this, item)},
        {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
      ],
      { cancelable: false }
    )
  }
  editTapped(item) {
    Actions.SecondScreen({detail: item, edit: true, title:"Update your details", id: item.id});
  }
  deleteTapped(item) {
    this.props.deleteDetail(item.id);
    this.props.getDetails();
  }

  _keyExtractor = (item, index) => item.id;
    _renderItem = ({item, index}) => (
        <TouchableOpacity
            style={styles.slideRow}
            activeOpacity={1}
            onPress={this.displayTapped.bind(this,item)}
            key={index}>
            <View style={{height:100, backgroundColor: '#4C456C', justifyContent:'center', borderBottomWidth:2, borderBottomColor: '#F2F2F2', padding: 10,}}>
                <Text style={styles.slideText}>Name: {item.name}</Text>
                <Text style={styles.slideText}>Age: {item.age}, Mobile: {item.mobile}</Text>
            </View>
        </TouchableOpacity>
    );
    
  render() {
    const { entries } = this.state;
    const { details } = this.props;
    return (
      <View style={styles.container}>
          <View style={styles.topView}>
            <View style={{paddingRight:10, alignItems: 'center'}}>
              <TouchableOpacity>
                  <View style={styles.button}>
                    <Text style={styles.buttonText}
                      onPress={this.buttonClick}> Add </Text>
                    </View>
                </TouchableOpacity>
              </View>
            </View>
          <View style={{top: 65,}}>
            <Text style={styles.welcome}>{this.state.availabePucks}</Text>
            <Text style={styles.welcome}>{this.state.connectedPucks}</Text>
          </View>
          <View>
              <FlatList
                horizontal={false} 
                data={details}
                renderItem={this._renderItem}
                keyExtractor={(item, index) => index.toString()}
              />
          </View>
      </View>
    );
  }
}



function mapStateToProps(state, props) {
    return {
        details: getAllDetailsState(state, props),
    }
}

export default connect(mapStateToProps, {getDetails, deleteDetail})(FirstScreen);
