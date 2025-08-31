import type { ReactNode } from "react"; 

type ItemListProps<T> = {
  items: T[];
  renderItem: (item: T) => ReactNode; 
  keyExtractor: (item: T) => string | number;
};

export function ItemList<T>({ items, renderItem, keyExtractor }: ItemListProps<T>) {
  return (
    <div>
      {items.map((item) => (
        <div key={keyExtractor(item)}>{renderItem(item)}</div>
      ))}
    </div>
  );
}
