export async function fetchTpsStats(): Promise<any> {
  const res = await fetch('https://api.solscan.io/chaininfo');
  return await res.json();
}
