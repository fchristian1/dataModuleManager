import { useContext } from "react";
import { DataContext } from "../../DataContext";

export const Aside = ({ data }) => {
  const dataContext = useContext(DataContext);
  //   return <>{JSON.stringify(data)}</>;
  return Object.keys(data).map((key, ki) => {
    return (
      data[key] && (
        <div>
          <div>{data[key].title}</div>
          <ul
            key={ki}
            className={
              "flex flex-col gap-2 " +
                (data[key].title && data[key].title != "") && "ms-1"
            }
          >
            {data[key].data.map((item, i) => {
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
        </div>
      )
    );
  });
};
