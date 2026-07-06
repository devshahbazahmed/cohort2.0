import { createContext } from 'react';

export const userDataContext = createContext();

const UserContext = ({ children }) => {
  const user = 'hello';
  return (
    <userDataContext.Provider value={{ user }}>
      {children}
    </userDataContext.Provider>
  );
};

export default UserContext;
