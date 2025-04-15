import { useState } from "react";

export const DebugView = ({ data }) => {
  const [activeTab, setActiveTab] = useState(Object.keys(data)[0]);
  const [debugWindow, setDebugWindow] = useState({
    show: false,
    x: 1090,
    y: 75,
  });

  return (
    <div
      style={{ top: debugWindow.y, left: debugWindow.x }}
      className={"fixed bg-white border-2 border-red-600 rounded-[8px]"}
    >
      <div
        onMouseDown={(e) => {
          // move debug window
          const startX = e.clientX;
          const startY = e.clientY;
          const startLeft = debugWindow.x;
          const startTop = debugWindow.y;
          const onMouseMove = (e) => {
            setDebugWindow((prev) => ({
              ...prev,
              x: startLeft + e.clientX - startX,
              y: startTop + e.clientY - startY,
            }));
          };
          const onMouseUp = () => {
            window.removeEventListener("mousemove", onMouseMove);
            window.removeEventListener("mouseup", onMouseUp);
          };
          window.addEventListener("mousemove", onMouseMove);
          window.addEventListener("mouseup", onMouseUp);
        }}
        className={
          "bg-gray-500 px-1 w-full text-right" +
          (debugWindow.show ? " rounded-t-[5px] " : " rounded-[5px] ")
        }
      >
        <div className="flex flex-row justify-between items-center gap-2 text-white text-right cursor-move">
          <div className="select-none">Debug</div>
          <div
            onClick={(e) => {
              setDebugWindow((prev) => ({
                ...prev,
                show: !prev.show,
              }));
            }}
            className="hover:text-red-600 text-2xl cursor-pointer select-none"
          >
            {debugWindow.show ? "−" : "+"}
          </div>
        </div>
      </div>
      {debugWindow.show && (
        <div>
          <div className="flex flex-row">
            {Object.keys(data).map((k) => {
              if (!k.includes("set"))
                return (
                  <div
                    className={
                      "bg-gray-300 hover:bg-gray-600 px-2 py-1 rounded-b text-white cursor-pointer" +
                      (activeTab === k ? " bg-gray-600" : "")
                    }
                    key={k}
                    onClick={() => setActiveTab(k)}
                  >
                    {k}
                  </div>
                );
            })}
          </div>
          <pre className="p-2 overflow-x-auto text-xs">
            {JSON.stringify(data[activeTab], null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
};
