import { ScrollView } from "react-native";
import Post from "../components/Post";
import styles from "../styles";
import photolist from "../photolist";

export default function Feed({ navigation }) {
    return (
        <ScrollView style={styles.feed}>
            {photolist.map(photo => (
                <Post post={photo} navigation={navigation} key={photo.id} />

            ))}

        </ScrollView>
    )
}