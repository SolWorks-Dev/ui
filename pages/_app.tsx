import React from 'react'
import { useState, useEffect } from 'react'
import ReactDOM from 'react-dom/client';
import App from '.';

export default function AppWrapper() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return <App />
}


if (typeof window !== 'undefined') {
  const root = ReactDOM.createRoot(document.getElementById('root')!);
  root.render(
    <React.StrictMode>
      <AppWrapper />
    </React.StrictMode>
  );
}