import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View } from 'react-native';
import { ROUTES } from '../constants/navigation.constants';
import Categories from '../Screens/Categories.screen';
import Login from '../Screens/Login.screen';
import SignUp from '../Screens/SignUp.screen';

const Stack = createStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <View style={{ marginTop: 100 }} />
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={ROUTES.login} component={Login} />
        <Stack.Screen name={ROUTES.signup} component={SignUp} />
        <Stack.Screen name={ROUTES.categories} component={Categories} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
