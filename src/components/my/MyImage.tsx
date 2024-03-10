import { ChangeEvent } from 'react'
import { getAuth, updateProfile } from 'firebase/auth'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import { collection, doc, updateDoc } from 'firebase/firestore'
import { useSetRecoilState } from 'recoil'

import { COLLECTIONS } from '@constants'
import styled from '@emotion/styled'
import useUser from '@hooks/auth/useUser'
import { app, storage, store } from '@remote/firebase'
import { userAtom } from '@atoms/user'

const MyImage = ({
  size = 40,
  mode = 'default',
}: {
  size?: number
  mode?: 'default' | 'upload'
}) => {
  const user = useUser()
  const setUser = useSetRecoilState(userAtom)

  const handleUploadImage = async (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files

    const currentUser = getAuth(app).currentUser

    if (files == null || user == null || currentUser == null) {
      return
    }

    const fileName = files[0].name
    const storageRef = ref(storage, `users/${user.uid}/${fileName}`)

    const uploaded = await uploadBytes(storageRef, files[0])

    const downloadUrl = await getDownloadURL(uploaded.ref)

    await updateProfile(currentUser, {
      photoURL: downloadUrl,
    })

    await updateDoc(doc(collection(store, COLLECTIONS.USER), currentUser.uid), {
      photoURL: downloadUrl,
    })

    setUser({
      ...user,
      photoURL: downloadUrl,
    })
  }

  return (
    <Container>
      <img
        src={
          user?.photoURL ||
          'https://cdn3.iconfinder.com/data/icons/font-awesome-solid/512/circle-user-64.png'
        }
        alt="사용자의 프로필 이미지"
        width={size}
        height={size}
      />
      {mode === 'upload' ? (
        <input type="file" accept="image/*" onChange={handleUploadImage} />
      ) : null}
    </Container>
  )
}

const Container = styled.div`
  position: relative;
  display: inline-block;
  cursor: pointer;

  & img {
    border-radius: 50%;
  }

  & input[type='file'] {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    cursor: pointer;
  }
`

export default MyImage
