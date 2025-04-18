import { createContext, useEffect, useState } from "react";
import { getUrlFromLink } from "./common/getUrlFromLink";
import auth from "./common/auth.js";

export const DataContext = createContext(null);

export const DataProvider = ({ children }) => {
  const [loginStatus, setLoginStatus] = useState(false);
  const [userData, setUserData] = useState(null);
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
    let startViewLink;

    const { status, userdata } = auth.relogin();
    if (status) {
      setLoginStatus(status);
      setUserData(userdata);
      startViewLink = initData?.links?.startViewLink;
    } else {
      setLoginStatus(false);
      setUserData(null);
      startViewLink = initData?.links?.startViewLink;
    }

    setViewLink(startViewLink);
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
        loginStatus,
        setLoginStatus,
        userData,
        setUserData,
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
