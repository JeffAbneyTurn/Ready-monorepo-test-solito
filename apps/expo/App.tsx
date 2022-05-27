import { NativeNavigation } from 'app/navigation/native'
import { Provider } from 'app/provider'
import React from 'react';

export default function App() {
  return (
    <Provider>
      <NativeNavigation />
    </Provider>
  )
}
