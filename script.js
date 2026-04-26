async function getTx() {
  const address = document.getElementById("address").value;
  const result = document.getElementById("result");

  // 🔥 LOADING
  result.innerText = "⏳ Loading transactions...";

  try {
    const res = await fetch(
      `https://api.basescan.org/api?module=account&action=txlist&address=${address}&startblock=0&endblock=99999999&sort=desc`
    );

    const data = await res.json();

    if (data.status === "1") {
      let output = "";

      data.result.slice(0,5).forEach(tx => {
        output += `
Hash: ${tx.hash}
From: ${tx.from}
To: ${tx.to}
Value: ${tx.value}
-------------------------
`;
      });

      result.innerText = output;
    } else {
      // 🔥 ERROR kalau tidak ada data
      result.innerText = "❌ No transactions found";
    }

  } catch (err) {
    // 🔥 ERROR kalau gagal fetch
    result.innerText = "❌ Failed to fetch data";
  }
}