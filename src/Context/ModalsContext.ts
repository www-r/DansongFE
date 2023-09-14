import { createContext } from 'react';
import { Props } from './ModalsProvider';

type ModalsDispatchContext = {
  open: (Component: (props: Props) => JSX.Element, props: Props) => void;
  close: (Component: (props: Props) => JSX.Element) => void;
};

// 모달 상태를 관리하는 컨텍스트의 타입 정의
type ModalsStateContext = {
  modals: { Component: (props: Props) => JSX.Element; props: Props }[];
};

export type Modal = {
  Component: (props: Props) => JSX.Element;
  props: Props;
};

export const ModalsDispatchContext = createContext<ModalsDispatchContext>({
  open: () => {},
  close: () => {},
});
export const ModalsStateContext = createContext<Modal[]>([]);
