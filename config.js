require('dotenv').config()

module.exports = {
  deployments: {
    netId3: {
      pbtc: {
        instanceAddress: {
          // 0.2 ETH was deployed for each instance into the RelayHub
          0.001: '0xb5c512E013c1f17a5ed157c557c6891558f1a719',
          0.01: '0x0bD3D556707bEFe41C6215Dc8bf06D81616D6112',
          0.1: '0x731a0e7c35dC9b7002be432770F78aF99f2FAf02',
          1: undefined,
          10: undefined,
          100: undefined
        },
        tokenAddress: '0xEB770B1883Dcce11781649E8c4F1ac5F4B40C978',
        symbol: 'pBTC',
        decimals: 18
      }
    }
  }
}
