import React from 'react';
import {View, StyleSheet, TextInput, Text} from 'react-native';
import { EvilIcons } from '@expo/vector-icons';

const SearchBar = (props) => {

    return (
        <View style={styles.container}>

           <EvilIcons 
                name="search"
                color="black"
                style={styles.iconStyle} 
           />

            <TextInput 
                style={styles.searchInput}
                autoCapitalize= 'none'
                autoCorrect= {false}
                placeholder= 'search'
                value= {props.term}
                onChangeText= {(value) => props.onTermChange(value)}
                onEndEditing= { () => props.onTermSubmit() }
            />
            
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        backgroundColor:'#F0EEEE',
        margin: 10,
        padding:7,
        borderRadius:15,    
    },
    searchInput:{
        flex: 1
    },
    iconStyle:{
        fontSize:30,
        alignSelf: 'center'
    }
});

export default SearchBar;