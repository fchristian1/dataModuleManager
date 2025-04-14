import { useContext, useState } from "react";
import MainLayout from "./layout/MainLayout";
import { DataContext } from "./DataContext";

function App() {
  const dataContext = useContext(DataContext);

  return (
    <>
      <MainLayout
        nav={dataContext?.viewData?.data?.nav}
        aside={dataContext?.viewData?.data?.aside}
        main={dataContext?.viewData?.data?.main}
        footer={dataContext?.viewData?.data?.footer}
        debug={dataContext}
      ></MainLayout>
    </>
  );
}

export default App;
