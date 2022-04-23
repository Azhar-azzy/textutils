import { useState } from "react";
import Alert from "./Alert";
import "./App.css";
import Navbar from "./Navbar";
import TextForm from "./TextForm";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (msg, type) => {
    setAlert({
      msg: msg,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#333";
      document.body.style.color = "#FFF";
      document.title = "TextUtils | Dark Mode";
      showAlert("Dark mode enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "#FFF";
      document.body.style.color = "#333";
      document.title = "TextUtils | Light Mode";
      showAlert("Light mode enabled", "success");
    }
  };
  return (
    <>
      <Navbar title="React JS" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <TextForm heading="Enter your text to anlyze." showAlert={showAlert} />
    </>
  );
}

export default App;
