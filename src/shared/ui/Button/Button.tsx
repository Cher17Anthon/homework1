type Props = {
  onClick?: () => void;
  children: React.ReactNode;
};

const Button = ({ onClick, children }: Props) => {
  return (
    <button
      onClick={onClick}
      style={{
        padding: '8px 12px',
        border: '1px solid gray',
        cursor: 'pointer',
        margin: '4px',
      }}
    >
      {children}
    </button>
  );
};

export default Button;
