export const ROUTES = {
  login: 'Login',
  signup: 'Signup',
  categories: 'Categories',
  cards: {
    name: 'Cards',
    params: (categoryId) => ({ categoryId }),
  },
};
