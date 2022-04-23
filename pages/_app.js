import 'tailwindcss/tailwind.css'
import '../styles/globals.css'

import React from 'react'
import { UserContextProvider } from '../hooks/authUser'

export default function MyApp({ Component, pageProps }) {
  return (
    <main className={'dark'}>
      <UserContextProvider>
        <Component {...pageProps} />
      </UserContextProvider>
    </main>
  )
}
