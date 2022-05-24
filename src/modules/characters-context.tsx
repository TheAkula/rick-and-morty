import React, { useState } from 'react'

import { Character } from 'src/generated/graphql'

interface InitialState {
  items: Character[]
}

const initialState: InitialState = {
  items: [],
}

export const CharactersContext = React.createContext(initialState)

interface CharactersContextProviderProps {
  children: React.ReactNode
}

export const CharactersContextProvider: React.FC<CharactersContextProviderProps> =
  ({ children }) => {
    const [characters, setCharacters] = useState<Character[]>([])

    return (
      <CharactersContext.Provider value={{ items: characters }}>
        {children}
      </CharactersContext.Provider>
    )
  }
