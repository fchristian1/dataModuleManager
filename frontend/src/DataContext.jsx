import { createContext, use, useEffect, useState } from "react";
import { getUrlFromLink } from "./common/getUrlFromLink";

export const DataContext = createContext(null);

export const DataProvider = ({ children }) => {
  const [initData, setInitData] = useState(null);
  const [viewData, setViewData] = useState(null);
  const [viewLink, setViewLink] = useState(null);
  useEffect(() => {
    const getInitData = async () => {
      const response = await fetch("http://localhost:3000/api/v1/init_data");
      if (response.ok) {
        const data = await response.json();
        setInitData(data);
      } else {
        console.error("Failed to fetch init data");
      }
    };
    getInitData();
  }, []);
  useEffect(() => {
    setViewLink(initData?.startViewLink);
  }, [initData]);
  useEffect(() => {
    const getViewData = async () => {
      const url = getUrlFromLink(viewLink, initData.services);
      if (!url) {
        console.error("Invalid start view link");
        return;
      }
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        const data = await response.json();
        setViewData(data);
      } else {
        console.error("Failed to fetch view data");
      }
    };
    viewLink && getViewData();
  }, [viewLink]);

  return (
    <DataContext.Provider
      value={{
        initData,
        setInitData,
        viewData,
        setViewData,
        viewLink,
        setViewLink,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
