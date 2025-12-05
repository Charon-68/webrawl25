'use client'

import { Toaster } from 'react-hot-toast'

export function ToastProvider() {
  return (
    <Toaster 
      position="top-center"
      toastOptions={{
        duration: 4000,
        style: {
          background: '#10b981',
          color: '#fff',
          padding: '16px',
          borderRadius: '8px',
          fontSize: '16px',
        },
        success: {
          iconTheme: {
            primary: '#fff',
            secondary: '#10b981',
          },
        },
      }}
    />
  )
}

