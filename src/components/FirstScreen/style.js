import { StyleSheet } from 'react-native';
import {config} from '../../theme/config';

export const styles = StyleSheet.create({

  container: {
        flex:1,
        backgroundColor: '#F5FCFF',
        width: '100%'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        color: '#ff8000',
    },
    topView: {
      top:20,
      height:44, 
      left: 0,
      right: 0,
      backgroundColor: '#ff8000', 
      width:'100%', 
      position: 'absolute',
      justifyContent: 'center',
      alignItems: 'flex-end',
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    button: {
        backgroundColor: 'white',
        borderRadius: 4,
        padding:10,
    },
    buttonText : {
        color : '#ff8000',
        textAlign:'center',
        fontWeight: 'bold',
    },
     slideRow: {
        flexDirection: 'column',
        justifyContent: 'space-between', 
        flexWrap: 'nowrap', 
        position:'relative',
    },
    slideText: {
      color: 'white'
    }
});