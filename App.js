import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import SearchScreen from './src/screens/SearchScreen';
import RestaurantsShowsScreen from './src/screens/RestaurantsShowsScreen';

const navigator = createStackNavigator(
  {
    HomeScreen: SearchScreen,
    RestaurantsShowsScreen: RestaurantsShowsScreen
  },
  {
    initialRouteName:'HomeScreen',
    defaultNavigationOptions:{
      title:'Food Search'
    } 
  }
);
export default createAppContainer(navigator);