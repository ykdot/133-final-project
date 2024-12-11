
// fetch quote information from zenquotes api
export async function getQuote() {
  const quote_api_url = 'https://zenquotes.io/api/quotes/';
  const response = await fetch(quote_api_url);
  var data = await response.json();
  return data;
}