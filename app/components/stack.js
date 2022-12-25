import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from '../screens/WelcomeScreen';
import LogInScreen from '../screens/LogInScreen';
import AccountScreen from '../screens/AccountScreen';
import SignUpScreen from '../screens/SignUpScreen';
import HomeScreen from '../screens/HomeScreen';
import CalendarScreen from '../screens/CalendarScreen';
import TasksScreen from '../screens/TasksScreen';
import HealthyScreen from '../screens/HealthyScreen';
import SettingsScreen from '../screens/SettingsScreen';
import PomodoroScreen from '../screens/PomodoroScreen';

const Stack = createNativeStackNavigator();

export default function MyStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName = "Welcome">
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="Account"
          component={AccountScreen} 
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="Login"
          component={LogInScreen} 
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="Signup"
          component={SignUpScreen} 
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="Home"
          component={HomeScreen} 
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="Calendar"
          component={CalendarScreen} 
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="Tasks"
          component={TasksScreen} 
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="Healthy"
          component={HealthyScreen} 
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="Settings"
          component={SettingsScreen} 
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="Pomodoro"
          component={PomodoroScreen} 
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
