import Apply from '@components/apply'
import { useState } from 'react'

const ApplyPage = () => {
  const [step, setStep] = useState(2)

  const handleSubmit = () => {
    // TODO: 카드신청
  }

  return <Apply step={step} onSubmit={handleSubmit} />
}

export default ApplyPage
