import { useState, useCallback } from 'react';
import Button from '../../../shared/ui/Button/Button';

type Comment = { id: number; text: string };

const initialComments: Comment[] = [
  { id: 1, text: 'Отличная статья!' },
  { id: 2, text: 'Спасибо за материал' },
];

const CommentList = () => {
  const [collapsed, setCollapsed] = useState(true);

  const toggle = useCallback(() => {
    setCollapsed(prev => !prev);
  }, []);

  return (
    <div>
      <Button onClick={toggle}>
        {collapsed ? 'Показать комментарии' : 'Скрыть комментарии'}
      </Button>
      {!collapsed && (
        <ul>
          {initialComments.map(c => (
            <li key={c.id}>{c.text}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CommentList;
