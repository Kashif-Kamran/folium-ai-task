import { QueryClientProvider } from "@tanstack/react-query";
import Dashboard from "./pages/dashboard/iindex";
import { ThemeProvider } from "./providers/theme/theme.provider";
import { queryClient } from "./lib/query-client";

function App() {
  return (
    <ThemeProvider defaultTheme="dark">
      <QueryClientProvider client={queryClient}>
        <Dashboard />
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
