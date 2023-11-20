import React, {createContext, useState} from 'react';

const DataContext = createContext();

export function DataContextProvider({children}) {
  const server = 'https://port-0-test-5mk12alp543w4q.sel5.cloudtype.app';
  const [account, setAccount] = useState({
    id: '',
    password: '',
    passwordConfirm: '',
    name: '',
    kakaotalkId: '',
    tagList: [],
  });
  return (
    <DataContext.Provider
      value={{
        account,
        setAccount,
        server,
      }}>
      {children}
    </DataContext.Provider>
  );
}

export default DataContext;
