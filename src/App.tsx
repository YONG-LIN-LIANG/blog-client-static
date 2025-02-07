import { Routes } from "./routes";
import "./App.css";
function App() {
  // const isPaidForReport = true
  // const isAdmin = true
  return (
    <section>
      <Routes isAuthorized={false} />
    </section>
  );
}

export default App;
