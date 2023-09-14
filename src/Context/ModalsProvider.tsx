import { useState, useMemo } from 'react';
import { Modal, ModalsDispatchContext, ModalsStateContext } from './ModalsContext';
import Modals from '../components/Modals';

export type Props = {
  onClose: () => void;
};

const ModalsProvider = ({ children }: { children: React.ReactNode }) => {
  const [openedModals, setOpenedModals] = useState<Modal[]>([]);

  const open = (Component: (props: Props) => JSX.Element, props: Props) => {
    setOpenedModals(modals => {
      return [...modals, { Component, props }];
    });
  };

  const close = (Component: (props: Props) => JSX.Element) => {
    setOpenedModals(modals => {
      return modals.filter(modal => {
        return modal.Component !== Component;
      });
    });
  };

  const dispatch = useMemo(() => ({ open, close }), []);
  return (
    <ModalsStateContext.Provider value={openedModals}>
      <ModalsDispatchContext.Provider value={dispatch}>
        <Modals />
        {children}
      </ModalsDispatchContext.Provider>
    </ModalsStateContext.Provider>
  );
};
export default ModalsProvider;
