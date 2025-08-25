import MainLayout from "../shared/layouts/MainLayout";
import AppRouter from "./providers/router/AppRouter";

function App() {
  return (
    <MainLayout>
      <AppRouter />
    </MainLayout>
  );
}

export default App;
