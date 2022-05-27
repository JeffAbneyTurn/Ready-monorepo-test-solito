import { NativeNavigation } from 'app/navigation/native'
import { Provider } from 'app/provider'
import React from 'react';
import {TailwindProvider} from 'tailwind-rn';
import utilities from '../../tailwind.json';

export default function App() {
  return (
    <Provider>
      <TailwindProvider utilities={utilities}>
      <NativeNavigation />
      </TailwindProvider>
    </Provider>
  )
}
