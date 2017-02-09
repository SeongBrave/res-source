// Validation errors messages for Parsley
// Load this after Parsley

Parsley.addMessages('zh-cn', {
  defaultMessage: "输入错误",
  type: {
    email:        "邮箱错误",
    url:          "链接无效",
    number:       "数字错误",
    integer:      "请输入整数",
    digits:       "请输入号码",
    alphanum:     "请输入字母或数字"
  },
  notblank:       "不能填写空格",
  required:       "必须填写",
  pattern:        "格式不正确",
  min:            "输入值请大于或等于 %s",
  max:            "输入值请小于或等于 %s",
  range:          "输入值应该在 %s 到 %s 之间",
  minlength:      "不能少于 %s 个字",
  maxlength:      "不能多于 %s 个字",
  length:         "只能输入 %s 到 %s 个字",
  mincheck:       "最少选择 %s 项",
  maxcheck:       "最多选择 %s 项",
  check:          "只能选择 %s 到 %s 项",
  equalto:        "这两项必须相同"
});

Parsley.setLocale('zh-cn');
