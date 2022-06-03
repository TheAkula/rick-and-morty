import React from 'react'
import { Text, View } from 'react-native'
import { NetworkStatus, QueryResult } from '@apollo/client'

import { RefreshIndicator } from 'src/components/atoms/refreshIndicator'
import { Spinner } from 'src/ui/spinner'

interface PaginatedScreenProps {
  variables: Record<string, unknown>
  query: any
  children: (end: () => void, data: QueryResult['data']) => Element
  indexKey: string
  getNext: (d: QueryResult['data']) => number
}

export const PaginatedScreen: React.FC<PaginatedScreenProps> = ({
  variables,
  query,
  children,
  indexKey,
  getNext,
}) => {
  const { loading, error, data, fetchMore, networkStatus } = query({
    variables,
    notifyOnNetworkStatusChange: true,
  })

  const endReached = () => {
    const next = getNext(data)

    if (!loading && next) {
      fetchMore({
        variables: {
          [indexKey]: next,
        },
      })
    }
  }

  if (error) {
    return <Text>{error.message}</Text>
  }

  return (
    <View>
      {!data && loading ? <Spinner /> : children(endReached, data)}
      {networkStatus === NetworkStatus.fetchMore && <RefreshIndicator />}
    </View>
  )
}
