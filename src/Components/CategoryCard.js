import { useNavigation } from '@react-navigation/native';
import { Divider } from '@rneui/base';
import { Button, View } from 'react-native';
import { ROUTES } from '../constants/navigation.constants';

function CategoryCard({ category }) {
  const navigation = useNavigation();
  const { name } = category;

  return (
    <View>
      <Button
        title={name}
        onPress={() => navigation.navigate(ROUTES.cards.name, { category })}
      />
      <Divider />
    </View>
  );
}

export default CategoryCard;
