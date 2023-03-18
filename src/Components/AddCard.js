import { useRoute } from '@react-navigation/native';
import { FAB, Overlay, Button } from '@rneui/base';
import { useEffect } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { cards } from '../api/db';
import { COLORS, COMPONENT, FONT } from '../constants/style.contstants';
import { useUser } from '../hooks/auth';
import { useForm } from '../hooks/form';
import { useModal } from '../hooks/modal';

const styles = StyleSheet.create({
  button: {
    alignSelf: 'flex-end',
    marginBottom: 36,
  },
  overlay: {
    width: '80%',
    backgroundColor: COLORS.main,
    padding: 36,
    borderRadius: 12,
  },
  title: {
    ...FONT.h3,
    color: COLORS.textLight,
  },
  input: {
    borderBottomColor: COLORS.textLight,
    borderBottomWidth: 1,
    color: COLORS.textLight,
    marginVertical: 12,
    padding: 12,
    paddingBottom: 6,
  },
  send: {
    ...COMPONENT.button.highlight,
    width: '40%',
    alignSelf: 'flex-end',
    marginTop: 24,
  },
  sendTitle: {
    ...FONT.button,
    color: COLORS.main,
  },
});

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
      <FAB
        icon={{ name: 'add', color: 'white' }}
        color={COLORS.highlight}
        onPress={show}
        style={styles.button}
        size="small"
      />

      <Overlay
        isVisible={visible}
        onBackdropPress={hide}
        overlayStyle={styles.overlay}
      >
        <View>
          <Text style={styles.title}>New Card</Text>

          <TextInput
            style={styles.input}
            placeholderTextColor={COLORS.textLight}
            placeholder="Front"
            onChangeText={(value) => setForm({ value, key: 'front' })}
            value={front}
          />

          <TextInput
            style={styles.input}
            placeholderTextColor={COLORS.textLight}
            placeholder="Back"
            onChangeText={(value) => setForm({ value, key: 'back' })}
            value={back}
          />

          <TextInput
            style={styles.input}
            placeholderTextColor={COLORS.textLight}
            placeholder="Detail"
            onChangeText={(value) => setForm({ value, key: 'detail' })}
            value={detail}
          />

          <Button
            titleStyle={styles.sendTitle}
            buttonStyle={styles.send}
            title="Add"
            onPress={createCard}
          />
        </View>
      </Overlay>
    </View>
  );
}

export default AddCard;
