import { useContext } from 'react';
import { AuthContext } from '../Wrappers/AuthContext';

export const useUser = () => useContext(AuthContext);
