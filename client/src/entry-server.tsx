import { renderToString } from "react-dom/server";
import { Router } from "wouter";
import AppSSR from "./App.ssr";

export function render(url: string) {
  const html = renderToString(
    <Router ssrPath={url}>
      <AppSSR />
    </Router>
  );
  return html;
}
