import { Layout } from 'antd';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from './Components/Headers/Header';
import Container from './Components/Containers/Container';
import TasksPage from './Pages/TaskPage';
import Dashboard from './Pages/Dashboard';
import TaskDetails from './Pages/TaskDetails';
import { TaskProvider } from './Context/useTasks';

function App() {
  return (
    <TaskProvider>
      <BrowserRouter>
        <Layout style={{ minHeight: '100vh' }}>

          <Header />

          <Layout.Content>
            <Container>
              <Routes>
                <Route path="/" element={<Navigate to="/dashboard" />} />
                <Route path="/tasks" element={<TasksPage />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/tasks/:id" element={<TaskDetails />} />
              </Routes>
            </Container>
          </Layout.Content>

        </Layout>
      </BrowserRouter>
    </TaskProvider>
  );
}

export default App;
