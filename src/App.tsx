import * as React from "react";
import { Link } from "react-router-dom";

import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <ul>
        <li>
          <Link to="/ex-1">Excersice 1</Link>
        </li>
        <li>
          <Link to="/ex-2">Excersice 2</Link>
        </li>
        <li>
          <Link to="/ex-3">Excersice 3</Link>
        </li>
        <li>
          <Link to="/ex-4">Excersice 4</Link>
        </li>
      </ul>
    </div>
  );
}
