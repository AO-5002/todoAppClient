import "./App.css";
import { Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Primary from "./pages/Primary";
import TaskPage from "./pages/TaskPage";
import TaskCreatePage from "./pages/TaskCreatePage";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<Primary />} />
        <Route path="/task/:id" element={<TaskPage />} />
        <Route path="/task/new" element={<TaskCreatePage />} />
        <Route path="*" element={<div>Page not found</div>} />
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
