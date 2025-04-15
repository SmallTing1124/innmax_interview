import ThemedBox from './theme/ThemedBox';
import ThemedProvider from './theme/ThemedProvider';
import ThemeSwitchButton from './theme/ThemeSwitchButton';

function App() {
  return (
    <ThemedProvider>
      <ThemeSwitchButton />
      <ThemedBox />
    </ThemedProvider>
  );
}

export default App;
