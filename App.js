
import { SafeAreaProvider } from "react-native-safe-area-context";
import Login from "./components/LoginPage";
import Welcome from "./components/Welcome";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SafeArea from "./components/SafeArea";
import Chats from "./components/Chats";
import Books from "./components/Books";
const stack = createStackNavigator();
export default function App() {

  

  return (
    <SafeAreaProvider>
      <SafeArea/>
      <NavigationContainer>
        <stack.Navigator
          initialRouteName="Books"
          screenOptions={{
            headerShown: false,
          }}
        >
          <stack.Screen name="Login" component={Login} />
          <stack.Screen name="Welcome" component={Welcome} />
          <stack.Screen name="Chats" component={Chats} />
          <stack.Screen name="Books" component={Books} />
        </stack.Navigator>  
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

