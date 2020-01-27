import React from 'react';
import { View, Text, Image } from 'react-native';
import { Link } from './routing';

const Pokemon = props => {
    const { selectedPokemon } = props;
    const backButton = (
        <View>
            <Link to="/">
                <Text>Go back</Text>
            </Link>
        </View>
    );
    if (!selectedPokemon){
        return (
            <View>
                {backButton}
                <Text>
                    No Pokemon selected
                </Text>
            </View>
        );
    }
    return (
        <View>
            {backButton}
            <View>
                <Text>{`#${selectedPokemon.number}`}</Text>
            </View>
            <View>
                <Text>{`Name: ${selectedPokemon.name}`}</Text>
            </View>
            <View>
                <Text>{`Type: ${selectedPokemon.type}`}</Text>
            </View>
            <View>
                <Image 
                    style={{ width: 50, height: 50 }}
                    source={{ uri: selectedPokemon.photoUrl }}
                />
            </View>
        </View>
    );
};

export default Pokemon;