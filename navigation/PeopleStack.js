import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import PeopleListScreen from '../screens/PeopleList';
import PeopleListScreen from '../screens/PeopleList';

import { screenOptions } from '../options';

const Stack = createNativeStackNavigator();

const PeopleStack = () => {
    return (
        <Stack.Navigator
            initialRouteName="PeopleListScreen"
            screenOptions={{
                ...screenOptions,
                title: 'People',
            }}
        >
            <Stack.Screen
                name="PeopleListScreen"
                component={PeopleListScreen}
            />
        </Stack.Navigator>
    );
};

export default PeopleStack;
