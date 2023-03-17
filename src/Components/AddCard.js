import { useRoute } from '@react-navigation/native';
import { FAB, Overlay } from '@rneui/base';
import { useEffect } from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import { cards } from '../api/db';
import { useUser } from '../hooks/auth';
import { useForm } from '../hooks/form';
import { useModal } from '../hooks/modal';

const baseState = () => ({
  front: '',
  back: '',
  detail: '',
});

function AddCard() {
  const [form, setForm] = useForm(baseState());
  const route = useRoute();
  const [user] = useUser();
  const { id: categoryId } = route.params.category;
  const { visible, show, hide } = useModal();

  const createCard = () => {
    cards.add({
      ...form,
      categoryId,
      userId: user.uid,
    });

    hide();
  };

  useEffect(() => {
    if (!visible) {
      setForm(baseState());
    }
  }, [visible, setForm]);

  const { front, back, detail } = form;

  return (
    <View>
      <FAB icon={{ name: 'add', color: 'white' }} onPress={show} />

      <Overlay
        isVisible={visible}
        onBackdropPress={hide}
        overlayStyle={{ backgroundColor: 'white' }}
      >
        <View>
          <Text>New category</Text>

          <TextInput
            placeholder="Front"
            onChangeText={(value) => setForm({ value, key: 'front' })}
            value={front}
          />

          <TextInput
            placeholder="Back"
            onChangeText={(value) => setForm({ value, key: 'back' })}
            value={back}
          />

          <TextInput
            placeholder="Detail"
            onChangeText={(value) => setForm({ value, key: 'detail' })}
            value={detail}
          />

          <Button title="Add" onPress={createCard} />
        </View>
      </Overlay>
    </View>
  );
}

export default AddCard;
