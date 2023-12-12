const config = require('./config')

const development = {
  host: '127.0.0.1',
  port : 3306,
  user: 'root',
  password: '',
  database: process.env.DATABASE ? process.env.DATABASE : 'test_voa_local'
}

const production = {
  host: '127.0.0.1',
  port : 3306,
  user: 'root',
  password: '',
  database: 'new_voa'
}

module.exports = config.env === "production" ? production : development