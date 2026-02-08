import { Segmented, Card } from 'antd';

function Tabs() {
  return (
    <Card style={{ marginBottom: 24, textAlign: 'center' }}>
      <Segmented
        options={['All', 'To Do', 'In Progress', 'Done']}
      />
    </Card>
  );
}

export default Tabs;
