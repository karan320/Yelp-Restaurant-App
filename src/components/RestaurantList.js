import React from 'react';
import {Text, StyleSheet, View, Linking, FlatList, TouchableOpacity} from 'react-native';
import RestaurantsDetails from './RestaurantsDetails';
import { withNavigation } from 'react-navigation';

const RestaurantList = ({ title, restaurants, navigation }) => {
   
    if(restaurants.length === 0)
        return null;

    // console.log(restaurants);
    return(
        <View style={styles.container}>
            
            <Text style={styles.title}>{title}</Text>

            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={restaurants}
                keyExtractor= {(restaurant) => restaurant.id}
                renderItem= {({ item }) => {
                    return (
                        <TouchableOpacity
                            onPress={() => Linking.openURL(item.url)}
                        >

                            <RestaurantsDetails restaurants= {item} />
                            
                        </TouchableOpacity>                   
                    );
                }}
            />

        </View>
    );
};

const styles = StyleSheet.create({
   
    errMessage:{
        alignSelf: 'center',
        fontSize: 22,
        fontWeight: 'bold',
        color: 'red'
    },
    title:{
        fontSize: 25,
        fontWeight: 'bold',
        marginLeft: 10,
        marginBottom: 5
    }
});

export default withNavigation(RestaurantList);