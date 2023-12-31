import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Home } from '../src/pages/home';

const Stack = createNativeStackNavigator();

export default function StackRoutes() {
    return (
    <Stack.Navigator>
        <Stack.Screen name='home' component={Home} />
    </Stack.Navigator>
    )
}