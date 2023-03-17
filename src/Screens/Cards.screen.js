import { useCallback, useEffect, useState } from 'react';
import { Button, Text, View } from 'react-native';
import AddCard from '../Components/AddCard';
import CardItem from '../Components/CardItem';
import { useCards } from '../hooks/data';
import { getRandom } from '../utils/number';
import UserInfo from '../Wrappers/UserInfo';

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
        <Text>{name}</Text>

        <AddCard />

        {!cards.length && <Text>Try adding a card first</Text>}

        {active && <CardItem card={activeCard} />}

        <Button
          title="Next"
          disabled={cards.length < 2}
          onPress={chooseNewCard}
        />
      </View>
    </UserInfo>
  );
}

export default Cards;
