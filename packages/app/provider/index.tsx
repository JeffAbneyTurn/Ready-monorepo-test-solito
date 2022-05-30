import { Dripsy } from './dripsy'
import { NavigationProvider } from './navigation'
import React from 'react';

export function Provider({ children }: { children: React.ReactNode }) {
  return (
    <NavigationProvider>
      <Dripsy>{children}</Dripsy>
    </NavigationProvider>
  )
}
