import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native'

class HomeScreen extends React.Component {
    render() {
        return(
            <ScrollView contentContainerStyle={styles.page}>
                <Text>Home Page</Text>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default HomeScreen;