import { useState } from 'react';
import ThemeSwitcher from '../../features/ThemeSwitcher/ui/ThemeSwitcher';
import Button from '../../shared/ui/Button/Button';
import Modal from '../../shared/ui/Modal/Modal';

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <header
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: '1rem',
        borderBottom: '1px solid gray',
      }}
    >
      <h1>My Blog</h1>
      <div>
        <ThemeSwitcher />
        <Button onClick={() => setIsModalOpen(true)}>О проекте</Button>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2>О проекте</h2>
        <p>Это учебное приложение на React + TypeScript + Vite.</p>
      </Modal>
    </header>
  );
};

export default Header;
