import React, { useState } from 'react';
import { Avatar, Badge, Divider, Drawer, Dropdown, Input, Space } from 'antd';
import { Link, useNavigate } from 'react-router-dom'
import {
  ShoppingOutlined,
  LoginOutlined,
  UserAddOutlined,
  SearchOutlined
} from '@ant-design/icons';
import './Header.scss';
import logo from '../images/logo_1.jpg';
import { useCurrentApp } from 'components/context/app.context';



const AppHeader = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const { isAuthenticated, user } = useCurrentApp();

  const navigate = useNavigate();

  const handleLogout = async () => {
    //todo
  }
  let items = [
    {
      label: <label
        style={{ cursor: 'pointer' }}
        onClick={() => alert("me")}
      >Quản lý tài khoản</label>,
      key: 'account',
    },
    {
      label: <Link to="/history">Lịch sử mua hàng</Link>,
      key: 'history',
    },
    {
      label: <label
        style={{ cursor: 'pointer' }}
        onClick={() => handleLogout()}
      >Đăng xuất</label>,
      key: 'logout',
    },

  ];
  if (user?.role === 'ADMIN') {
    items.unshift({
      label: <Link to='/admin'>Trang quản trị</Link>,
      key: 'admin',
    })
  }
  const urlAvatar = `${import.meta.env.VITE_BACKEND_URL}/images/avatar/${user?.avatar}`;
  return (
    <header className="custom-header">
      {/* Menu trái */}
      <nav className="nav-left">
        <a className="nav-item active" href="#">TRANG CHỦ</a>
        <a className="nav-item" href="#">GIỚI THIỆU</a>
        <a className="nav-item" href="#">SẢN PHẨM</a>
        <a className="nav-item" href="#">TIN TỨC</a>
      </nav>
      {/* <div>
      {JSON.stringify(user)}
    </div> */}
      {/* Logo trung tâm */}
      <div className="logo">
        <img src={logo} alt="Wine House" />
        {/* bạn có thể thay logo bằng text nếu cần */}
      </div>
      {/* Icon user + cart */}
      <div className="action-icons">
        {/* Tìm kiếm */}
        <div className="search-box">
          <Input
            placeholder="Tìm sản phẩm..."
            prefix={<SearchOutlined />}
            className="search-input"
          />
        </div>
        <li className="navigation__item mobile"><Divider type='vertical' /></li>
        <li className="navigation__item mobile">
          {!isAuthenticated ?
            <span onClick={() => navigate('/login')}> Tài Khoản</span>
            :
            <Dropdown menu={{ items }} trigger={['click']}>
              <Space >
                <Avatar src={urlAvatar} />
                {user?.fullName}
              </Space>
            </Dropdown>
          }
        </li>
        <Drawer
                title="Menu chức năng"
                placement="left"
                onClose={() => setOpenDrawer(false)}
                open={openDrawer}
            >
                <p>Quản lý tài khoản</p>
                <Divider />

                <p>Đăng xuất</p>
                <Divider />
            </Drawer>
        {/* <div className="auth">         
            <LoginOutlined />
            <Link to="/login">Đăng Nhập</Link>
            
            <UserAddOutlined />
            <Link to="/register">Đăng Ký</Link>
        </div> */}
        <div className="cart">
          <Badge count={0} size="small" offset={[0, 10]}>
            <ShoppingOutlined className="cart-icon" />
          </Badge>
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
