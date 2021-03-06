import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import HomePage from "./views/HomePage";
import CalendarPage from "./views/CalendarPage";
import ProfilePage from "./views/ProfilePage";
import ClassInfoPage from "./views/ClassInfoPage";
import VideoPage from "./components/video/VideoChat";
import CategoryListPage from "./views/CategoryListPage";
import theme from "./components/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/calendar" component={CalendarPage} />
          <Route exact path="/profile" component={ProfilePage} />
          <Route path="/class/:id" component={ClassInfoPage} />
          <Route path="/video/:id" component={VideoPage} />
          <Route
            path="/category/:categoryName/:id"
            component={CategoryListPage}
          />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
