import Select from '@shared/Select'

import { 결제일옵션, 신용점수옵션, 연소득옵션 } from '@constants/apply'

const BasicInfo = () => {
  return (
    <div>
      <Select
        label="연소득"
        options={연소득옵션}
        placeholder={연소득옵션[0].label}
        value=""
      />
      <Select
        label="신용점수"
        options={신용점수옵션}
        placeholder="테스트용1"
        value=""
      />
      <Select
        label="결제일"
        options={결제일옵션}
        placeholder="테스트용2"
        value=""
      />
    </div>
  )
}

export default BasicInfo
