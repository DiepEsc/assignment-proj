import { Image, StyleSheet } from "react-native";
import React from "react";

export default function Avatar(props: { url?: string, letters?: string }) {
    return (
        <Image
            style={styles.avatar}
            resizeMode="stretch"
            source={props.url ? { uri: props.url } : { uri: `https://ui-avatars.com/api/?name=${props.letters?.substring(0, 1)}` }}
        />
    )
}


const styles = StyleSheet.create({
    avatar: {
        width: 36,
        height: 36,
        borderRadius: 32,
        backgroundColor: '#ccc',
        marginHorizontal: 8
    },
});