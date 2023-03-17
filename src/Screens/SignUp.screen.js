import to from 'await-to-js';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useCallback, useState, useEffect } from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import { auth } from '../api/db';
import { MESSAGES } from '../constants/errors.contstants';
import { ROUTES } from '../constants/navigation.constants';
import { useUser } from '../hooks/auth';

function SignUp({ navigation }) {
  const [user, setUser] = useUser();
  const [form, setForm] = useState({
    email: '',
    password: '',
    passwordConfirmation: '',
  });

  const [valid, setValid] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = ({ value, key }) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const doSignUp = useCallback(async () => {
    const [signUpError, userCredentials] = await to(
      createUserWithEmailAndPassword(auth, form.email, form.password)
    );

    if (signUpError) {
      const { code } = signUpError;
      setError(MESSAGES[code] || code);
    } else {
      auth.currentUser = userCredentials.user;
      setUser(userCredentials.user);
      navigation.navigate(ROUTES.categories);
    }
  }, [form, setError, navigation, setUser]);

  useEffect(() => {
    if (user) navigation.navigate(ROUTES.categories);
  }, [navigation, user]);

  useEffect(() => {
    const { email, password, passwordConfirmation } = form;

    setValid(() => {
      if (!email.length || !password.length || !passwordConfirmation.length) {
        return false;
      }

      if (password.length < 6) return false;

      if (password !== passwordConfirmation) return false;

      return true;
    });
  }, [form]);

  useEffect(() => {
    setError(null);
  }, [form, setError]);

  const { email, password, passwordConfirmation } = form;

  return (
    <View>
      <View>
        <Text>Sign Up</Text>

        <View>
          <TextInput
            placeholder="Email Address"
            value={email}
            textContentType="emailAddress"
            onChangeText={(value) => handleChange({ key: 'email', value })}
          />
          <TextInput
            placeholder="Password"
            value={password}
            textContentType="password"
            secureTextEntry
            onChangeText={(value) => handleChange({ key: 'password', value })}
          />
          <TextInput
            placeholder="Confirm Password"
            value={passwordConfirmation}
            textContentType="password"
            secureTextEntry
            onChangeText={(value) =>
              handleChange({ key: 'passwordConfirmation', value })
            }
          />

          <Button title="Sign Up" onPress={doSignUp} disabled={!valid} />
        </View>

        {error && <Text>{error}</Text>}

        <Button
          title="Login instead"
          onPress={() => navigation.navigate(ROUTES.login)}
        />
      </View>
    </View>
  );
}

export default SignUp;
