import { Dripsy } from './dripsy'
import { NavigationProvider } from './navigation'
import React from 'react'
import { TailwindProvider } from 'tailwind-rn/dist'
import utilities from '../tailwind.json'

export function Provider({ children }: { children: React.ReactNode }) {
  return (
    <NavigationProvider>
      <TailwindProvider utilities={utilities}>
        <Dripsy>{children}</Dripsy>
      </TailwindProvider>
    </NavigationProvider>
  )
}
