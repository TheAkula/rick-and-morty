import React from 'react'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import { NavigationContainer } from '@react-navigation/native'

import { RootNavigation } from 'src/navigation/root'

import { AlertProvider } from './modules/alert-context'
import { FilterContextProvider } from './modules/filter-context'

const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          characters: {
            keyArgs: ['filter'],

            merge(existing = { results: [], info: {} }, incoming) {
              return {
                ...existing,
                results: [...existing.results, ...incoming.results],
                info: {
                  ...incoming.info,
                },
              }
            },
          },
          locations: {
            keyArgs: ['filter'],

            merge(existing = { results: [], info: {} }, incoming) {
              return {
                ...existing,
                results: [...existing.results, ...incoming.results],
                info: {
                  ...incoming.info,
                },
              }
            },
          },
          episodes: {
            keyArgs: ['filter'],

            merge(existing = { results: [], info: {} }, incoming) {
              return {
                ...existing,
                results: [...existing.results, ...incoming.results],
                info: {
                  ...incoming.info,
                },
              }
            },
          },
        },
      },
    },
  }),
})

export const App = () => {
  return (
    <ApolloProvider client={client}>
      <AlertProvider>
        <FilterContextProvider>
          <NavigationContainer>
            <RootNavigation />
          </NavigationContainer>
        </FilterContextProvider>
      </AlertProvider>
    </ApolloProvider>
  )
}
