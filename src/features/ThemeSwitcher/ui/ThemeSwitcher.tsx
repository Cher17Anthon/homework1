import { useTheme } from '../../../shared/lib/theme';
import Button from '../../../shared/ui/Button/Button';

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button onClick={toggleTheme}>
      {theme === 'light' ? 'Тёмная тема' : 'Светлая тема'}
    </Button>
  );
};

export default ThemeSwitcher;
