'use strict';

const Controller = require('egg').Controller;
const db = require('../../utils/mongod.js');
class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }

  async info() {
    const { ctx } = this;
    ctx.body = 'eno, yao';
  }

  async find() {
    const { ctx } = this;
    ctx.response.append = 'Access-Control-Allow-Origin:*';
    const data = await db.find('students');
    console.log(data);
    const newData = data.map((item, index) => {
      item.key = index;
      return item;
    });
    ctx.body = {
      data: newData,
    };
  }
}

module.exports = HomeController;
