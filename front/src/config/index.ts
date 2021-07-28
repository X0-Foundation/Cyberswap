import BigNumber from 'bignumber.js/bignumber'

BigNumber.config({
  EXPONENTIAL_AT: 1000,
  DECIMAL_PLACES: 80,
})

export const CAKE_PER_BLOCK = new BigNumber(200)
export const BLOCKS_PER_YEAR = new BigNumber(31536000)
export const FANTOM_BLOCK_TIME = 1
export const CAKE_POOL_PID = 3
export const BASE_URL = 'https://thexdao.com'
export const BASE_EXCHANGE_URL = 'https://swap.thexdao.com'
export const BASE_ADD_LIQUIDITY_URL = `${BASE_EXCHANGE_URL}/#/add`
export const BASE_LIQUIDITY_POOL_URL = `${BASE_EXCHANGE_URL}/#/pool`
export const LOTTERY_MAX_NUMBER_OF_TICKETS = 50
export const LOTTERY_TICKET_PRICE = 1
