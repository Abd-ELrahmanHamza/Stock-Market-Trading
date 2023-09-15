import { RouterProvider } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "./theme/theme";
import { store } from "../application/store";
import { Provider } from "react-redux";
import router from "./routes";
import React from "react";
import { updateCompaniesRecords } from "../application/utils/companies";

function App() {
  React.useEffect(() => {
    updateCompaniesRecords();
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </ThemeProvider>
  );
}

export default App;
