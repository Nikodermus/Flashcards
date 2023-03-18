import { Button } from '@rneui/base';
import { useCallback, useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AddCard from '../Components/AddCard';
import CardItem from '../Components/CardItem';
import { COLORS, COMPONENT, FONT } from '../constants/style.contstants';
import { useCards } from '../hooks/data';
import { getRandom } from '../utils/number';
import { pluralize } from '../utils/text';
import UserInfo from '../Wrappers/UserInfo';

const styles = StyleSheet.create({
  h2: { ...FONT.h2 },
  sub: { ...FONT.sub },
  empty: { ...FONT.sub, textAlign: 'center', margin: 36 },
  button: {
    ...COMPONENT.button.highlight,
    alignSelf: 'center',
  },
  buttonTitle: {
    ...FONT.button,
    color: COLORS.main,
  },
});

function Cards({ route }) {
  const { id, name } = route.params.category;
  const cards = useCards(id);
  const [active, setActive] = useState(null);

  const chooseNewCard = useCallback(() => {
    if (!cards.length) return;

    if (cards.length === 1) {
      setActive(cards[0].id);
      return;
    }

    setActive((prev) => {
      let newId;

      do {
        newId = getRandom(cards).id;
      } while (newId && newId === prev);

      return newId;
    });
  }, [setActive, cards]);

  useEffect(() => {
    if (!active && cards.length) {
      chooseNewCard();
    }
  }, [cards, active, chooseNewCard]);

  const activeCard = cards.find((card) => card.id === active);

  return (
    <UserInfo>
      <View>
        <Text style={styles.h2}>{name}</Text>
        <Text style={styles.sub}>
          {pluralize({ noun: 'Card', number: cards.length })}
        </Text>

        <AddCard />

        {!cards.length && (
          <Text style={styles.empty}>Try adding a card first...</Text>
        )}

        {active && <CardItem card={activeCard} />}

        <Button
          buttonStyle={styles.button}
          titleStyle={styles.buttonTitle}
          title="Next"
          disabled={cards.length < 2}
          onPress={chooseNewCard}
        />
      </View>
    </UserInfo>
  );
}

export default Cards;
