export default function paramString(params: string) {
  const parsedParams = JSON.parse(params);
  let paramString = "?p=" + parsedParams.p;

  if (parsedParams.q) paramString += `&q=${parsedParams.q}`;
  if (parsedParams.sort) paramString += `&sort=${parsedParams.sort}&order=${parsedParams.order}`;
  if (parsedParams.filters) paramString += `&filters=${parsedParams.filters}`;

  return paramString;
}
