import Button from '@shared/Button'

const CardInfo = () => {
  return (
    <div>
      <Button.Group title="해외결제">
        <Button size="medium">Master</Button>
        <Button size="medium">국내전용</Button>
      </Button.Group>

      <Button.Group title="후불교통기능">
        <Button size="medium">신청안함</Button>
        <Button size="medium">신청</Button>
      </Button.Group>

      <Button.Group title="후불하이패스카드">
        <Button size="medium">신청안함</Button>
        <Button size="medium">신청</Button>
      </Button.Group>
    </div>
  )
}

export default CardInfo
