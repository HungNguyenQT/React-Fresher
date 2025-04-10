

import React, { useState } from 'react';
import type { FormProps } from 'antd';
import { App, Button, Checkbox, Divider, Form, Input } from 'antd';
import'./login.scss';
import { Link, useNavigate } from 'react-router-dom'
import { loginAPI, registerAPI } from '@/services/api';
import { useCurrentApp } from '@/components/context/app.context';

type FieldType = {
    username: string;    
    password:string;   
};

const LoginPage=()=>{
    const [isSubmit, setIsSubmit] = useState(false); 
    const{message,notification} = App.useApp();
    const navigate = useNavigate();
    const {setIsAuthenticated,setUser} = useCurrentApp();

    const onFinish: FormProps<FieldType>['onFinish'] = async(values)=>{
        const {username,password} = values;
        setIsSubmit(true);       
       const res = await loginAPI(username,password);
       setIsSubmit(false);
       if(res?.data){
        // success
        setIsAuthenticated(true);
        setUser(res.data.user);
        localStorage.setItem('access_token',res.data.access_token);
        message.success("Đăng nhập user thành công.")
        navigate("/")
       } else {
        // error
        notification.error({
            message:"Có lỗi xảy ra",
            description:
            res.message && Array.isArray(res.message)?res.message[0]:res.message,
            duration:5
        })
       }    
    }    
    return(
      <div className='background-images'>
        <div className="login-container">
        <h2>Đăng nhập</h2>
        <Form
            name="login-form"
            onFinish={onFinish}
            autoComplete='off'
            layout="vertical"
            style={{ width: '100%' }}
        //   name="form-register"
        //   onFinish={onFinish}
        //   autoComplete='off'
        //   layout="vertical"
        //   style={{ width: '100%' }}
        > 
          <Form.Item<FieldType>
            label="Email"
            name="username"
            rules={[
              { required: true, message: 'Email không được để trống' },
              {type:"email",message:"Email không đúng định dạng"}
            ]}
          >
            <Input placeholder="Email" />            
          </Form.Item>
  
          <Form.Item<FieldType>
            label="Mật khẩu"
            name="password"
            rules={[{ required: true, message: 'Mật khẩu không được để trống' }]}
          >
            <Input.Password placeholder="********" />            
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-btn" loading={isSubmit}>
              Đăng Nhập
            </Button>
          </Form.Item>
          <Divider>Or</Divider>
          <div className="login-redirect">
            Chưa có tài khoản? <Link to="/register">Đăng Ký</Link>
          </div>
        </Form>
      </div>
      </div>
    )
}
export default LoginPage;
