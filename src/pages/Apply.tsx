import BasicInfo from '@components/apply/BasicInfo'
import CardInfo from '@components/apply/CardInfo'
import Terms from '@components/apply/Terms'
import { ApplyValues } from '@models/apply'
import { useState } from 'react'

const ApplyPage = () => {
  const [step, setStep] = useState(2)

  const handleTermsChange = (terms: ApplyValues['terms']) => {
    console.log('terms', terms)
  }
  const handleBasicInfoChange = (
    infoValues: Pick<ApplyValues, 'salary' | 'creditScore' | 'payDate'>,
  ) => {
    console.log('terms', infoValues)
  }
  return (
    <div>
      {step === 0 ? <Terms onNext={handleTermsChange} /> : null}
      {step === 1 ? <BasicInfo onNext={handleBasicInfoChange} /> : null}
      {step === 2 ? <CardInfo /> : null}
    </div>
  )
}

export default ApplyPage
