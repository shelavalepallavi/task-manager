import React from "react";
import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Navbar from "./components/Navbar/Navbar";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import TaskDashboard from "./pages/TaskDashboard/TaskDashboard";
import { Provider } from "react-redux";
import { store } from "./redux/Store";


localStorage.setItem('tasks', JSON.stringify([{"text":"hii","isChecked":false},{"id":1733306837041,"title":"React","description":"Assignment","dueDate":"2024-12-04","completed":true},{"id":1733306886393,"title":"Project ","description":"Own task","dueDate":"2024-12-11","completed":false},{"id":1733306919894,"title":"Interview","description":"On hold","dueDate":"2024-12-03","completed":false},{"id":1733307323964,"title":"create labels for fields","description":"create labels for fields","dueDate":"2024-12-04","completed":false}]));

const App = () => {
  return (
   <Provider store={store}>
     <BrowserRouter>
      <div className="app">
        <div className="app-left">
          <Sidebar />
        </div>
        <div className="app-right">
          <Navbar />
          <Routes>
            <Route path="/" element={<TaskDashboard/>}/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
   </Provider>
  );
};

export default App;
