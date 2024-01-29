import React, { useLayoutEffect, useState } from 'react';
import { SafeAreaView, Text } from 'react-native';
import { headerSearchBarOptions } from '../options';

const PeopleList = ({ navigation }) => {
    const [query, setQuery] = useState('');

    useLayoutEffect(() => {
        navigation.setOptions({
            headerSearchBarOptions: {
                ...headerSearchBarOptions,
                onChangeText: updateSearch,
                onClose: () => {
                    setQuery('');
                },
            },
        });
    }, [navigation]);

    const updateSearch = (e) => {
        setQuery(e.nativeEvent.text);
    };

    return (
        <SafeAreaView>
            <Text>Contacts</Text>
        </SafeAreaView>
    )
};

export default PeopleList;