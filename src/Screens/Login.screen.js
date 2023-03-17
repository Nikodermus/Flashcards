import to from 'await-to-js';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useCallback, useState, useEffect } from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import { auth } from '../api/db';
import { MESSAGES } from '../constants/errors.contstants';
import { ROUTES } from '../constants/navigation.constants';
import { useUser } from '../hooks/auth';

function Login({ navigation }) {
  const [user, setUser] = useUser();
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const [valid, setValid] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = ({ value, key }) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const doLogin = useCallback(async () => {
    const [loginError, userCredentials] = await to(
      signInWithEmailAndPassword(auth, form.email, form.password)
    );

    if (loginError) {
      const { code } = loginError;
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
    const { email, password } = form;

    setValid(() => {
      if (!email.length || !password.length) {
        return false;
      }

      if (password.length < 6) return false;

      return true;
    });
  }, [form]);

  useEffect(() => {
    setError(null);
  }, [form, setError]);

  const { email, password } = form;

  return (
    <View>
      <View>
        <Text>Login</Text>

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

          <Button title="Login" onPress={doLogin} disabled={!valid} />
        </View>

        {error && <Text>{error}</Text>}

        <Button
          title="Sign up instead"
          onPress={() => navigation.navigate(ROUTES.signup)}
        />
      </View>
    </View>
  );
}

export default Login;
