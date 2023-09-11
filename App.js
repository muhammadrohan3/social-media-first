
import { SafeAreaProvider } from "react-native-safe-area-context";
import Login from "./LoginPage";
import Welcome from "./Welcome";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SafeArea from "./SafeArea";

const stack = createStackNavigator();
export default function App() {

  

  return (
    <SafeAreaProvider>
      <SafeArea/>
      <NavigationContainer>
        <stack.Navigator
          initialRouteName="Login"
          screenOptions={{
            headerShown: false,
          }}
        >

          <stack.Screen name="Login" component={Login} />
          <stack.Screen name="Welcome" component={Welcome} />
        </stack.Navigator>  
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

