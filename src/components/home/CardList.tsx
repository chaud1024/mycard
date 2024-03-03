import { getCards } from '@/remote/card'
import { useInfiniteQuery } from 'react-query'
import { flatten } from 'lodash'
import ListRow from '@shared/ListRow'

const CardList = () => {
  const { data, hasNextPage, fetchNextPage } = useInfiniteQuery(
    ['card'],
    ({ pageParam }) => {
      return getCards(pageParam)
    },
    {
      getNextPageParam: (snapshot) => {
        return snapshot.lastVisible
      },
    },
  )

  console.log('data', data)

  if (data == null) {
    return null
  }

  const cards = flatten(data?.pages.map(({ items }) => items))

  return (
    <div>
      <button onClick={() => fetchNextPage()}>데이터 불러오기</button>
      <ul>
        {cards.map((card, index) => {
          return (
            <ListRow
              key={card.id}
              contents={
                <ListRow.Texts title={`${index + 1}위`} subTitle={card.name} />
              }
              right={card.payback && <div>{card.payback}</div>}
              withArrow={true}
            />
          )
        })}
      </ul>
    </div>
  )
}

export default CardList
