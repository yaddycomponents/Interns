import { Row, Col, Card, Statistic } from 'antd';
import {
  UnorderedListOutlined,
  ClockCircleOutlined,
  SyncOutlined,
  CheckCircleOutlined,
} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import DashboardCard from '../Components/Cards/DashboardCard';
import { useTasks } from '../Context/useTasks';
import PageInfo from '../Components/PageInformation/PageInfo';
const statCardStyle = {
  borderRadius: 12,
  border: '1px solid #dcfce7',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
};

function Dashboard() {
  const { tasks } = useTasks();
  const navigate = useNavigate();

  const total = tasks.length;
  const todo = tasks.filter(t => t.status === 'TODO').length;
  const inProgress = tasks.filter(t => t.status === 'IN_PROGRESS').length;
  const done = tasks.filter(t => t.status === 'DONE').length;

  const upcoming = [...tasks]
    .sort((a, b) => a.date - b.date)
    .slice(0, 6);

  return (
    <>
      <PageInfo
        title="Welcome Back!"
        description="Quick overview of your tasks and progress"
      />

      <Row gutter={24} style={{ paddingTop: 24 }}>
        <Col span={6}>
          <Card style={statCardStyle}>
            <Statistic
              title="TOTAL"
              value={total}
              prefix={<UnorderedListOutlined style={{ color: '#14532d' }} />}
              styles={{ content: { fontSize: 20, color: '#14532d' } }}
            />
          </Card>
        </Col>

        <Col span={6}>
          <Card style={statCardStyle}>
            <Statistic
              title="TO DO"
              value={todo}
              prefix={<ClockCircleOutlined style={{ color: '#f59e0b' }} />}
              styles={{ content: { fontSize: 20, color: '#f59e0b' } }}
            />
          </Card>
        </Col>

        <Col span={6}>
          <Card style={statCardStyle}>
            <Statistic
              title="IN PROGRESS"
              value={inProgress}
              prefix={<SyncOutlined style={{ color: '#3b82f6' }} />}
              styles={{ content: { fontSize: 20, color: '#3b82f6' } }}
            />
          </Card>
        </Col>

        <Col span={6}>
          <Card style={statCardStyle}>
            <Statistic
              title="COMPLETED"
              value={done}
              prefix={<CheckCircleOutlined style={{ color: '#22c55e' }} />}
              styles={{ content: { fontSize: 20, color: '#22c55e' } }}
            />
          </Card>
        </Col>
      </Row>

      <Card
        title="Upcoming Tasks"
        extra={
          <span
            style={{
              color: '#22c55e',
              cursor: 'pointer',
              fontWeight: 500,
            }}
            onClick={() => navigate('/tasks')}
          >
            View all →
          </span>
        }
        style={{
          marginTop: 24,
          borderRadius: 12,
          border: '1px solid #dcfce7',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
        }}
      >
        {upcoming.map((task, index) => (
          <div key={index} onClick={() => navigate('/tasks')}>
            <DashboardCard task={task} />
          </div>
        ))}
      </Card>
    </>
  );
}

export default Dashboard;
