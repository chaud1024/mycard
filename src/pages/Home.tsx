import { useEffect } from 'react'

import Top from '@/components/shared/Top'

import { getAdBanners } from '@/remote/adBanner'
import { getCards } from '@/remote/card'

const Home = () => {
  useEffect(() => {
    getCards().then((response) => console.log('response', response))
    getAdBanners().then((response) => console.log('response', response))
  }, [])
  return (
    <div>
      <Top
        title="혜택 좋은 카드"
        subTitle="회원님을 위해서 혜택 좋은 카드를 모아봤어요"
      />
    </div>
  )
}

export default Home
