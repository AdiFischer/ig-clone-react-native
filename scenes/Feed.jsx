import { ScrollView } from "react-native";
import Post from "../components/Post";
import styles from "../styles";
import photolist from "../photolist";
// import { useEffect, useState } from "react";

// export default function Feed() {
//     const [photoList, setPhotoList] = useState()
//     //const [showUpload, setShowUpload] =  useState(false)
//     useEffect(() => {
//      fetch('https://express-ts-af.web.app/photos')
//     //   fetch('http://localhost:5002/photos')
//       .then(results => results.json())
//       .then(data => setPhotoList(data))
//       .catch(alert)
//     }, [setPhotoList])
export default function Feed({ navigation }) {
    return (
        <ScrollView style={styles.feed}>
            {photolist.map(photo => (
                <Post post={photo} navigation={navigation} key={photo.id} />

            ))}

        </ScrollView>
    )
}