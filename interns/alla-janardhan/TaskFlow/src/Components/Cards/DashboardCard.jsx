import { Tag, Typography } from 'antd';

const { Text } = Typography;

function DashboardCard({ task }) {
  const getStatusTag = (status) => {
    if (status === 'IN_PROGRESS') {
      return <Tag color="purple">IN PROGRESS</Tag>;
    }
    if (status === 'TODO') {
      return <Tag color="orange">TO DO</Tag>;
    }
    if (status === 'DONE') {
      return <Tag color="green">DONE</Tag>;
    }
    return null;
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '16px 0',
        borderBottom: '1px solid #f0f0f0',
      }}
    >
      <div>
        <Text strong style={{ fontSize: 16 }}>
          {task.title}
        </Text>
        <br />
        <Text type="secondary">
          {task.description}
        </Text>
      </div>

      {getStatusTag(task.status)}
    </div>
  );
}

export default DashboardCard;
