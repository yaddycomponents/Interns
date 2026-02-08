import { Card, Button, Space, Modal } from 'antd';
import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import dayjs from 'dayjs';
import { useTasks } from '../Context/useTasks';
import TaskForm from '../Components/Forms/TaskForm';
import PageInfo from '../Components/PageInformation/PageInfo';

function TaskDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { tasks, setTasks } = useTasks();
  const [open, setOpen] = useState(false);

  const task = tasks.find(t => t.id === Number(id));

  if (!task) {
    return <p style={{ padding: 30 }}>Task not found</p>;
  }

  const updateTask = (values) => {
    const updatedTasks = tasks.map(t =>
      t.id === task.id
        ? {
            ...t,
            title: values.title,
            description: values.description,
            date: values.date,
            status: values.status,
          }
        : t
    );

    setTasks(updatedTasks);
    setOpen(false);
  };

  const deleteTask = () => {
    setTasks(tasks.filter(t => t.id !== task.id));
    navigate('/tasks');
  };

  return (
    <>
      <PageInfo
        title="Task Details"
        description="View and manage this task"
      />

      <div style={{ maxWidth: 700 }}>
        <Card
          title={task.title}
          style={{
            borderRadius: 12,
            border: '1px solid #dcfce7',
            boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
          }}
        >
          <p
            style={{
              color: '#6b7280',
              fontSize: 14,
              marginBottom: 20,
            }}
          >
            {task.description}
          </p>

          <div style={{ marginBottom: 8 }}>
            <strong>Status:</strong>{' '}
            <span style={{ color: '#14532d' }}>
              {task.status}
            </span>
          </div>

          <div>
            <strong>Due Date:</strong>{' '}
            {task.date
              ? dayjs(task.date).format('DD MMM YYYY')
              : '—'}
          </div>

          <Space style={{ marginTop: 24 }}>
            <Button
              type="primary"
              onClick={() => setOpen(true)}
              style={{
                backgroundColor: '#22c55e',
                borderColor: '#22c55e',
              }}
            >
              Edit
            </Button>

            <Button danger onClick={deleteTask}>
              Delete
            </Button>

            <Button onClick={() => navigate('/tasks')}>
              Back
            </Button>
          </Space>
        </Card>
      </div>

      <Modal
        title="Edit Task"
        open={open}
        onCancel={() => setOpen(false)}
        footer={null}
        centered
        destroyOnHidden
      >
        <TaskForm
          onFinish={updateTask}
          initialValues={{
            title: task.title,
            description: task.description,
            date: task.date,
            status: task.status,
          }}
          submitText="Update Task"
        />
      </Modal>
    </>
  );
}

export default TaskDetails;
