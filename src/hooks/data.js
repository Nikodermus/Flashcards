import { useEffect, useState } from 'react';
import { categories as DBCategories } from '../api/db';
import { useUser } from './auth';

export const useCategories = () => {
  const [user] = useUser();
  const [categories, setCategories] = useState([]);

  const update = () => {
    const query = DBCategories.where('userId', '==', user.uid);
    query.onSnapshot((qs) => {
      const results = qs.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setCategories(results);
    });
  };

  useEffect(update, [user.uid]);

  return categories;
};
