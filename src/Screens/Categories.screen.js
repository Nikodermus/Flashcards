import { StyleSheet, Text, View } from 'react-native';
import AddCategory from '../Components/AddCategory';
import CategoryCard from '../Components/CategoryCard';
import { FONT } from '../constants/style.contstants';
import { useCategories } from '../hooks/data';
import UserInfo from '../Wrappers/UserInfo';

const styles = StyleSheet.create({
  h2: { ...FONT.h2 },
  sub: { ...FONT.sub },
});

function Categories() {
  const categories = useCategories();

  return (
    <UserInfo>
      <View>
        <Text style={styles.h2}>Flashcards</Text>
        <Text style={styles.sub}>Select your set</Text>
      </View>

      <AddCategory />

      <View>
        {categories.length ? (
          categories.map((category, index) => (
            <CategoryCard
              key={category.id}
              category={category}
              even={index % 2}
            />
          ))
        ) : (
          <Text>Try adding a new category</Text>
        )}
      </View>
    </UserInfo>
  );
}

export default Categories;
