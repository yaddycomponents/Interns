import { Button, Segmented, Space, Modal } from 'antd';
import { useState } from 'react';
import PageInfo from '../Components/PageInformation/PageInfo';
import AddCard from '../Components/Cards/AddCard';
import TaskForm from '../Components/Forms/TaskForm';
import { useTasks } from '../Context/useTasks';

function TasksPage() {
  const { tasks, setTasks } = useTasks();
  const [open, setOpen] = useState(false);
  const [filter, setFilter] = useState('All');

  const addTask = (values) => {
    const newTask = {
      id: Date.now(),
      title: values.title,
      description: values.description,
      date: values.date,
      status: values.status,
    };

    setTasks([newTask, ...tasks]);
    setOpen(false);
  };

  const changeStatus = (index, status) => {
    const updated = [...tasks];
    updated[index].status = status;
    setTasks(updated);
  };

  const visibleTasks =
    filter === 'All'
      ? tasks
      : tasks.filter(task => task.status === filter);

  return (
    <>
      <PageInfo
        title="Tasks"
        description="Create, track, and update your tasks"
      />

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: 24,
        }}
      >
        <Button
          type="primary"
          onClick={() => setOpen(true)}
          style={{
            backgroundColor: '#22c55e',
            borderColor: '#22c55e',
          }}
        >
          + New Task
        </Button>


        <Segmented
          options={['All', 'TODO', 'IN_PROGRESS', 'DONE']}
          onChange={setFilter}
          style={{
            backgroundColor: 'lightgreen',
          }}
        />

      </div>

      {visibleTasks.map((task, index) => (
        <AddCard
          key={task.id}
          task={task}
          onStatusChange={(status) => changeStatus(index, status)}
        />
      ))}

      <Modal
        title="Add Task"
        open={open}
        onCancel={() => setOpen(false)}
        footer={null}
        centered
        destroyOnHidden
      >
        <TaskForm onFinish={addTask} />
      </Modal>
    </>
  );
}

export default TasksPage;
