import React from 'react'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import { NavigationContainer } from '@react-navigation/native'

import { RootNavigation } from 'src/navigation/root'

import { AlertProvider } from './modules/alert-context'
import { CharacterContextProvider } from './modules/character-context'
import { FilterContextProvider } from './modules/filter-context'

const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache(),
})

export const App = () => {
  return (
    <ApolloProvider client={client}>
      <AlertProvider>
        <FilterContextProvider>
          <CharacterContextProvider>
            <NavigationContainer>
              <RootNavigation />
            </NavigationContainer>
          </CharacterContextProvider>
        </FilterContextProvider>
      </AlertProvider>
    </ApolloProvider>
  )
}
