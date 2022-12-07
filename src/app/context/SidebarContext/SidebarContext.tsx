import { createContext, FC, PropsWithChildren, useContext } from 'react';
import { useLocalStorage } from 'react-use';

export interface SidebarContextProps {
  isOpened: boolean;
  setIsOpened: (value: boolean) => void;
}

export const SidebarContext = createContext<SidebarContextProps>({} as SidebarContextProps);

export const SIDEBAR_IS_OPENED_KEY = 'sidebarIsOpened';

export const SidebarProvider: FC<PropsWithChildren> = ({ children }) => {
  const [isOpened, setIsOpened] = useLocalStorage(SIDEBAR_IS_OPENED_KEY, false);

  return (
    <SidebarContext.Provider value={{ isOpened, setIsOpened }}>{children}</SidebarContext.Provider>
  );
};

export const useSidebarContext = () => {
  const { isOpened, setIsOpened } = useContext(SidebarContext);
  const toggle = () => setIsOpened(!isOpened);
  return {
    isOpened,
    toggle,
    setIsOpened,
  };
};
