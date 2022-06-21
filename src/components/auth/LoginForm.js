import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { user, userDetail } from "../../utils/userDB";
import useAuth from "../../hooks/useAuth";

const LoginForm = () => {
  const [error, setError] = useState("");
  const { login } = useAuth();

  console.log(useAuth());

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: yup.object(validationSchema()),
    validateOnChange: false,
    onSubmit: (formValues) => {
      setError("");
      const { userName, password } = formValues;
      if (userName !== user.userName || password !== user.password) {
        setError("El usuario o  la contraseña no son correctos");
        console.log("El usuario o  la contraseña no son correctos");
      } else {
        login(userDetail);
        console.log("login correcto");
        console.log(userDetail);
      }
    },
  });

  return (
    <View>
      <Text style={styles.title}>Iniciar sesion</Text>
      <TextInput
        placeholder="Nombre de usuario"
        style={styles.input}
        autoCapitalize="none"
        value={formik.values.userName}
        onChangeText={(text) => {
          setError("");
          formik.setFieldValue("userName", text);
          formik.validateField("userName");
        }}
      />
      <TextInput
        placeholder="Contraseña"
        style={styles.input}
        autoCapitalize="none"
        secureTextEntry={true}
        value={formik.values.password}
        onChangeText={(text) => {
          setError("");
          formik.setFieldValue("password", text);
          formik.validateField("password");
        }}
      />
      <Button title="Entrar" onPress={formik.handleSubmit} />
      {formik.errors.userName && (
        <Text style={styles.error}> {formik.errors.userName}</Text>
      )}
      {formik.errors.password && (
        <Text style={styles.error}> {formik.errors.password}</Text>
      )}
      <Text style={styles.error}>{error}</Text>
    </View>
  );
};

const initialValues = () => {
  return {
    userName: "",
    password: "",
  };
};
const validationSchema = () => {
  return {
    userName: yup.string().required("The user is required"),
    password: yup.string().required("The password is required"),
  };
};
export default LoginForm;

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 50,
    marginBottom: 15,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
  error: {
    textAlign: "center",
    color: "#f00",
    marginTop: 20,
  },
});
