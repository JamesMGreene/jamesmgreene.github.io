import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import OpenSource from "./pages/OpenSource";
import BestProject from "./pages/BestProject";
import Learning from "./pages/Learning";
import McpTranscript from "./pages/McpTranscript";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="open-source" element={<OpenSource />} />
        <Route path="best-project" element={<BestProject />} />
        <Route path="learning" element={<Learning />} />
        <Route path="mcp-transcript" element={<McpTranscript />} />
      </Route>
    </Routes>
  );
}
