import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "./components/Home";
import { UserDetails } from "./components/userDetails"; 
const Navigator = createNativeStackNavigator();

export const AppRouter = () => (
  <NavigationContainer>
    <Navigator.Navigator>
      <Navigator.Screen
        options={{
          title: "Home",
          headerTintColor:'white', 
          headerTitleAlign:'center', 
          headerStyle:{
            backgroundColor:'black'
          }
        }}
        name="Home"
        component={Home}
      />
      <Navigator.Screen
        name="Profile"
        component={UserDetails}
      />
    </Navigator.Navigator>
  </NavigationContainer>
);
