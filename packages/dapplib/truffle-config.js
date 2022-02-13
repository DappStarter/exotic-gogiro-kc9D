require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace sell tackle spot crazy recipe rural unfold include kangaroo army giggle'; 
let testAccounts = [
"0x95580fed369c6dcaf41ddc64fcf0b4875dd95067d85526299a1a668cc5644473",
"0xd92fdf2888ff6eb553fede3456311cefde04b1dc28cf8d61d4583036d81331f6",
"0x87fa69ce1413b5ba756a2ccc1ea0e82a94b9d07b841980bca26d2f7190f33119",
"0x8e790458e7c78f3d5a1a38aac205c4890b35fc61900bb7665894c371622827cc",
"0xa5d569200bdbc7dc70c0adbb9bb9d5cd41ba1b7c8a53f1f498fb4b0468c03903",
"0x9d210383f6c4f28f6648ef605892e18d1774c01d3a2084002ea7a6e22b5e8cf8",
"0x57a90d5a3561b95b0c9c5319a25aee13bf16aad0b8b4374636551f52616cb4bf",
"0xcb018baf76dd91bfd29981972cdbab196ecd3ea0b926bd438167ca1dfbcacc9d",
"0x5d1a4de5e411ff3d3baa37bd3325e192aa7fae5e6d7cc1d003635434ef8f2777",
"0x7fda3293712518405ed31bd6dedc7dead9eea14f3b942a5c878c2fc6c23d31ea"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

