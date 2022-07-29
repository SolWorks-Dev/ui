export async function fetchSolStats(): Promise<any> {
  const res = await fetch('https://api.binance.com/api/v3/ticker/price?symbols=%5B%22SOLUSDT%22%5D');
  return await res.json();
}
