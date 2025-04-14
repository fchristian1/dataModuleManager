import { useState } from "react";
import { DebugView } from "../components/DebugView";
import { Nav } from "../components/site/Nav";
import { Aside } from "../components/site/Aside";

const MainLayout = ({ nav, aside, main, footer, debug }) => {
  return (
    <>
      <div className="flex flex-col gap-2 bg-amber-200 p-2 h-screen">
        <nav className="bg-white p-2 border-2 border-white rounded-[8px] w-full">
          <Nav data={nav}></Nav>
        </nav>
        <div className="flex flex-row gap-2 h-full">
          {aside && Object.keys(aside).length > 0 && (
            <aside className="bg-white p-2 border-2 border-white rounded-[8px]">
              <Aside data={aside}></Aside>
            </aside>
          )}
          <main className="bg-white p-2 border-2 border-white rounded-[8px] w-full">
            {JSON.stringify(main)}
          </main>
        </div>
        <footer className="bg-white p-2 border-2 border-white rounded-[8px]">
          {JSON.stringify(footer)}
        </footer>
        <DebugView data={debug}></DebugView>
      </div>
    </>
  );
};

export default MainLayout;
