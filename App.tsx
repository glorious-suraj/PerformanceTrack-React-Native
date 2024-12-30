import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PerformanceMetricsScreen from './src/screens/PerformanceMetricsScreen'

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName="PerformanceMetrics">
        <Stack.Screen name="PerformanceMetrics" component={PerformanceMetricsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
