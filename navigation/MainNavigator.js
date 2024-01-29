import React from 'react';
import { Pressable } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MessageStack from './MessageStack';
import PeopleStack from './PeopleStack';

const CustomTabButton = (props) => (
    <Pressable
        {...props}
        style={[
            { paddingBottom: 5, borderWidth: 3, height: 55, borderColor: 'transparent' },
            props.accessibilityState.selected
                ? [
                    props.style,
                    { borderBottomColor: 'blue', borderBottomWidth: 3 },
                ]
                : props.style,
        ]}
    />
);

const BottomTab = createBottomTabNavigator();


const MainNavigator = () => {
    return (
        <BottomTab.Navigator
            initialRouteName="Messages"
            screenOptions={{
                headerShown: false,
                lazy: true,
            }}
        >
            <BottomTab.Screen
                name="Messages"
                component={MessageStack}
                options={{

                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons
                            name="message-processing-outline"
                            color={color}
                            size={24}
                        />
                    ),
                }}
            />
            <BottomTab.Screen
                name="People"
                component={PeopleStack}
                options={{
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons
                            name="account-outline"
                            color={color}
                            size={24}
                        />
                    ),
                }}
            />
        </BottomTab.Navigator>
    );
};

const mapStoreToProps = ({ accountStore }) => {
    return {
        features: accountStore.features,
    };
};

export default MainNavigator;
