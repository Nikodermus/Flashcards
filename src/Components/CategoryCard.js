import { useNavigation } from '@react-navigation/native';
import { Button, Text, View } from 'react-native';
import { ROUTES } from '../constants/navigation.constants';
import { useCards } from '../hooks/data';

function CategoryCard({ category }) {
  const navigation = useNavigation();
  const { name, id } = category;
  const cards = useCards(id);

  return (
    <View>
      <Button
        title={name}
        onPress={() => navigation.navigate(ROUTES.cards.name, { category })}
      />

      {!!cards.length && <Text>{cards.length} Cards</Text>}
    </View>
  );
}

export default CategoryCard;
