import { Text, View } from 'react-native';
import AddCategory from '../Components/AddCategory';
import CategoryCard from '../Components/CategoryCard';
import { useCategories } from '../hooks/data';
import UserInfo from '../Wrappers/UserInfo';

function Categories() {
  const categories = useCategories();

  return (
    <UserInfo>
      <View>
        <Text>Flashcards</Text>
        <Text>Select your set</Text>
      </View>

      <AddCategory />

      <View>
        {categories.length ? (
          categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))
        ) : (
          <Text>Try adding a new category</Text>
        )}
      </View>
    </UserInfo>
  );
}

export default Categories;
