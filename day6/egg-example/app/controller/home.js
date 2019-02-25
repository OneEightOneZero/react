'use strict';

const Controller = require('egg').Controller;
class HomeController extends Controller {
  async index() {
    // 今日头条
    // context
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }
  async news() {
    // 今日头条
    const { ctx } = this;
    const {
      data,
    } = await ctx.curl('https://m.toutiao.com/list/?tag=video&ac=wap&count=20&format=json_raw&as=A1457C764A41F74&cp=5C6AC19F07943E1&min_behot_time=0&_signature=1Y7F0AAAieymeM-.Mi2uANWOxc&i=', {
      dataType: 'json',
    });
    ctx.body = data;
  }
  async weather() {
    // 今日头条
    // context
    const { ctx } = this;
    const {
      data,
    } = await ctx.curl('https://m.toutiao.com/list/?tag=video&ac=wap&count=20&format=json_raw&as=A1457C764A41F74&cp=5C6AC19F07943E1&min_behot_time=0&_signature=1Y7F0AAAieymeM-.Mi2uANWOxc&i=', {
      dataType: 'json',
    });
    console.log(data);
    ctx.body = data;
  }
}

module.exports = HomeController;
