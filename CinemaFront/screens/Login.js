import React from "react";
import { View, Text, StyleSheet, TextInput, Touchable } from "react-native";
import { TouchableNativeFeedback } from "react-native-web";

export default function Login() {
  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.title}>Log In</Text>
        <Text style={styles.text}>Sig In to your account</Text>
        <TextInput style={styles.input} placeholder="Email" />
        <TextInput style={styles.input} placeholder="Password" />
        <TouchableNativeFeedback style={styles.btn_login}>
          <Text style={styles.btn_login_text}>continue</Text>
        </TouchableNativeFeedback>
        <Text style={styles.text}>
          Don't have an account?
          <Text style={styles.text_link}> Sign Up </Text>
        </Text>

        <Text style={styles.text_link}>Forgot your password?</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2c2c2c",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    width: "100%",
  },
  form: {
    backgroundColor: "rgba(255,255,255,.2)",
    width: "90%",
    padding: 20,
  },
  title: {
    fontSize: "1.5em",
    color: "#FFF",
  },
  text: {
    fontSize: "14px",
    color: "#FFF",
    marginTop: "20px",
  },
  text_link: {
    fontSize: "14px",
    color: "#09cbcc",
    marginTop: "20px",
  },
  input: {
    fontSize: "14px",
    backgroundColor: "#f6f6f6",
    width: "90%",
    height: 50,
    padding: "10px",
    marginTop: "20px",
    borderRadius: 30,
  },
  btn_login: {
    fontSize: "14px",
    backgroundColor: "#09cbcc",
    width: "90%",
    height: 50,
    padding: "10px",
    marginTop: "20px",
    borderRadius: 30,
    border: "none",
    alignItems: "center",
    justifyContent: "center",
  },
  btn_login_text: {
    fontSize: "14px",
    color: "#FFF",
  },
});
