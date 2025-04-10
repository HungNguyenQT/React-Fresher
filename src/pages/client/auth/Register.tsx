

import React, { useState } from 'react';
import type { FormProps } from 'antd';
import { App, Button, Checkbox, Divider, Form, Input } from 'antd';
import'./register.scss';
import { Link, useNavigate } from 'react-router-dom'
import { loginAPI, registerAPI } from '@/services/api';
import { register } from 'module';

type FieldType = {
    fullName: string;
    email:string;
    password:string;
    phone: string;
};

const RegisterPage=()=>{
    const [isSubmit, setIsSubmit] = useState(false); 
    const{message} = App.useApp();
    const navigate = useNavigate();
    const onFinish: FormProps<FieldType>['onFinish'] = async(values)=>{
       setIsSubmit(true);
       const {email,fullName,password,phone} = values;
       const res = await registerAPI(fullName,email,password,phone);
       if(res.data){
        // success
        message.success("Đăng ký user thành công.")
        navigate("/login")
       } else {
        // error
        message.error(res.message)
       }
       setIsSubmit(false);

    }    
    return(
      <div className='background-images'>
        <div className="register-container">
        <h2>Đăng Ký Tài Khoản</h2>
        <Form
          name="form-register"
          onFinish={onFinish}
          autoComplete='off'
          layout="vertical"
          style={{ width: '100%' }}
        >
          <Form.Item<FieldType>
            label="Họ Tên"
            name="fullName"
            rules={[
              { required: true, message: 'Họ tên không được để trống' }             
            ]}
          >
            <Input placeholder="Họ Tên" />
          </Form.Item>            
          <Form.Item<FieldType>
            label="Email"
            name="email"
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
            
          <Form.Item<FieldType>
            label="Số điện thoại"
            name="phone"
            rules={[{ required: true, message: 'Email không được để trống' }]}
          >
            <Input placeholder="phone" />            
          </Form.Item>


          <Form.Item>
            <Button type="primary" htmlType="submit" className="register-btn" loading={isSubmit}>
              Đăng ký
            </Button>
          </Form.Item>
          <Divider>Or</Divider>
          <div className="login-redirect">
            Đã có tài khoản? <Link to="/login">Đăng Nhập</Link>
          </div>
        </Form>
      </div>
      </div>
    )
}
export default RegisterPage;
