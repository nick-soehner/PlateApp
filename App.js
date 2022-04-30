import React from "react";
import {
    StyleSheet,
    SafeAreaView,
    ScrollView,
    View
} from "react-native";
import { StateList } from "./components/StateList";
import { Header } from "./components/Header";

export default function App() {
    return (
        <View style={styles.container}>
            <Header style={styles.header} />
            <SafeAreaView style={styles.safeAreaContainer}>
                <ScrollView
                    contentContainerStyle={styles.scrollViewFlex}
                    style={styles.scrollView}
                >
                    <StateList />
                </ScrollView>
            </SafeAreaView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
    },
    safeAreaContainer: {
        flex: 1,
        backgroundColor: "gray",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
    },
    scrollView: {
        width: "100%",
    },
    scrollViewFlex: {
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
});
