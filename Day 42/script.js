
document.addEventListener('DOMContentLoaded',()=>{
    const url='https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,dogecoin&vs_currencies=usd&x_cg_demo_api_key=CG-gtX4UTJVDKD5B8hVRRT39M3U';

    const prices=()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>{
            document.getElementById('btcPrice').innerText=`${data.bitcoin.usd}`;
            document.getElementById('ethPrice').innerText=`${data.ethereum.usd}`;
            document.getElementById('dogePrice').innerText=`${data.dogecoin.usd}`;
        })
        .catch(error=>{
            console.log("Error while fetching data");
        })
    }

    setInterval(prices,10000);
    prices();
})