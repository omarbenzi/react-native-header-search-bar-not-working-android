import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import MessagesScreen from '../screens/Messages';
import MessagesScreen from '../screens/Messages';




import { screenOptions } from '../options';



const Stack = createNativeStackNavigator();

const MessagesStack = () => {
    return (
        <Stack.Navigator
            initialRouteName="MessagesScreen"
            screenOptions={{
                ...screenOptions,
                title: 'Messages',
            }}
        >
            <Stack.Screen
                name="MessagesScreen"
                component={MessagesScreen}
            />
        </Stack.Navigator>
    );
};

export default MessagesStack;
