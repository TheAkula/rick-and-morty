import React from 'react'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import { NavigationContainer } from '@react-navigation/native'

import { RootNavigation } from 'src/navigation/root'

import { AlertProvider } from './modules/alert-context'

const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache(),
})

export const App = () => {
  return (
    <ApolloProvider client={client}>
      <AlertProvider>
        <NavigationContainer>
          <RootNavigation />
        </NavigationContainer>
      </AlertProvider>
    </ApolloProvider>
  )
}
