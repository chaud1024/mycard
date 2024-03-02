import './App.css'

import Button from '@shared/Button'
import Input from '@shared/Input'
import Text from '@shared/Text'
import TextField from '@shared/TextField'

import { useAlertContext } from './contexts/AlertContext'

function App() {
  const { open } = useAlertContext()
  return (
    <div>
      <Text typography="t1" display="block" color="red">
        t1
      </Text>
      <Text typography="t2" color="blue">
        t2
      </Text>
      <Text typography="t3">t3</Text>
      <Text typography="t4">t4</Text>
      <Text typography="t5">t5</Text>
      <Text typography="t6">t6</Text>

      <div
        style={{
          height: 10,
          width: '100%',
          background: '#efefef',
          marginTop: 50,
          marginBottom: 50,
        }}
      />

      <Button>클릭해주세요</Button>
      <Button color="success">클릭해주세요</Button>
      <Button color="error">클릭해주세요</Button>
      <Button color="success" weak={true}>
        클릭해주세요
      </Button>
      <Button color="error" weak={true}>
        클릭해주세요
      </Button>
      <Button full={true}>클릭해주세요</Button>
      <Button disabled={true}>클릭해주세요</Button>

      <div
        style={{
          height: 10,
          width: '100%',
          background: '#efefef',
          marginTop: 50,
          marginBottom: 50,
        }}
      />

      <Input placeholder="아이디를 입력해주세요." aria-invalid={false} />
      <Input aria-invalid={true} />

      <div
        style={{
          height: 10,
          width: '100%',
          background: '#efefef',
          marginTop: 50,
          marginBottom: 50,
        }}
      />

      <TextField label="아이디" />
      <TextField label="패스워드" />
      <TextField
        label="패스워드"
        hasError={true}
        helpMessage="패스워드가 일치하지 않습니다."
      />

      <div
        style={{
          height: 10,
          width: '100%',
          background: '#efefef',
          marginTop: 50,
          marginBottom: 50,
        }}
      />

      {/* <Alert
        open={true}
        description="하이하이"
        title="알럿이 떴습니다!"
        onButtonClick={() => {}}
      /> */}
      <Button
        onClick={() => {
          open({
            title: '카드신청완료',
            description: '내역페이지에서 확인해주세요',
            onButtonClick: () => {},
          })
        }}
      >
        Alert 오픈
      </Button>
    </div>
  )
}

export default App
