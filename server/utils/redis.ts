// import {Redis} from 'ioredis'
// require('dotenv').config();

// const redisClient = () => {
//     if(process.env.REDIS_URL){
//         console.log(`Redis connected`)
//         return process.env.REDIS_URL;
//     }
//     throw new Error('Redis connection fail')
// }

// export const redis = new Redis(redisClient());

import { Redis } from '@upstash/redis'

const redis = new Redis({
  url: 'https://firm-bull-44495.upstash.io',
  token: 'Aa3PASQgYTlmMWIyNjAtMDIyNy00MzhmLTk2NGQtODdjODVlMzBiYjQ1YjRiNjI1ZGU1YjhhNDczY2E0MmZiNmEwODQzYzg1MGQ=',
})

await redis.set('foo', 'bar');
const data = await redis.get('foo');
