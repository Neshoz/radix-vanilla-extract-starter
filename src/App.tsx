import "./app.css";
import { Button } from "./components";
import { useTheme } from "./theme/hook";

function App() {
  const { toggleColorScheme } = useTheme();
  return (
    <div style={{ padding: 12, display: "flex", gap: 12, flex: 1 }}>
      <Button variant="solid">Solid button</Button>
      <Button variant="soft" onClick={() => toggleColorScheme()}>
        Soft button
      </Button>
      <Button variant="outline">Outline button</Button>
      <Button variant="ghost">Ghost button</Button>
    </div>
  );
}

export default App;
