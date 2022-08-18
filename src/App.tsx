import { useCallback, useEffect, useState } from 'react';
import Header from './components/Header';
import Logo from './components/Logo';
import Content from './components/Content';
import Footer from './components/Footer';
import User from './components/User';
import GlobalStyle from './styles/global'
import API from './api';
import { TypeUser } from './types';
import Button from './components/Button';
import Switch from './components/Switch';
import imageBg from '../src/assets/bg.webp'

const getUserFromResponse = (data: any): TypeUser => {
  if (!data?.results?.[0]){
    throw new Error('invalid user response data', data)
  }
  const user = data.results[0]
  return {
    id: user?.id?.value || '0',
    gender: user?.gender || 'female',
    name: {
      title: user?.name?.title,
      first: user?.name?.first,
      last: user?.name?.last
    },
    country: user?.location?.country,
    email: user?.email,
    picture: {
      large: user?.picture?.large,
      medium: user?.picture?.medium,
      thumbnail: user?.picture?.thumbnail
    }
  }
}

const App = () => {

  const _showSwitch = true//i took the liberty to use a switch instead of a button
  const [isLoading, setIsloading] = useState<boolean|undefined>(undefined)
  const [checked, setChecked] = useState<boolean>(true)
  const [user, setUser] = useState<TypeUser|undefined>(undefined)

  const handleButton = useCallback((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const isShow = Boolean(event.currentTarget.value)
    if(!isShow) setUser(undefined)
    setChecked(!isShow)
  }, [])

  const handleInput = useCallback((event: React.ChangeEvent<HTMLInputElement> | boolean) => {
    let isChecked = false
    if(typeof event === 'boolean'){
      isChecked = event
    }
    else {
      isChecked = event.currentTarget.checked
    }
    if(!isChecked) setUser(undefined)
    setChecked(isChecked)
  }, [])

  useEffect(() => {
    if(checked && !user && !isLoading){
      setIsloading(true)
      API.User.get()//TODO: useAsync ?
        .then((data: any) => setUser(getUserFromResponse(data)))
        .finally(() => setIsloading(false))
    }
  }, [checked, user, isLoading])

  return (
    <>
      <GlobalStyle />
      <div className="App">
        <Header>
          <Logo />
          User
        </Header>

        <Content background={imageBg} align='top'>
          {_showSwitch
            ? <Switch on="Show" off="Hide" checked={checked} defaultChecked={true} onChange={handleInput}/>
            : <Button active={checked} value={String(checked)} disabled={isLoading} onClick={handleButton}>{checked ? 'Hide' : 'Show'}</Button>
          }
          {checked
            ? <User user={user} loading={isLoading}/>
            : <></>
            
          }
        </Content>
        
        <Footer>
          © 2022 - zeonardo
        </Footer>
      </div>
    </>
  );
}

export default App;
