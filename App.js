import { SafeAreaProvider } from "react-native-safe-area-context";
import Login from "./components/LoginPage";
import Welcome from "./components/Welcome";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SafeArea from "./components/SafeArea";
import Chats from "./components/Chats";
import Books from "./components/Books";
import ChatSectionList from "./components/ChatSectionList";
import * as Notifications from "expo-notifications";

// Function to request permission
const registerForPushNotifications = async () => {
  const { status } = await Notifications.getPermissionsAsync();
  if (status !== "granted") {
    const { status: newStatus } = await Notifications.requestPermissionsAsync();
    if (newStatus === "granted") {
      Notifications.getExpoPushTokenAsync()
        .then((response) => {
          const token = response.data;
          console.log(token);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }
};

const stack = createStackNavigator();
export default function App() {
  registerForPushNotifications();
  return (
    <SafeAreaProvider>
      <SafeArea />
      <NavigationContainer>
        <stack.Navigator
          initialRouteName="Login"
          screenOptions={{
            headerShown: false,
          }}
        >
          <stack.Screen name="Login" component={Login} />
          <stack.Screen name="Welcome" component={Welcome} />
          <stack.Screen name="Chats" component={Chats} />
          <stack.Screen name="Books" component={Books} />
          <stack.Screen name="ChatSectionList" component={ChatSectionList} />
        </stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
