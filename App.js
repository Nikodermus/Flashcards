import { AuthContextWrapper } from './src/Wrappers/AuthContext';
import Navigation from './src/Wrappers/Navigation';

export default function App() {
  return (
    <AuthContextWrapper>
      <Navigation />
    </AuthContextWrapper>
  );
}
