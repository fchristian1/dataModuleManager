export const sendDatatoUrl = async (url, method, data) => {
  const json = JSON.stringify(data);
  //console.log("json", json);
  const response = await fetch(url, {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
    body: json,
  });
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const responseData = await response.json();
  return responseData;
};
