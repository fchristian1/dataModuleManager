import { useContext } from "react";
import { DataContext } from "../../DataContext";
import { RemoteModuleLoader } from "../RemoteModuleLoader";

export const Main = ({ data }) => {
  const dataContext = useContext(DataContext);
  return (
    data &&
    Object.keys(data).map((key, ki) => {
      return Object.keys(data[key]).map((key2, ki2) => {
        if (key2 == "module") {
          const module = `${data[key][key2].name}_V${data[key][
            key2
          ].version.replaceAll(".", "_")}`;
          return (
            <RemoteModuleLoader
              key={ki + ki2}
              module={module}
            ></RemoteModuleLoader>
          );
        }
      });
    })
  );
};
