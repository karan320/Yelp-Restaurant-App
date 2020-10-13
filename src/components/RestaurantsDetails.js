import React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';

const RestaurantsDetails = ({restaurants}) => {
    return (
        <View style= {styles.listContainer}>

               
            <Text style={styles.restaurantName}>{restaurants.name}</Text>

            <Text>{restaurants.rating} stars, {restaurants.review_count} reviews</Text>

        </View>
    );
};

const styles = StyleSheet.create({
    listContainer:{
        marginHorizontal: 10,
        marginBottom: 10
    },
    imageStyle: {
        width: 250, 
        height: 120,
        borderRadius: 6,
        marginBottom: 5 
    },
    restaurantName:{
        fontWeight:'bold',
        fontSize:19
    }
});

export default RestaurantsDetails;