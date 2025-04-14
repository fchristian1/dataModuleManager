export const getUrlFromLink = (link, services) => {
  const { service, path } = link;

  const serviceObj = services.find((s) => s.name === service);
  if (!serviceObj) {
    console.error(`Service not found: ${service}`);
    return null;
  }
  const url = new URL(serviceObj.url);
  url.pathname = `/api/v1/${service}${path}`;
  return url.toString();
};
