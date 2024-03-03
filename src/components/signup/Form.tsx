import { css } from '@emotion/react'
import { FormValues } from '@models/signup'
import FixedBottomButton from '@shared/FixedBottomButton'
import Flex from '@shared/Flex'
import Spacing from '@shared/Spacing'
import TextField from '@shared/TextField'
import { ChangeEvent, useCallback, useState } from 'react'

const Form = () => {
  const [formValue, setFormValue] = useState<FormValues>({
    email: '',
    password: '',
    rePassword: '',
    name: '',
  })

  const handlelFormValues = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setFormValue((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }, [])

  return (
    <Flex direction="column" css={formContainerStyles}>
      <TextField
        label="이메일"
        name="email"
        placeholder="hong@naver.com"
        value={formValue.email}
        onChange={handlelFormValues}
      />
      <Spacing size={16} />
      <TextField
        label="패스워드"
        name="password"
        type="password"
        value={formValue.password}
        onChange={handlelFormValues}
      />
      <Spacing size={16} />
      <TextField
        label="패스워드 재확인"
        name="rePassword"
        type="password"
        value={formValue.rePassword}
        onChange={handlelFormValues}
      />
      <Spacing size={16} />
      <TextField
        label="이름"
        name="name"
        placeholder="홍길동"
        value={formValue.name}
        onChange={handlelFormValues}
      />

      <FixedBottomButton label="회원가입" disabled={true} onClick={() => {}} />
    </Flex>
  )
}

const formContainerStyles = css`
  padding: 24px;
`

export default Form
