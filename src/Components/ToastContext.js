import { createContext, useContext, useState } from 'react';

const ToastContext = createContext();

export function ToastProvider({ children }) {
  const [textToClipboard, setTextToClipboard] = useState('');
  const [visible, setVisible] = useState(false);

  const showToast = (text) => {
    setTextToClipboard(text);
    setVisible(true);
    setTimeout(() => setVisible(false), 2000);
  };

  return (
    <ToastContext.Provider value={{ showToast, textToClipboard, visible }}>
      {children}
    </ToastContext.Provider>
  );
}

export function useToast() {
  return useContext(ToastContext);
}
