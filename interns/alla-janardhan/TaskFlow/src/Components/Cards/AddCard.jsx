import { Card, Space, Select, Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import Status from '../Status/Status';

function AddCard({ task, onStatusChange }) {
  const navigate = useNavigate();

  return (
    <Card
      title={
        <span style={{ fontWeight: 600 }}>
          {task.title}
        </span>
      }
      extra={
        <Button
          type="link"
          onClick={() => navigate(`/tasks/${task.id}`)}
          style={{ color: '#22c55e' }}
        >
          View
        </Button>
      }
      style={{
        marginBottom: 16,
        borderRadius: 12,
        border: '1px solid #dcfce7',
        boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
      }}
      bodyStyle={{
        paddingTop: 12,
      }}
    >
      <p
        style={{
          color: '#6b7280',
          fontSize: 14,
          marginBottom: 16,
        }}
      >
        {task.description}
      </p>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Status value={task.status} />

        <Select
          size="small"
          value={task.status}
          onChange={onStatusChange}
          options={[
            { value: 'TODO', label: 'To Do' },
            { value: 'IN_PROGRESS', label: 'In Progress' },
            { value: 'DONE', label: 'Done' },
          ]}
          style={{ width: 140 }}
        />
      </div>
    </Card>
  );
}

export default AddCard;
