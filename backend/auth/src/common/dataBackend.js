const dataBackenUrl = process.env.DATA_BACKEND_URL;

const dataBackend = (db) => {
  const getData = async (collection) => {
    console.log("getData", collection);
    const response = await fetch(`${dataBackenUrl}api/v1/${db}/${collection}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();
    return data;
  };
  const getDataById = async (collection, id) => {
    console.log("getDataById", collection, id);
    const response = await fetch(
      `${dataBackenUrl}api/v1/${db}/${collection}/${id}`,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    );
    const data = await response.json();
    return data;
  };

  const setData = async (collection, data) => {
    console.log("setData", collection, data);
    const response = await fetch(`${dataBackenUrl}api/v1/${db}/${collection}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    const result = await response.json();
    return result;
  };
  return { getData, setData };
};

export default dataBackend;
