import React from 'react';

const ErrorMessage = ({ children }) => {
  return (
    <div style={{ background: 'red', color: 'white', padding: '3px' }}>
      {children}
    </div>
  );
};

export default ErrorMessage;
