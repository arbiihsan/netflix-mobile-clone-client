const Redis = require("ioredis");
const redis = new Redis({
  port: 10674,
  host: "redis-10674.c292.ap-southeast-1-1.ec2.cloud.redislabs.com",
  password: "TBvnxhcuIAIdhQXHfFWBtS7T4rJfycXk",
});

module.exports = redis;
