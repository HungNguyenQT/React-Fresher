import React from 'react';
import { Carousel, Typography, Row, Col, Image } from 'antd';

const { Title, Paragraph } = Typography;

const products = [
  {
    id: 1,
    name: 'Vở viết kẻ ngang nhiều hình siêu ngộ nghĩnh',
    price: '12.000₫',
    oldPrice: '41.000₫',
    image: 'https://bizweb.dktcdn.net/thumb/large/100/434/558/products/sp10.jpg?v=1629774327897',
  },
  {
    id: 2,
    name: 'Hộp đựng văn phòng phẩm bằng nhựa trong suốt tiện dụng',
    price: '15.000₫',
    oldPrice: '25.000₫',
    image: 'https://bizweb.dktcdn.net/thumb/large/100/434/558/products/sp8-3.jpg?v=1629774002220',
  },
  {
    id: 3,
    name: 'Sổ tay cá nhân tiện dụng văn phòng phẩm',
    price: '28.000₫',
    image: 'https://bizweb.dktcdn.net/thumb/large/100/434/558/products/sp7.jpg?v=1629773880857',
  },
];

const ProductSection: React.FC = () => {
  return (
    <div style={{ background: '#fff6ef', padding: '50px 0' }}>
      <div style={{ textAlign: 'center', marginBottom: 40 }}>
        <Title level={3} style={{ color: '#333' }}>SẢN PHẨM NỔI BẬT</Title>
        <img src="https://bizweb.dktcdn.net/100/434/558/themes/894884/assets/cate_2.jpg?1676278234490" alt="decor" />
      </div>

      <Carousel dots autoplay>
        <div>
          <Row gutter={24} justify="center">
            {products.map(product => (
              <Col xs={24} sm={12} md={8} key={product.id}>
                <div style={{ textAlign: 'center' }}>
                  <Image
                    src={product.image}
                    alt={product.name}
                    style={{ maxHeight: 300, objectFit: 'cover', borderRadius: 8 }}
                    preview={false}
                  />
                  <Paragraph style={{ marginTop: 12 }}>{product.name}</Paragraph>
                  <Paragraph strong style={{ color: '#e60000', margin: 0 }}>{product.price}</Paragraph>
                  {product.oldPrice && (
                    <Paragraph delete style={{ color: '#999' }}>{product.oldPrice}</Paragraph>
                  )}
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </Carousel>
    </div>
  );
};

export default ProductSection;
