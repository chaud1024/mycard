import { User } from './user'

export interface Term {
  id: string
  link?: string
  title: string
}

// 카드신청한 데이터들 모으기
// 어느 유저가 어느 약관을 동의했으며 언제 어떤 카드를 신청했는지
export interface ApplyValues {
  userId: User['uid']
  terms: Array<Term['id']>
  appliedAt: Date
  cardId: string
  salary: string
  creditScore: string
  payDate: string
  isMaster: boolean
  isHipass: boolean
  isRf: boolean
}

export interface Option {
  label: string
  value: string | number | undefined
}
