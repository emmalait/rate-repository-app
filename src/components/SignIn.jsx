import { Formik } from "formik";
import { View, Pressable, StyleSheet } from "react-native";
import * as yup from "yup";

import FormikTextInput from "./FormikTextInput";
import Text from "./Text";

import theme from "../theme";

const initialValues = {
  username: "",
  password: "",
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: theme.colors.white,
  },
  textField: {
    fontSize: theme.fontSizes.heading,
    height: 50,
    margin: 10,
    padding: 15,
    borderRadius: 5,
    borderColor: theme.colors.lightGrey,
    borderWidth: 1,
  },
  submit: {
    display: "flex",
    alignItems: "center",
    height: 50,
    borderRadius: 5,
    margin: 10,
    padding: 15,
    backgroundColor: theme.colors.blue,
  },
});

const SignInForm = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <FormikTextInput
        name="username"
        placeholder="Username"
        style={styles.textField}
      />
      <FormikTextInput
        name="password"
        placeholder="Password"
        style={styles.textField}
        secureTextEntry
      />
      <Pressable onPress={onSubmit} style={styles.submit}>
        <Text color="textSecondary" fontWeight="bold" fontSize="heading">
          Sign in
        </Text>
      </Pressable>
    </View>
  );
};

const SignIn = () => {
  const onSubmit = (values) => {
    console.log(values);
  };

  const validationSchema = yup.object().shape({
    username: yup.string().required("Username is required"),
    password: yup.string().required("Password is required"),
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignIn;
