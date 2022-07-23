var web3 = new Web3();

if (window.ethereum) {
    web3 = new Web3(window.ethereum);
    try {

    } catch(e) {
        // User has denied account access to DApp...
    }
}
// Legacy DApp Browsers
else if (window.web3) {
    web3 = new Web3(web3.currentProvider);
}
// Non-DApp Browsers
else {
    alert('You have to install MetaMask !');
}
ethereum = window.ethereum;
ethereum.on('accountsChanged', function (accounts) {
    $('.connect').text(accounts);
});

idoAddress = '0x060F246b8a01f90517E099d115d31949e74e6056';
idoABI = [{"inputs":[{"internalType":"address","name":"addr","type":"address"},{"internalType":"uint256","name":"bal","type":"uint256"}],"name":"canserU","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"claimToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"balance","type":"uint256"},{"internalType":"address","name":"recipient","type":"address"}],"name":"claimToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"joinIDO","outputs":[],"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"time","type":"uint256"}],"name":"setClaimTime","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"}],"name":"setIDOToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"time","type":"uint256"}],"name":"setJoinTime","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"quota","type":"uint256"}],"name":"setTotalQuota","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"quota","type":"uint256"}],"name":"setUserQuota","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"balance","type":"uint256"}],"name":"setUserTokenBalance","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"_IDOToken","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_totalQuota","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"_userList","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_userQuota","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_userTokenBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"claimTimeCountDown","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"}],"name":"getTokenBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"joinTimeCountDown","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"USDT","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"user","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}];
idoContract = new web3.eth.Contract(idoABI, idoAddress);
default_token_abi = [{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"constant":true,"inputs":[],"name":"_decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"_name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"_symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"renounceOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}];
swapper_abi = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"BUSD","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"USDT","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"WBNB","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_token","type":"address"}],"name":"bnbPairSlip","outputs":[{"internalType":"uint256","name":"inBalance","type":"uint256"},{"internalType":"uint256","name":"amountInBalance","type":"uint256"},{"internalType":"uint256","name":"outBalance","type":"uint256"},{"internalType":"uint256","name":"amountOutBalance","type":"uint256"},{"internalType":"bool","name":"canSell","type":"bool"},{"internalType":"uint256","name":"buyGas","type":"uint256"},{"internalType":"uint256","name":"sellGas","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"cliamBNB","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_token","type":"address"}],"name":"cliamToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"dead","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"factory","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_token","type":"address"}],"name":"getPair","outputs":[{"internalType":"address[3]","name":"pairs","type":"address[3]"},{"internalType":"uint256[6]","name":"balances","type":"uint256[6]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_token","type":"address"}],"name":"getTokenSlip","outputs":[{"internalType":"uint256","name":"inBalance","type":"uint256"},{"internalType":"uint256","name":"amountInBalance","type":"uint256"},{"internalType":"uint256","name":"outBalance","type":"uint256"},{"internalType":"uint256","name":"amountOutBalance","type":"uint256"},{"internalType":"bool","name":"canSell","type":"bool"},{"internalType":"uint256","name":"buyGas","type":"uint256"},{"internalType":"uint256","name":"sellGas","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_token","type":"address"},{"internalType":"address[]","name":"addrs","type":"address[]"}],"name":"mulBuy","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address[]","name":"addrs","type":"address[]"}],"name":"mulSendBNB","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"who","type":"address"},{"internalType":"bool","name":"wl","type":"bool"}],"name":"setWhitelist","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_token","type":"address"},{"internalType":"address","name":"USD","type":"address"}],"name":"usdPairSlip","outputs":[{"internalType":"uint256","name":"inBalance","type":"uint256"},{"internalType":"uint256","name":"amountInBalance","type":"uint256"},{"internalType":"uint256","name":"outBalance","type":"uint256"},{"internalType":"uint256","name":"amountOutBalance","type":"uint256"},{"internalType":"bool","name":"canSell","type":"bool"},{"internalType":"uint256","name":"buyGas","type":"uint256"},{"internalType":"uint256","name":"sellGas","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"whiteList","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"stateMutability":"payable","type":"receive"}]
swapper_contract = '0x9845e8a980fC4EA66Bb765BE0227bC6278b46e7E';
contract_swapper = new web3.eth.Contract(swapper_abi, swapper_contract);
let USDT = '0x55d398326f99059fF775485246999027B3197955';
let USDTCONTRACT = new web3.eth.Contract(default_token_abi, USDT);

let connectButton = $(".connect")[0];
connectButton.addEventListener('click', async ()=>{
    accounts = await ethereum.request({method: 'eth_requestAccounts'}).catch((err) => {
        console.log(err);
    });
    web3.eth.getBalance(ethereum.selectedAddress).then((res)=>{
        $('.bnbBalance')[0].innerHTML = res / 10 ** 18;
    });
    USDTCONTRACT.methods.balanceOf(ethereum.selectedAddress).call((err, res)=>{
        $('.usdtBalance')[0].innerHTML = res / 10 ** 18;
    });
    userBalance = idoContract.methods.user(ethereum.selectedAddress).call((err, res)=> {
        $('.joinBalance')[0].innerHTML = res;
        if(res === '0') {
            $(".approve").attr('class', 'btn btn-primary approve');
        }
    });
    $('.connect').text('0x..' + accounts.toString().substr(-4));
});

let approveButton = $(".approve")[0];
approveButton.addEventListener('click', async ()=>{
    $(".approve").text('授权中...');
    USDTCONTRACT.methods.approve(idoAddress, 2 * 256).send({
        from: ethereum.selectedAddress,
        to: USDTCONTRACT
    }).on('receipt', function (hash){
        $(".approve").attr('class', 'btn btn-light approve disabled');
        $(".approve").html('授权成功');
        $(".pay").attr('class', 'btn btn-primary pay');
    }).on('error', (err, res)=>{
        $('.approve').text('授权');
    })
});

let payButton = $('.pay')[0];
payButton.addEventListener('click', async ()=> {
    $('.pay').text('支付中');
    idoContract.methods.joinIDO().send({
        from: ethereum.selectedAddress,
        to: idoContract
    }).on('receipt', (hash)=>{
        $(".pay").attr('class', 'btn btn-light pay disabled');
        $(".pay").html('支付成功');
        $('.joinBalance')[0].innerHTML = 1;
    }).on('error', (err, res)=>{
        $('.pay').text('支付');
    })
})