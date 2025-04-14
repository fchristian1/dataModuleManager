import { useContext } from "react";
import { DataContext } from "../../DataContext";

export const Nav = ({ data }) => {
  const dataContext = useContext(DataContext);
  return (
    <div className="flex flex-row justify-between gap-2">
      {data &&
        Object.keys(data).map((key, ki) => {
          return (
            data[key] && (
              <ul key={ki} className="flex flex-row gap-2">
                {data[key].map((item, i) => {
                  return (
                    <li key={i}>
                      <span
                        className={
                          " hover:text-amber-700 cursor-pointer " +
                          (item.active == true && "text-amber-500")
                        }
                        onClick={() => dataContext.setViewLink(item.link)}
                      >
                        {item.name}
                      </span>
                    </li>
                  );
                })}
              </ul>
            )
          );
        })}
    </div>
  );
};
