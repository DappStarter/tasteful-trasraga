require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner argue tackle skull guard render remind mixture gesture oppose obscure soft'; 
let testAccounts = [
"0x07b47b1667a025d43bdcd0c671737e1b1f12c62fb902cf7cdaa85f0965e55c3d",
"0x0715f785db758aba33ce33ccccfdf283e5057230bde280f338ebaa9250d0ebc8",
"0x6ae52209ef3d4dd417a30f925bf5364e0d26687213066867f129e7e1ed10aa04",
"0x58ac6bc89d684cf40b9fa744c072bb968db7717ed0c010df029cd9c237c49454",
"0x7e7ba8ead61e8c8e0f4b1b4de65d95900ee545d74f680b7aa515ef7a41c128e3",
"0x3ba0627ddd1901281b929571d181f8a8485494fc160245cf1e507cd8140bfbd9",
"0x19601f0ef95a54176f813dcacb29347f337710561b7c293bd366da6dd6fd3478",
"0x6b7f4240e65aef924541057ab98b29e0e50b32787e67e1213eb765cbdc2ef4ed",
"0xa4ae8b90fc22235a0078e28c72bcfa46667cde3ceef576ba5250003993fed345",
"0x4aba38653db28d4a04b09030c20b915d764fb606c50e3dbe8d27c0950c879367"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

