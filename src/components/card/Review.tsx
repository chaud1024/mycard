import { useInView } from 'react-intersection-observer'
import { useQuery } from 'react-query'
import Skeleton from '../shared/Skeleton'
import Spacing from '../shared/Spacing'

const Review = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  })

  const { data = [], isLoading } = useQuery(
    ['review'],
    () => {
      return new Promise<string[]>((resolve) => {
        setTimeout(() => {
          resolve(['너무좋아요!', '혜택진짜 좋아요', '할인폭이 커요'])
        }, 2_000)
      })
    },
    { enabled: inView },
  )

  return (
    <div ref={ref}>
      {isLoading ? (
        <>
          <Skeleton width={300} height={10} />
          <Spacing size={4} />
          <Skeleton width={300} height={10} />
        </>
      ) : (
        data.map((review, idx) => <div key={idx}>{review}</div>)
      )}
    </div>
  )
}

export default Review
