import React from 'react';
import { Layout, Row, Col, Typography, Space } from 'antd';
import {
  EnvironmentOutlined,
  PhoneOutlined,
  MailOutlined,
  FacebookFilled,
  TwitterOutlined,
  InstagramOutlined,
  YoutubeFilled,
} from '@ant-design/icons';
import './Footer.scss';
import logo from '../images/logo_1.jpg';

const { Footer } = Layout;
const { Title, Text, Link } = Typography;

const Footers = () => {
  return (
    <Footer className="custom-footer">
      <Row gutter={[32, 32]}>
        <Col xs={24} md={8}>
          <div className="logo-section">
            <div className="logo">
              <img src={logo} alt="Wine House" />
              {/* bạn có thể thay logo bằng text nếu cần */}
            </div>
            <Text className="tagline">Lựa chọn số 1 cho bạn</Text>
          </div>
          <div className="contact-info">
            <p><EnvironmentOutlined /> Hải Lăng Quảng Trị</p>
            <p><PhoneOutlined /> Tổng đài: 0767412036</p>
            <p><MailOutlined /> Email: <a href="mailto:support@sapo.vn">support@sapo.vn</a></p>
          </div>
        </Col>

        <Col xs={12} md={4}>
          <Title level={5} className="section-title">TÌM HIỂU THÊM</Title>
          <Space direction="vertical" className="link-group">
            <Link href="#">Trang chủ</Link>
            <Link href="#">Giới thiệu</Link>
            <Link href="#">Sản phẩm</Link>
            <Link href="#">Tin tức</Link>
            <Link href="#">Liên hệ</Link>
          </Space>
        </Col>

        <Col xs={12} md={4}>
          <Title level={5} className="section-title">HỖ TRỢ KHÁCH HÀNG</Title>
          <Space direction="vertical" className="link-group">
            <Link href="#">Trang chủ</Link>
            <Link href="#">Giới thiệu</Link>
            <Link href="#">Sản phẩm</Link>
            <Link href="#">Tin tức</Link>
            <Link href="#">Liên hệ</Link>
          </Space>
        </Col>

        <Col xs={24} md={8}>
          <Title level={5} className="section-title">THEO DÕI CHÚNG TÔI</Title>
          <Space size="large" className="social-icons">
            <FacebookFilled />
            <TwitterOutlined />
            <InstagramOutlined />
            <YoutubeFilled />
          </Space>
        </Col>
      </Row>
      <div className="footer-bottom">
        © Bản quyền thuộc về HungITFE
      </div>
    </Footer>
  );
};

export default Footers;
