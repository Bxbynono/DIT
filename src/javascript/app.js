// App = {
//     web3Provider: null,
//     contracts: {},
//     init: () => {
//         // Initialise web3 and set the provider to the testRPC.
//         if (!typeof web3 !== 'undefined') {
//             App.web3Provider = window.ethereum;
//             web3 = new Web3(window.ethereum);
//         } else {
//             // set the provider you want from Web3.providers
//             App.web3Provider = new Web3.providers.HttpProvider('http://127.0.0.1:7545');
//             web3 = new Web3(App.web3Provider);
//             //Next, we load the contracts
//         }
//         return App.initContract();
//     },
//     initContract: () => {
//         $.getJSON('NonoToken.json', (data) => {
//             var MyTokenArtifact = data;
//             App.contracts.MyToken = TruffleContract(MyTokenArtifact);
//             // Set the provider for our contract.
//             App.contracts.MyToken.setProvider(App.web3Provider);
//             // Use our contract to retrieve and mark the adopted pets.
//             return App.getBalances();
//         });
//         //Next, we bind the event handlers of html components
//         return App.bindEvents();
//     },
//     bindEvents: () => {
//         $(document).on('click', '#transferButton', App.handleTransfer);
//     },
//     getBalances: () => {
//         var myTokenInstance;
//         /*Retrieve all the accounts that is currently connected
//         to the blockchain*/
//         web3.eth.getAccounts((error, accounts) => {
//             if (error) console.log(error);
//             //Use the first account
//             var account = accounts[0];
//             //Display the wallet address in the place holder
//             $('#MyTokenWallet').text(account)
//             //Get the reference of the deployed token in the blockchain
//             App.contracts.MyToken.deployed().then((instance) => {
//                 myTokenInstance = instance;
//                 //call the balanceOf the token of an account
//                 return myTokenInstance.balanceOf(account);
//             }).then((result) => {
//                 balance = result.toString();
//                 //Display the balance in the place holder
//                 $('#MyTokenBalance').text(balance);
//             }).catch((err) => {
//                 console.log(err.message);
//             });
//         });
//     },
//     handleTransfer: (event) => {
//         event.preventDefault();
//         //Retrieve the values from the input box
//         var amount = parseInt($('#MyTokenTransferAmount').val());
//         var toAddress = $('#MyTokenTransferAddress').val();
//         console.log('Transfer ' + amount + ' token to ' + toAddress);
//         var myTokenInstance;
//         //Get the accounts
//         web3.eth.getAccounts(function (error, accounts) {
//             if (error) {
//                 console.log(error);
//             }
//             var account = accounts[0];
//             App.contracts.MyToken.deployed().then(function (instance) {
//                 myTokenInstance = instance;
//                 //call the contract transfer method to execute the transfer
//                 return myTokenInstance.transfer(toAddress, amount, { from: account, gas: 100000 });
//             }).then(function (result) {
//                 alert('Transfer Successful!');
//                 resetform();
//                 return App.getBalances();
//             }).catch(function (err) {
//                 console.log(err.message);
//             });
//         });
//     },
// }
// function resetform() {
//     document.getElementById("MyTokenTransferAddress").value = "";
//     document.getElementById("MyTokenTransferAmount").value = "";
// }
// // Web page loaded event handler
// $(() => {
//     $(window).load(() => {
//         App.init();
//     });
// });


const Content_LIST_ADDRESS = "0x68AB97e5C52b97AdA384E2c73E4c7229A2092f0f"
const Content_LIST_ABI = [
  {
    "constant": true,
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "ideas",
    "outputs": [
      {
        "internalType": "string",
        "name": "name",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "email",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "location",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "topic",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "description",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "budget",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "owner",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "string",
        "name": "_name",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_email",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_location",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_topic",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_description",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "_budget",
        "type": "uint256"
      }
    ],
    "name": "submitIdea",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "getIdeaCount",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }
];
var accounts;
var contract;
window.addEventListener("load", async () => {
  if (typeof window.ethereum !== 'undefined') {
    window.web3 = new Web3(window.ethereum);
    try {
      await window.ethereum.enable();
    } catch (error) {
      console.error("User denied account access");
    }
  } else {
    console.error("Web3 provider not found. Consider installing MetaMask.");
  }
    accounts = await window.ethereum.request({ method: 'eth_accounts' });
    // console.log("as.,dn,amsnd,a")
    // alert("asl;dmlkamsdlk.m")
    // alert(accounts[0])
    

  contract = new window.web3.eth.Contract(Content_LIST_ABI, Content_LIST_ADDRESS);
});


document.getElementById("sumbitDid").addEventListener("click",async(e)=>{
  e.preventDefault()
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const location = document.getElementById("location").value;
  const ideaname = document.getElementById("idea-name").value;
  const description = document.getElementById("idea-description").value;
  const budget = document.getElementById("budget").value;
  console.log(name+email+location+ideaname+description+budget)
  try{
    const receipt = await contract.methods.submitIdea(name,email,location,ideaname,description,budget).send(({from : accounts[0]}))
    console.log(receipt)
    alert("successfully submitted")
    window.location.reload(true)
  }catch (err){
    console.log(err)
  }
})
