import { Form, Input, Button, Select, DatePicker } from 'antd';

const { TextArea } = Input;

function TaskForm({ onFinish, initialValues, submitText = 'Create Task' }) {
  return (
    <Form
      layout="vertical"
      onFinish={onFinish}
      initialValues={initialValues}
      style={{ marginTop: 8 }}
    >
      <Form.Item
        label="Title"
        name="title"
        rules={[{ required: true }]}
      >
        <Input  />
      </Form.Item>

      <Form.Item
        label="Description"
        name="description"
        rules={[{ required: true}]}
      >
        <TextArea
          rows={4}
        />
      </Form.Item>

      <Form.Item
        label="Due Date"
        name="date"
        rules={[{ required: true}]}
      >
        <DatePicker
          style={{ width: '100%' }}
        />
      </Form.Item>

      <Form.Item
        label="Status"
        name="status"
        rules={[{ required: true }]}
      >
        <Select >
          <Select.Option value="TODO">To Do</Select.Option>
          <Select.Option value="IN_PROGRESS">In Progress</Select.Option>
          <Select.Option value="DONE">Done</Select.Option>
        </Select>
      </Form.Item>

      <Form.Item style={{ marginTop: 24 }}>
        <Button
          type="primary"
          htmlType="submit"
          block
          style={{
            backgroundColor: '#22c55e',
            borderColor: '#22c55e',
            fontWeight: 500,
          }}
        >
          {submitText}
        </Button>
      </Form.Item>
    </Form>
  );
}

export default TaskForm;
