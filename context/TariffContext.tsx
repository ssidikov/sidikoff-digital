'use client'

import React, { createContext, useContext, useState, ReactNode } from 'react'

interface TariffContextType {
  selectedTariff: string
  setSelectedTariff: (tariff: string) => void
}

const TariffContext = createContext<TariffContextType | undefined>(undefined)

export function TariffProvider({ children }: { children: ReactNode }) {
  const [selectedTariff, setSelectedTariff] = useState('')

  return (
    <TariffContext.Provider value={{ selectedTariff, setSelectedTariff }}>
      {children}
    </TariffContext.Provider>
  )
}

export function useTariff() {
  const context = useContext(TariffContext)
  if (context === undefined) {
    throw new Error('useTariff must be used within a TariffProvider')
  }
  return context
}
