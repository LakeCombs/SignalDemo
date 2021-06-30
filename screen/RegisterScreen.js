import React, { useLayoutEffect, useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { KeyboardAvoidingView, View, StyleSheet } from "react-native";
import { Input, Button, Text } from "react-native-elements";
import { auth } from "../firebase.js";

const RegisterScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  useLayoutEffect(() => {
    navigation.setOptions({
      headerBackOption: "Login",
    });
  }, [navigation]);

  const register = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((authUser) => {
        authUser.user.updateProfile({
          displayName: name,
          photoURl:
            imageUrl ||
            "https://www.google.com/search?q=user+avatar&sxsrf=ALeKk02Hhyp4S0DFMxaKvvYQi3iSMfZE_A:1624964137562&tbm=isch&source=iu&ictx=1&fir=_tfY4jaB-Ufo8M%252CKVh5CcJRidka2M%252C_&vet=1&usg=AI4_-kQ4i_VLzKqTDQJvkNrw-HhuRSSYVA&sa=X&ved=2ahUKEwjbicSR17zxAhVDyYUKHf7pAksQ9QF6BAgREAE#imgrc=_tfY4jaB-Ufo8M",
        });
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <KeyboardAvoidingView bahavior="padding" style={styles.container}>
      <StatusBar styles="light" />
      <Text h3 style={{ marginBottom: 50 }}>
        Create a Signal account
      </Text>
      <View style={styles.inputContainer}>
        <Input
          placeholder="Full Name"
          autofocus
          type="text"
          value={name}
          onChangeText={(text) => {
            setName(text);
          }}
        />
        <Input
          placeholder="Email"
          type="text"
          value={email}
          onChangeText={(text) => {
            setEmail(text);
          }}
        />
        <Input
          placeholder="password"
          secureTextEntry
          type="password"
          value={password}
          onChangeText={(text) => {
            setPassword(text);
          }}
        />
        <Input
          placeholder="Profile pic (optional)"
          type="text"
          value={imageUrl}
          onChangeText={(text) => {
            setImageUrl(text);
          }}
          onSubmitEditing={register}
        />
      </View>
      <Button
        style={styles.button}
        raised
        title="register"
        onPress={register}
      />
      <View style={{ height: 100 }} />
    </KeyboardAvoidingView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    backgroundColor: "white",
  },
  button: {
    width: 200,
    marginTop: 10,
  },
  inputContainer: {
    width: 300,
  },
});
