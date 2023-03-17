import { useNavigation } from '@react-navigation/native';
import { Avatar, BottomSheet, ListItem } from '@rneui/base';
import { useEffect, useState } from 'react';
import { View } from 'react-native';
import { auth } from '../api/db';
import { ROUTES } from '../constants/navigation.constants';
import { useUser } from '../hooks/auth';

function UserInfo({ children }) {
  const [user, setUser] = useUser();
  const [visible, setVisible] = useState(false);
  const navigation = useNavigation();

  const doLogout = async () => {
    await auth.signOut();
    auth.currentUser = null;
    setUser(null);
  };

  useEffect(() => {
    if (!user) navigation.navigate(ROUTES.login);
  }, [user, navigation]);

  return (
    <View>
      <Avatar
        rounded
        containerStyle={{ backgroundColor: '#d34' }}
        onPress={() => setVisible(true)}
      />
      <View>{children}</View>
      <BottomSheet
        isVisible={visible}
        onBackdropPress={() => setVisible(false)}
      >
        <ListItem onPress={doLogout}>
          <ListItem.Content>
            <ListItem.Title>Log out</ListItem.Title>
          </ListItem.Content>
        </ListItem>
      </BottomSheet>
    </View>
  );
}

export default UserInfo;
