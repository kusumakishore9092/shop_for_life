'use strict';
class BaseConfig {
  constructor() {
    this.db = {
      url: 'mongodb://localhost:27017',
      dbname: 'score'
    }
  }
}

class LocalConfig extends BaseConfig{
  constructor() {
    super();
  }
}

class TestConfig extends BaseConfig {
  constructor() {
    super();
  }
}

class ProdConfig extends BaseConfig {
  constructor() {
    super();
  }
}

function getConfig() {
  switch(process.env.NODE_ENV) {
    case 'test':
      return new TestConfig()
      break;
    case 'prod':
      return new ProdConfig()
      break;
    default:
      return new BaseConfig()
  }
}

module.exports = getConfig();
