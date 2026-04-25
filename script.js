async function getTx() {
  const address = document.getElementById("address").value;
  const result = document.getElementById("result");

  result.innerText = "Loading...";

  try {
    const res = await fetch(
      `https://api.basescan.org/api?module=account&action=txlist&address=${address}&startblock=0&endblock=99999999&sort=desc`
    );

    const data = await res.json();

    result.innerText = JSON.stringify(data, null, 2);
  } catch (err) {
    result.innerText = "Error";
  }
}