require('dotenv').config()

module.exports = {
  deployments: {
    netId3: {
      pbtc: {
        instanceAddress: {
          '0.001': '0x8425EBC05AC74338838A0D99Db495906dF2eAe22',
          '0.01': '0x2f2d3E612F3341eCDA859f2eB51b3a51b8eB62BB',
          '0.1': '0xE9CaA191fc0D5E0C7fEE83b39F008Ba89b75df13',
        },
        tokenAddress: '0xEB770B1883Dcce11781649E8c4F1ac5F4B40C978',
        symbol: 'pBTC',
        decimals: 18
      }
    }
  }
}
