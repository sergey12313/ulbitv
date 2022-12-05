import {createContext, FC, PropsWithChildren, useContext, useMemo} from "react";
import {useLocalStorage} from "react-use";


export interface SidebarContextProps  {
    isOpened: boolean,
    setIsOpened: (value: boolean) => void
}


export const SidebarContext = createContext<SidebarContextProps>({} as SidebarContextProps)

export const SIDEBAR_IS_OPENED_KEY = 'sidebarIsOpened'


export const SidebarProvider: FC<PropsWithChildren> = ({children}) => {
    const [isOpened, setIsOpened] = useLocalStorage(SIDEBAR_IS_OPENED_KEY, false);

    const defaultProps = useMemo(()=> ({isOpened , setIsOpened}),[isOpened])
    return <SidebarContext.Provider value={defaultProps}>
        {children}
    </SidebarContext.Provider>
}

export const useSidebarContext = () => {
    const {isOpened , setIsOpened} =  useContext(SidebarContext)
    const toggle = ()=> setIsOpened(!isOpened);
    return {
        isOpened,
        toggle,
        setIsOpened
    }
}

