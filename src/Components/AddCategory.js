import { FAB, Overlay } from '@rneui/base';
import { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { categories } from '../api/db';
import { COLORS } from '../constants/style.contstants';
import { useUser } from '../hooks/auth';
import { useModal } from '../hooks/modal';

const styles = StyleSheet.create({
  button: {
    alignSelf: 'flex-end',
    marginBottom: 36,
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
        overlayStyle={{ backgroundColor: 'white' }}
      >
        <View>
          <Text>Add new category</Text>

          <TextInput
            placeholder="Category name..."
            onChangeText={(value) => setName(value)}
            value={name}
          />
          <Button
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
