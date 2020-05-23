require('dotenv').config()

module.exports = {
  deployments: {
    netId3: {
      pbtc: {
        instanceAddress: {
          '0.001': '0x59Bf15eC506892396095A50feb077021f39c27Dc',
          '0.01': '0xf5307f6680d335b1cae884b43d5b46e1b3671b30',
          '0.1': '0x758ab20c9a4ad3b609076e5f27b5665ed5b0c682',
        },
        tokenAddress: '0xEB770B1883Dcce11781649E8c4F1ac5F4B40C978',
        symbol: 'pBTC',
        decimals: 18
      }
    }
  }
}
