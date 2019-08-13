import React from 'React';
import { View, Text } from 'react-native';

class SplashScreen extends React.Component {
    performTimeConsumingTask = async() => {
        return new Promise((resolve) => 
        setTimeout(
            () => { resolve('result') },
            3000
        ))
    }

    async componentDidMount() {
        const data = await this.performTimeConsumingTask();

        if (data !== null) {
            this.props.navigation.navigate('Tab');
        }
    }

    render() {
        return (
            <View style={styles.viewStyles}>
                <Text style={styles.textStyles}>
                    IAmBham
                </Text>
            </View>
        )
    }
}

const styles = {
    viewStyles: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'red'
    },
    textStyles: {
        color: 'white',
        fontSize: 50,
        fontWeight: 'bold',
    }
}

export default SplashScreen;