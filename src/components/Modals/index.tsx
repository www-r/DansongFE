import { useContext } from 'react';
import { ModalsDispatchContext, ModalsStateContext } from '../../Context/ModalsContext';
import HeaderModal from '../HeaderModal';

export const modals = {
  headerModal: HeaderModal,
};

export default function Modals() {
  const openedModals = useContext(ModalsStateContext);
  const { close } = useContext(ModalsDispatchContext);

  return openedModals.map((modal, index) => {
    const { Component } = modal;

    const onClose = () => {
      close(Component);
    };

    return <Component key={index} onClose={onClose} />;
  });
}
