import AdBanners from '@/components/home/AdBanners'
import Top from '@/components/shared/Top'

const Home = () => {
  return (
    <div>
      <Top
        title="혜택 좋은 카드"
        subTitle="회원님을 위해서 혜택 좋은 카드를 모아봤어요"
      />
      <AdBanners />
    </div>
  )
}

export default Home
