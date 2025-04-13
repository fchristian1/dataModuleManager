import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import MainLayout from "./layout/MainLayout";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <MainLayout
        nav={null}
        aside={null}
        main={null}
        footer={null}
      ></MainLayout>
    </>
  );
}

export default App;
