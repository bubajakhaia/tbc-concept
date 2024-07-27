import React, { createContext, useState, useContext } from 'react';

// Create a Context
const LanguageContext = createContext();

// Create a Provider Component
export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('ge'); // Default language

    const changeLanguage = (lang) => {
        setLanguage(lang);
    };

    return (
        <LanguageContext.Provider value={{ language, changeLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};
export const useLanguage = () => useContext(LanguageContext);