import {
  CheckCircleOutlined,
  ClockCircleOutlined,
  SyncOutlined,
} from '@ant-design/icons';
import { Tag } from 'antd';

const STATUS_CONFIG = {
  TODO: {
    color: 'default',
    icon: <ClockCircleOutlined />,
    label: 'TO DO',
  },
  IN_PROGRESS: {
    color: 'processing',
    icon: <SyncOutlined />,
    label: 'IN PROGRESS',
  },
  DONE: {
    color: 'success',
    icon: <CheckCircleOutlined />,
    label: 'DONE',
  },
};

function Status({ value }) {
  const config = STATUS_CONFIG[value];

  if (!config) return null;

  return (
    <Tag color={config.color} icon={config.icon}>
      {config.label}
    </Tag>
  );
}

export default Status;
