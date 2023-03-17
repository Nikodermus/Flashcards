import { useEffect } from 'react';
import { Text, TouchableHighlight } from 'react-native';
import { useModal } from '../hooks/modal';

function CardItem({ card }) {
  const { visible, toggle, show } = useModal(true);
  const { front, back, detail } = card;

  useEffect(() => {
    show();
  }, [card.front, show]);

  return (
    <TouchableHighlight onPress={toggle}>
      {visible ? (
        <Text>{front}</Text>
      ) : (
        <>
          <Text>{back}</Text>
          <Text>{detail}</Text>
        </>
      )}
    </TouchableHighlight>
  );
}

export default CardItem;
