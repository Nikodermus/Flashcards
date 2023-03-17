import { useNavigation } from '@react-navigation/native';
import { Divider } from '@rneui/base';
import { Button, View } from 'react-native';
import { ROUTES } from '../constants/navigation.constants';

function CategoryCard({ category }) {
  const navigation = useNavigation();
  const { name, id } = category;

  return (
    <View>
      <Button
        title={name}
        onPress={() =>
          navigation.navigate(ROUTES.cards.name, ROUTES.cards.params(id))
        }
      />
      <Divider />
    </View>
  );
}

export default CategoryCard;
