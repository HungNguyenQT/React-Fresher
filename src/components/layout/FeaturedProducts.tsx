import React, { useEffect, useState } from 'react';
import { Typography, Row, Col, Image, Spin, Card } from 'antd';
import { getBooksAPI } from '@/services/api';

const { Title, Paragraph, Text } = Typography;

const ProductSection: React.FC = () => {
  const [books, setBooks] = useState<IBookTable[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const res = await getBooksAPI('pageSize=6');
        if (res?.data?.result) {
          setBooks(res.data.result);  // Cập nhật books với dữ liệu trả về
        } else {
          console.log("Không có dữ liệu sách trong result.");
          setBooks(res.data);  // Thử gán trực tiếp res.data nếu đó là mảng sách
        }
      } catch (error) {
        console.error('Lỗi khi lấy sách:', error);
      } finally {
        setLoading(false);  // Đảm bảo set loading về false sau khi xong
      }
    };
    fetchBooks();
  }, []);

  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 40 }}>
        <Spin tip="Đang tải sản phẩm..." />
      </div>
    );
  }

  return (
    <div style={{ background: '#fff6ef', padding: '50px 0' }}>
      <div style={{ textAlign: 'center', marginBottom: 40 }}>
        <Title level={3} style={{ color: '#333' }}>SẢN PHẨM NỔI BẬT</Title>
        <img
          src="https://bizweb.dktcdn.net/100/434/558/themes/894884/assets/cate_2.jpg?1676278234490"
          alt="decor"
          style={{ maxWidth: 100 }}
        />
      </div>

      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <Row gutter={[24, 32]}>
          {books.map((book) => {
            return (
              <Col xs={24} sm={12} md={6} lg={6} key={book._id}>
                <Card style={{ height: 410 }}
                  hoverable
                  cover={
                    <Image
                      src={`${import.meta.env.VITE_BACKEND_URL}/images/book/${book?.thumbnail}`}  // Fallback nếu không có hình
                      alt={book.mainText}
                      style={{ width: '100%', objectFit: 'cover', borderRadius: '8px 8px 0 0' }}
                      preview={false}
                    />
                  }
                >
                  <Paragraph ellipsis={{ rows: 2 }}>{book.mainText}</Paragraph>
                  <Text strong style={{ color: '#e60000' }}>
                    {new Intl.NumberFormat('vi-VN', {
                      style: 'currency',
                      currency: 'VND',
                    }).format(+book.price)}
                  </Text>
                </Card>
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
};

export default ProductSection;
