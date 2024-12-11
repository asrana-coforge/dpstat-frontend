
import { CategoryPage, FilePage } from './components';
import './App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import jsonData from "./data/data.json";

const generateRoutes = (data, path = "") => {
  const routes = [];
  Object.keys(data).forEach((key) => {
    const newPath = `${path}/${key}`;
    console.log({newPath}); 
    if (typeof data[key] === "object") {

      routes.push(
        <Route key={newPath} path={newPath} element={<FilePage data={data[key]} />} />
      );
      routes.push(...generateRoutes(data[key], newPath));
    } else {
      routes.push(
        <Route
          key={newPath}
          path={newPath}
          element={<div>{data[key]}</div>}
        />
      );
    }
  });
  return routes;
};

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<CategoryPage data={jsonData}/>} />
      {generateRoutes(jsonData)}
    </Routes>
  </Router>
);

export default App;
