import { Text, View } from 'react-native';

function CardItem({ card }) {
  const { front, back, detail } = card;

  return (
    <View>
      <Text>{front}</Text>
      <Text>{back}</Text>
      <Text>{detail}</Text>
    </View>
  );
}

export default CardItem;
