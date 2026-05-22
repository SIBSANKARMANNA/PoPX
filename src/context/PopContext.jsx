import  { createContext, useContext, useState } from 'react';

export const PopXContext = createContext();

export const PopXProvider = ({ children }) => {
  const [accounts, setAccounts] = useState([
    {
      id: 1,
      fullName: 'Marray Doe',
      phone: '+1 234 567 8900',
      email: 'Marry@Gmail.Com',
      password: 'password123',
      company: 'Creative Agency',
      isAgency: true,
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop',
    },
  ]);

  const [currentUser, setCurrentUser] = useState(null);
  const [currentPage, setCurrentPage] = useState('welcome');

  const createAccount = (data) => {
    const newAccount = {
      id: accounts.length + 1,
      ...data,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop',
    };
    setAccounts([...accounts, newAccount]);
    return newAccount;
  };

  const login = (email, password) => {
    const account = accounts.find(
      (acc) => acc.email.toLowerCase() === email.toLowerCase() && acc.password === password
    );
    if (account) {
      setCurrentUser(account);
      return true;
    }
    return false;
  };

  const logout = () => {
    setCurrentUser(null);
    setCurrentPage('welcome');
  };

  return (
    <PopXContext.Provider
      value={{
        accounts,
        currentUser,
        currentPage,
        setCurrentPage,
        createAccount,
        login,
        logout,
      }}
    >
      {children}
    </PopXContext.Provider>
  );
};

export const usePopX = () => useContext(PopXContext);