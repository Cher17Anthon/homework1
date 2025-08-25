import React from 'react';

export function withLoading<P>(WrappedComponent: React.ComponentType<P>) {
  return function WithLoadingComponent(props: P & { isLoading: boolean }) {
    if (props.isLoading) {
      return <div>Загрузка...</div>;
    }
    return <WrappedComponent {...props} />;
  };
}
