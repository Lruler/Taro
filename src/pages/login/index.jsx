import { useState } from "react";
import Taro from "@tarojs/taro";
import { View, Text, Button, Input } from "@tarojs/components";
import { Head } from "../../components/header/index";
import "./index.less";

const Login = () => {
  const [count, setCount] = useState(0);
  const [login, setLogin] = useState({ user: '', pwd: '' })

  const handleUser = (e) => {
    setLogin(pre => ({
      ...pre,
      user: e.target.value
    }))
  }

  const handlePwd = (e) => {
    setLogin((pre) => ({
      ...pre,
      pwd: e.target.value,
    }));
  }

  const handleLogin = () => {
    // Taro.request({
    //   url: "http://localhost:8000/blog/list?page=3",
    //   success: (res) => {
    //     console.log(res.data);
    //   },
    // });
  }
  
  return (
    <View>
      <Head />
      <View className='login-state'>
        <Text>{count}</Text>
        <Button className='login-state-button' onClick={() => setCount(count + 1)}>点我加一</Button>
      </View>
      <View className='login-form'>
        账号:<Input type='text' onInput={handleUser} value={login.user} className='login-form-input' focus />
        密码:<Input type='password' onInput={handlePwd} value={login.pwd} className='login-form-input' />
        <Button className='button' onClick={handleLogin}>登陆</Button>
      </View>
      <Button>点我走之</Button>
    </View>
  );
};

export default Login;
