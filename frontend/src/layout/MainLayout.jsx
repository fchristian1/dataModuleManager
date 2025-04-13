const MainLayout = ({ nav, aside, main, footer }) => {
  return (
    <>
      <div className="flex flex-col gap-2 bg-amber-200 p-2 h-screen">
        <nav className="bg-white p-2 border-2 border-white rounded-[8px] w-full">
          {nav}
        </nav>
        <div className="flex flex-row gap-2 h-full">
          <aside className="bg-white p-2 border-2 border-white rounded-[8px]">
            {aside}
          </aside>
          <main className="bg-white p-2 border-2 border-white rounded-[8px] w-full">
            {main}
          </main>
        </div>
        <footer className="bg-white p-2 border-2 border-white rounded-[8px]">
          {footer}
        </footer>
      </div>
    </>
  );
};

export default MainLayout;
