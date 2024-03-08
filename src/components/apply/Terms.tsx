import Agreement from '@shared/Agreement'

const Terms = () => {
  return (
    <div>
      <Agreement>
        <Agreement.Title
          checked={true}
          onChange={(e, checked) => {
            console.log(e, checked)
          }}
        >
          약관에 모두 동의
        </Agreement.Title>
        <Agreement.Description
          checked={true}
          onChange={(e, checked) => {
            console.log(e, checked)
          }}
        >
          약관 1
        </Agreement.Description>
        <Agreement.Description
          checked={false}
          onChange={(e, checked) => {
            console.log(e, checked)
          }}
          link="https://www.naver.com"
        >
          약관 2
        </Agreement.Description>
      </Agreement>
    </div>
  )
}

export default Terms
