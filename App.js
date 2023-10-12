import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import AllPlaces from './screen/AllPlaces';
import AddPlace from './screen/AddPlace';
import IconButton from './components/ui/IconButton';
import { Colors } from './constants/colors';
import Map from './screen/Map';
import { useEffect, useState } from 'react';
import { init } from './components/util/database';
import AppLoading from 'expo-app-loading';
import { Text } from 'react-native';
import PlaceDetails from './screen/PlaceDetails';

const Stack = createNativeStackNavigator();


export default function App() {

  const [dbInitialized, setDbInitialized] =useState(false)

  useEffect(()=>{
    init()
      .then(()=>{
        setDbInitialized(true)
      })
      .catch(error=>{
        console.log(error);
      });
  },[])

  if(!dbInitialized){
    return <Text>Loading...</Text>
  }

  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerStyle: {
            backgroundColor: Colors.primary500,
            headerTinColor:  Colors.gray700,
            contentStye:{
              backgroundColor : Colors.gray700
            }
          }
        }}>
          <Stack.Screen 
            name="AllPlaces" 
            component={AllPlaces} 
            options={({navigation})=>({
              title:'Your Favorite Places',
              headerRight : ({tinColor}) => (<IconButton icon="add" color={tinColor} size={24} 
                onPress={()=> navigation.navigate('AddPlace')}  />)
            })}/>
          <Stack.Screen name="AddPlace" component={AddPlace}
            options={{
              title: 'Add a new Place'
            }}/>
            <Stack.Screen name="Map" component={Map}/>
            <Stack.Screen name="PlaceDetails" component={PlaceDetails} options={{title:'Loading Place...'}}/>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
