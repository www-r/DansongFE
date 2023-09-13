import { ModalsDispatchContext } from '../Context/ModalsContext';
import { useContext } from 'react';
import { Props } from '../Context/ModalsProvider';

export default function useModals() {
  const { open, close } = useContext(ModalsDispatchContext);
  const openModal = (Component: React.ReactNode, props: Props) => {
    open(Component, props);
  };
  const closeModal = (Component: React.ReactNode) => {
    close(Component);
  };
  return {
    openModal,
    closeModal,
  };
}
