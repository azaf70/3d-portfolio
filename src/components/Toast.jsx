import { Toaster } from 'react-hot-toast';

const Toast = () => {
  return (
    <Toaster
      position="top-right"
      toastOptions={{
        success: {
          style: {
            background: '#151030',
            color: '#fff',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
          },
          iconTheme: {
            primary: '#4ade80',
            secondary: '#151030',
          },
          duration: 3000,
        },
        error: {
          style: {
            background: '#151030',
            color: '#fff',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
          },
          iconTheme: {
            primary: '#ef4444',
            secondary: '#151030',
          },
          duration: 3000,
        },
      }}
    />
  );
};

export default Toast;