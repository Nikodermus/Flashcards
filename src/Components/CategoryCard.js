import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { ROUTES } from '../constants/navigation.constants';
import { COLORS, FONT } from '../constants/style.contstants';
import { useCards } from '../hooks/data';

const styles = StyleSheet.create({
  card: {
    padding: 24,
    marginBottom: 24,
    borderRadius: 12,
  },
  button: {
    paddingVertical: 6,
    paddingHorizontal: 24,
    alignSelf: 'flex-end',
    borderRadius: 24,
  },
  title: {
    ...FONT.h3,
  },
  buttonText: {
    ...FONT.button,
  },

  even: {
    card: {
      backgroundColor: COLORS.highlight,
    },
    button: {
      backgroundColor: COLORS.main,
    },
    title: {
      color: COLORS.main,
    },
    buttonText: {
      color: COLORS.highlight,
    },
  },
  odd: {
    card: {
      backgroundColor: COLORS.main,
    },
    button: {
      backgroundColor: COLORS.highlight,
    },
    title: {
      color: COLORS.textLight,
    },
    buttonText: {
      color: COLORS.main,
    },
  },
});

function CategoryCard({ category, even }) {
  const navigation = useNavigation();
  const { name, id } = category;
  const cards = useCards(id);
  const customStyle = styles[even ? 'even' : 'odd'];

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(ROUTES.cards.name, { category })}
      style={[styles.card, customStyle.card]}
    >
      <Text style={[styles.title, customStyle.title]}>{name}</Text>

      {!!cards.length && (
        <View style={[styles.button, customStyle.button]}>
          <Text style={[styles.buttonText, customStyle.buttonText]}>
            {cards.length} Cards
          </Text>
        </View>
      )}
    </TouchableOpacity>
  );
}

export default CategoryCard;
