import { Text, View } from 'react-native';
import UserInfo from '../Wrappers/UserInfo';

function Cards({ route }) {
  const { categoryId } = route.params;

  return (
    <UserInfo>
      <View>
        <Text>{categoryId}</Text>
      </View>
    </UserInfo>
  );
}

export default Cards;
