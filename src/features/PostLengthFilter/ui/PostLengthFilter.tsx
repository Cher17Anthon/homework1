import { useState } from 'react';
import Button from '../../../shared/ui/Button/Button';

type Props = {
  onFilterChange: (minLength: number) => void;
};

const PostLengthFilter = ({ onFilterChange }: Props) => {
  const [minLength, setMinLength] = useState(0);

  return (
    <div>
      <input
        type="number"
        value={minLength}
        onChange={e => setMinLength(Number(e.target.value))}
      />
      <Button onClick={() => onFilterChange(minLength)}>Применить фильтр</Button>
    </div>
  );
};

export default PostLengthFilter;
