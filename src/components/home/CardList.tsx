import { useQuery } from 'react-query'
import { getCards } from '@/remote/card'

import ListRow from '@shared/ListRow'

const CardList = () => {
  const { data } = useQuery(['card'], () => getCards())

  if (data == null) {
    return null
  }
  return (
    <div>
      <ul>
        {data.map((card, index) => {
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
