export async function fetchSolStats(): Promise<any> {
  const res = await fetch('https://api.solscan.io/market?symbol=SOL');
  return await res.json();
}
