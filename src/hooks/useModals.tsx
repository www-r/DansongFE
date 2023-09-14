import { ModalsDispatchContext } from '../Context/ModalsContext';
import { useContext } from 'react';
import { Props } from '../Context/ModalsProvider';

export default function useModals() {
  const { open, close } = useContext(ModalsDispatchContext);
  const openModal = (Component: (props: Props) => JSX.Element, props: Props) => {
    open(Component, props);
  };
  const closeModal = (Component: (props: Props) => JSX.Element) => {
    close(Component);
  };
  return {
    openModal,
    closeModal,
  };
}
