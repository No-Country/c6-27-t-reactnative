import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Login from "./screens/Login";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2c2c2c",
    alignItems: "center",
    justifyContent: "center",
  },
});
