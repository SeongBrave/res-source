/**
 * 作者 冯浩
 * 说明 在数字类型上加了自己实现的四舍五入方法
 * @param num_digits 为大于等于0的整数,如果输入小数则丢弃小数部分,保留整数部分,如果输入非数字或负数则视为0
 * @param upOrDown (boolean) 入或舍,当0----四舍五入,1----入,2----舍,不传默认四舍五入.
 * @returns 返回四舍五入后的结果
 */
Number.prototype.toFixedByEme = function (num_digits,upOrDown) {
  var result, temNumString, suffix, i,baseNum;
  isNaN(num_digits) && (num_digits = 0);
  num_digits = parseInt(num_digits);
  num_digits < 0 && (num_digits = 0);
  baseNum = Math.pow(10, num_digits);
  if(upOrDown==2) {
    temNumString = (emeFn.divide(Math.floor(emeFn.multiply(this,baseNum)),baseNum)).toString();
  } else if(upOrDown == 1) {
    temNumString = (emeFn.divide(Math.ceil(emeFn.multiply(this , baseNum)), baseNum)).toString();
  } else {
    temNumString = (emeFn.divide(Math.round(emeFn.multiply(this , baseNum)) , baseNum)).toString();
  }
  if (temNumString.indexOf('.') == -1) {//没小数的情况
    num_digits == 0 ? suffix = [] : suffix = ['.'];
    for (i = 0; i < num_digits; i++) {
      suffix.push('0');
    }
    result = [temNumString, suffix.join('')].join('');
  } else {//有小数和要求位数不同补全的情况
    suffix = [];
    var splitObj = temNumString.split('.');
    var len = splitObj[1].length;
    for (i = 0; i < num_digits - len; i++) {
      suffix.push('0');
    }
    result = [temNumString, suffix.join('')].join('');
  }
  return result;
}

var emeFn = {
  /**
   * 返回以千分位分割,保留两位小数格式的货币格式
   * @param num 将要格式化的数字
   * @param prefix 货币前缀
   * @param split 用什么分割
   * @param num_digits 保留几位小数
   */
  formatCurrency: function(num, prefix, split, num_digits) {
    if (isNaN(num)) return null;
    return [prefix || '', parseFloat(num || 0).toFixedByEme(num_digits || 2).toString().replace(/\B(?=(\d{3})+(?!\d)\.)/g, (split === undefined ? "," : split))].join("");
  },
  /**
   * 减法运算 arg1-arg2
   * @param arg1 this 被减数
   * @param arg2 减数
   * @returns {string}运算结果
   * @author 冯浩
   * @create date 2016/04/19
   */
  subtract: function(arg1, arg2) {
    var r1, r2, m, n;
    try {
      r1 = arg1.toString().split(".")[1].length;
    } catch (e) {
      r1 = 0;
    }
    try {
      r2 = arg2.toString().split(".")[1].length;
    } catch (e) {
      r2 = 0;
    }
    m = Math.pow(10, Math.max(r1, r2));
    //last modify by deeka
    //动态控制精度长度
    n = (r1 >= r2) ? r1 : r2;
    return ((arg1 * m - arg2 * m) / m).toFixed(n);
  },
  /**
   * 除法运算 arg1÷arg2
   * @param arg1 被除数
   * @param arg2 除数
   * @returns {number}运算结果
   * @author 冯浩
   * @create date 2016/04/19
   */
  divide: function(arg1, arg2) {
    var t1 = 0,
      t2 = 0,
      r1, r2, m;
    try {
      t1 = arg1.toString().split(".")[1].length;
    } catch (e) {}
    try {
      t2 = arg2.toString().split(".")[1].length;
    } catch (e) {}
    m = t2 - t1 > 0 ? t2 : t1;
    return ((arg1 * Math.pow(10, m)) / (arg2 * Math.pow(10, m)));
  },
  /**
   * 乘法运算 arg1*arg2
   * @param arg1
   * @param arg2
   * @returns {number}运算结果
   * @author 冯浩
   * @create date 2016/04/19
   */
  multiply: function(arg1, arg2) {
    var m = 0,
      s1 = arg1.toString(),
      s2 = arg2.toString();
    try {
      m += s1.split(".")[1].length;
    } catch (e) {}
    try {
      m += s2.split(".")[1].length;
    } catch (e) {}
    return Number(s1.replace(".", "")) * Number(s2.replace(".", "")) / Math.pow(10, m);
  },
  /**
   * 加法运算 arg1+arg2
   * @param arg1
   * @param arg2
   * @returns {number}运算结果
   * @author 冯浩
   * @create date 2016/04/19
   */
  add: function(arg1, arg2) {
    var r1, r2, m;
    try {
      r1 = arg1.toString().split(".")[1].length;
    } catch (e) {
      r1 = 0;
    }
    try {
      r2 = arg2.toString().split(".")[1].length;
    } catch (e) {
      r2 = 0;
    }
    m = Math.pow(10, Math.max(r1, r2));
    return (arg1 * m + arg2 * m) / m;
  }
}
