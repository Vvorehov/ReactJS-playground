import React from "react";
import { render } from "react-dom";
import { Header } from "./scenes/Header";
import { Footer } from "./scenes/Footer";
import { Results } from "./scenes/Results";
import { ErrorBoundary } from "./scenes/ErrorBoundaries"
import "./../node_modules/bootstrap/scss/bootstrap-grid.scss";
import "./assets/styles/styles.scss";

render(
    <div className="app">
      <ErrorBoundary>
        <Header />
        <Results />
        <Footer />
      </ErrorBoundary>
    </div>,
    document.getElementById("container")
);