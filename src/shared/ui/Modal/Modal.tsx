import { useEffect } from 'react';
import type { ReactNode } from 'react';
import ReactDOM from 'react-dom';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
};

const ModalRoot = ({ isOpen, onClose, children }: ModalProps) => {
  useEffect(() => {
    const onEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onEsc);
    return () => document.removeEventListener('keydown', onEsc);
  }, [onClose]);

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        background: 'rgba(0,0,0,0.5)',
      }}
      onClick={onClose}
    >
      <div
        style={{
          background: 'white',
          color: 'black',
          padding: '20px',
          maxWidth: '500px',
          margin: '100px auto',
        }}
        onClick={e => e.stopPropagation()}
      >
        {children}
      </div>
    </div>,
    document.body
  );
};

const Header = ({ children }: { children: ReactNode }) => (
  <div style={{ borderBottom: '1px solid #252121', marginBottom: '10px' }}>
    {children}
  </div>
);

const Body = ({ children }: { children: ReactNode }) => (
  <div style={{ marginBottom: '10px' }}>{children}</div>
);

const Footer = ({ children }: { children: ReactNode }) => (
  <div style={{ borderTop: '1px solid #d8b8b8', marginTop: '10px', textAlign: 'right' }}>
    {children}
  </div>
);

export const Modal = Object.assign(ModalRoot, {
  Header,
  Body,
  Footer
});
