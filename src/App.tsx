import { QueryClientProvider } from "@tanstack/react-query";
import Dashboard from "./pages/dashboard";
import { ThemeProvider } from "./providers/theme/theme.provider";
import { queryClient } from "./lib/query-client";
import { Provider } from "react-redux";
import store from "./providers/redux/store";
import { Toaster } from "sonner";

function App() {
  return (
    <ThemeProvider defaultTheme="dark">
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <Toaster position="top-right" />
          <Dashboard />
        </Provider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
