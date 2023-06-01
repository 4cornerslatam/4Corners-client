import React, {createContext, useState} from "react";

interface AppContextProps {
    showNavbar: boolean;
    setShowNavbar: React.Dispatch<React.SetStateAction<boolean>>;
    baseColor: string;
    setBaseColor: React.Dispatch<React.SetStateAction<string>>
}

export const AppContext = createContext<AppContextProps>({
    showNavbar: false,
    setShowNavbar: () => {},
    baseColor:'#DE5590',
    setBaseColor: () => {},
});

export const AppProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
    const [showNavbar, setShowNavbar] = useState(false);
    const [baseColor, setBaseColor] = useState('#DE5590')

    return (
        <AppContext.Provider
          value={{
            showNavbar,
            setShowNavbar,
            baseColor,
            setBaseColor
          }}
        >
        {children}
        </AppContext.Provider>
    );
};