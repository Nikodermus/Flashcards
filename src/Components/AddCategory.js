import { Button, color, FAB, Overlay } from '@rneui/base';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { categories } from '../api/db';
import { COLORS, COMPONENT, FONT } from '../constants/style.contstants';
import { useUser } from '../hooks/auth';
import { useModal } from '../hooks/modal';

const styles = StyleSheet.create({
  button: {
    alignSelf: 'flex-end',
    marginBottom: 36,
  },
  overlay: {
    width: '80%',
    backgroundColor: COLORS.main,
    padding: 24,
    borderRadius: 24,
  },
  title: {
    ...FONT.h3,
    color: COLORS.textLight,
  },
  input: {
    borderBottomColor: COLORS.textLight,
    borderBottomWidth: 1,
    color: COLORS.textLight,
    marginVertical: 24,
    padding: 12,
    paddingBottom: 6,
  },
  send: {
    ...COMPONENT.button.highlight,
    width: '40%',
    alignSelf: 'flex-end',
  },
  sendTitle: {
    ...FONT.button,
    color: COLORS.main,
  },
});

function AddCategory() {
  const [name, setName] = useState('');
  const [user] = useUser();
  const { visible, show, hide } = useModal();

  const createCategory = () => {
    categories.add({
      name,
      userId: user.uid,
    });

    hide();
  };

  useEffect(() => {
    setName('');
  }, [visible]);

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
          <Text style={styles.title}>New category</Text>

          <TextInput
            style={styles.input}
            placeholder="Category name..."
            onChangeText={(value) => setName(value)}
            value={name}
            placeholderTextColor={COLORS.textLight}
          />
          <Button
            titleStyle={styles.sendTitle}
            buttonStyle={styles.send}
            title="Add"
            onPress={createCategory}
            disabled={!name.length}
          />
        </View>
      </Overlay>
    </View>
  );
}

export default AddCategory;
