import { Layout, Button, Space, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';
import {
  AppstoreOutlined,
  UnorderedListOutlined,
} from '@ant-design/icons';

const { Header: AntHeader } = Layout;
const { Text } = Typography;

function Header() {
  const navigate = useNavigate();

  return (
    <AntHeader
      style={{
        background: '#ffffff',
        borderBottom: '1px solid #dcfce7',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 24px',
      }}
    >

      <Space size={12}>
        <div
          style={{
            width: 32,
            height: 32,
            borderRadius: '50%',
            backgroundColor: '#22c55e',
            color: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 600,
            fontSize: 14,
          }}
        >
          U
        </div>

        <Text
          strong
          style={{
            fontSize: 18,
            color: '#14532d',
            cursor: 'pointer',
          }}
          onClick={() => navigate('/dashboard')}
        >
          TaskFlow
        </Text>
      </Space>

      <Space size={16}>
        <Button
          type="text"
          icon={<AppstoreOutlined style={{ color: '#22c55e' }} />}
          onClick={() => navigate('/dashboard')}
        >
          Dashboard
        </Button>

        <Button
          type="text"
          icon={<UnorderedListOutlined style={{ color: '#22c55e' }} />}
          onClick={() => navigate('/tasks')}
        >
          Tasks
        </Button>
      </Space>
    </AntHeader>
  );
}

export default Header;
