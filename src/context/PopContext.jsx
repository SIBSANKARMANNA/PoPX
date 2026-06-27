import { createContext, useContext, useState, useEffect } from 'react';

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
  const [sessionDuration] = useState(30 * 60 * 1000);

 
  useEffect(() => {
    const stored = localStorage.getItem('popx_session');
    const session = stored ? JSON.parse(stored) : null;
    if (session?.loggedIn && Date.now() - session.loginTime < sessionDuration) {
      const user = accounts.find(a => a.id === session.userId);
      if (user) {
        setCurrentUser(user);
        setCurrentPage('settings');
      }
    }
  }, []); // empty array = runs only once after first render

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
      localStorage.setItem('popx_session', JSON.stringify({
        loggedIn: true,
        userId: account.id,
        loginTime: Date.now(),
      }));
      return true;
    }
    return false;
  };

  const logout = () => {
    setCurrentUser(null);
    setCurrentPage('welcome');
    localStorage.removeItem('popx_session');
  };

  return (
    <PopXContext.Provider value={{ accounts, currentUser, currentPage, setCurrentPage, createAccount, login, logout }}>
      {children}
    </PopXContext.Provider>
  );
};

export const usePopX = () => useContext(PopXContext);