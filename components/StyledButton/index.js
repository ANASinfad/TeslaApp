import React from "react";
import {View,Text,Pressable} from "react-native";
import styles from './styles';

const StyledButton = (props) => {

    const type = props.type;
    const backgroundColor = type === 'primary' ? 'orange' : 'white';
    return (
        <View style = {styles.container}>
            <Pressable
                style= {[styles.button,{backgroundColor: backgroundColor }]}
                onPress={() => {
                    console.warn('Hey There')

                }}
            >
                <Text style = {styles.text}> Custoom Order</Text>
            </Pressable>
        </View>
    );
};
export default StyledButton;