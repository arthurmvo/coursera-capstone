import { AppProvider } from './context/AppContext';
import Navigation from './components/Navigation';

export default function App() {
  return (
    <AppProvider>
      <Navigation />
    </AppProvider>
  );
}
