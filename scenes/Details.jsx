import { View } from "react-native";
import Post from "../components/Post";
import photolist from "../photolist";
import styles from "../styles";
// import { useEffect } from "react";

export default function Details({ route: { params: { itemId } }, navigation }) {
    const post = photolist.find(photo => photo.id === itemId)
    // useEffect (() => {
    //     fetch ('https://express-ts-af.web.app/photos')
    //     .then(response => response.json())
    //     .then(response => console.log(response))
    //     .catch(alert)

    // })
    return (
        <View style={styles.feed}>

            <Post post={post} navigation={navigation} />
        </View>
    )
}