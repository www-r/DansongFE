import { createContext } from 'react';
import { Props } from './ModalsProvider';

type ModalsDispatchContext = {
  open: (Component: React.ReactNode, props: Props) => void;
  close: (Component: React.ReactNode) => void;
};

// 모달 상태를 관리하는 컨텍스트의 타입 정의
type ModalsStateContext = {
  modals: { Component: React.ReactNode; props: Props }[];
};

export type Modal = {
  Component: React.ReactNode;
  props: Props;
};

export const ModalsDispatchContext = createContext<ModalsDispatchContext>({
  open: () => {},
  close: () => {},
});
export const ModalsStateContext = createContext<Modal[]>([]);
