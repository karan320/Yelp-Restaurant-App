import React, { useState,useEffect } from 'react';
import {Text, View, Image, FlatList, TouchableOpacity, Linking, StyleSheet} from 'react-native';
import yelp from '../api/yelp';

const RestaurantsShowsScreen = ({ navigation }) => {
    
    const [restaurant, setRestaurant] = useState(null);
    const id = navigation.getParam('id');

    // console.log('==========================');
    // console.log(restaurant);
    // console.log('==========================');

    const getRestaurant = async (myId) => {
        const response = await yelp.get(`/${myId}`);
        setRestaurant(response.data) ;       
    }

    useEffect(() => {
        getRestaurant(id);
    }, []);

    if(!restaurant){
        return null;
    }

    return (
        <View>
               

            <Text>my name is{restaurant.name}</Text>
           
            <FlatList 
                horizontal
                data={restaurant.photos}
                keyExtractor= { (photo) => photo }
                renderItem= {({ item }) => {
                    return <Image 
                         source= {{uri: item}}
                         style={styles.imagesStyle}
                    />
                }}
            />

            <TouchableOpacity
                onPress= {() => Linking.openURL(restaurant.url)}
            >

                <Text>Website:</Text>

            </TouchableOpacity>

            

        </View>
    );
};

const styles = StyleSheet.create({
    imagesStyle:{
        width: 200,
        height: 150     
    }
});

export default RestaurantsShowsScreen;