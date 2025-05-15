import { View, StyleSheet } from "react-native"
import Text from "../components/Text"
const NextDue = () => {
    return (
        <View style ={styles.container}>
            <Text>Next Contribution: #5000 due October 15 </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        marginVertical: 12,
        padding: 12,
        justifyContent: 'center',
        alignItems: "center",
        borderRadius: 10
    }
})


export default NextDue