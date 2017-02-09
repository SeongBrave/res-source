/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(1)
	var __weex_style__ = __webpack_require__(2)
	var __weex_script__ = __webpack_require__(3)

	__weex_define__('@weex-component/cee04b027b743a283019e2af009c1bdb', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})

	__weex_bootstrap__('@weex-component/cee04b027b743a283019e2af009c1bdb',undefined,undefined)

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "style": {
	    "height": function () {return this.screenHeight}
	  },
	  "children": [
	    {
	      "type": "div",
	      "classList": [
	        "list-container"
	      ],
	      "children": [
	        {
	          "type": "list",
	          "children": [
	            {
	              "type": "cell",
	              "append": "tree",
	              "repeat": {
	                "expression": function () {return this.items},
	                "value": "item"
	              },
	              "children": [
	                {
	                  "type": "todolist_cell",
	                  "attr": {
	                    "item": function () {return this.item}
	                  }
	                }
	              ]
	            }
	          ]
	        }
	      ]
	    },
	    {
	      "type": "todolist_bottom"
	    },
	    {
	      "type": "add_dialog",
	      "shown": function () {return this.showDialog}
	    }
	  ]
	}

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = {
	  "list-container": {
	    "backgroundColor": "#FFE4C4",
	    "flex": 1
	  }
	}

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	var _stringify = __webpack_require__(4);

	var _stringify2 = _interopRequireDefault(_stringify);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	__webpack_require__(7);
	__webpack_require__(11);
	__webpack_require__(16);
	var modal = __weex_require__('@weex-module/modal');
	var storage = __weex_require__('@weex-module/storage');

	module.exports = {
	    data: function () {return {
	        platform: 'Web',
	        screenHeight: 0,
	        showDialog: false,
	        items: []
	    }},
	    init: function init() {},
	    created: function created() {
	        var config = this.$getConfig();
	        console.log((0, _stringify2.default)(config));
	        var env = config.env;
	        var screenHeight = env.deviceHeight;
	        this.screenHeight = screenHeight;
	        this.platform = env.platform;
	        if (this.platform && this.platform === 'Web') {} else {
	            this.screenHeight = screenHeight - 120;
	        }

	        var self = this;
	        storage.getItem('todolist_cache', function (e) {
	            var result = e.result;
	            if (result === 'success') {
	                var data = e.data;
	                self.items = JSON.parse(data);
	            } else {}
	        });

	        var self = this;
	        this.$on('bottom-add', function () {
	            self.showDialog = true;
	        });
	        this.$on('bottom-finish', function () {
	            for (var index in this.items) {
	                var item = this.items[index];
	                var check = item.check;
	                if (check) {
	                    item.finish = true;
	                    item.check = false;
	                }
	            }
	            storage.setItem('todolist_cache', (0, _stringify2.default)(this.items), function (e) {});
	        });
	        this.$on('bottom-delete', function () {
	            var tempArray = [];
	            for (var index in this.items) {
	                var item = this.items[index];
	                var check = item.check;
	                if (!check) {
	                    tempArray.push(item);
	                }
	            }
	            this.items = tempArray;

	            storage.setItem('todolist_cache', (0, _stringify2.default)(this.items), function (e) {});
	        });
	        this.$on('dialog-cancel', function () {
	            this.showDialog = false;
	        });
	        this.$on('dialog-ok', function (e) {
	            this.showDialog = false;
	            var detail = e.detail;
	            var title = detail.title;
	            var time = detail.time;
	            this.items.push({
	                title: title,
	                time: time,
	                check: false,
	                finish: false
	            });
	            storage.setItem('todolist_cache', (0, _stringify2.default)(this.items), function (e) {});
	        });
	    },
	    ready: function ready() {},
	    methods: {}

	};}
	/* generated by weex-loader */


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(5), __esModule: true };

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var core  = __webpack_require__(6)
	  , $JSON = core.JSON || (core.JSON = {stringify: JSON.stringify});
	module.exports = function stringify(it){ // eslint-disable-line no-unused-vars
	  return $JSON.stringify.apply($JSON, arguments);
	};

/***/ },
/* 6 */
/***/ function(module, exports) {

	var core = module.exports = {version: '2.4.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(8)
	var __weex_style__ = __webpack_require__(9)
	var __weex_script__ = __webpack_require__(10)

	__weex_define__('@weex-component/todolist_bottom', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})


/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "classList": [
	    "container"
	  ],
	  "children": [
	    {
	      "type": "text",
	      "classList": [
	        "text"
	      ],
	      "events": {
	        "click": "add"
	      },
	      "attr": {
	        "value": "新增"
	      }
	    },
	    {
	      "type": "text",
	      "classList": [
	        "text"
	      ],
	      "events": {
	        "click": "finish"
	      },
	      "attr": {
	        "value": "完成"
	      }
	    },
	    {
	      "type": "text",
	      "classList": [
	        "text"
	      ],
	      "events": {
	        "click": "delete"
	      },
	      "attr": {
	        "value": "删除"
	      }
	    }
	  ]
	}

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = {
	  "container": {
	    "backgroundColor": "#7FFFD4",
	    "height": 200,
	    "flexDirection": "row",
	    "alignItems": "center"
	  },
	  "text": {
	    "flex": 1,
	    "textAlign": "center",
	    "padding": 40
	  }
	}

/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	module.exports = {
	   data: function () {return {}},
	   methods: {
	      add: function add() {
	         this.$dispatch('bottom-add');
	      },
	      finish: function finish() {
	         this.$dispatch('bottom-finish');
	      },
	      delete: function _delete() {
	         this.$dispatch('bottom-delete');
	      }
	   }
	};}
	/* generated by weex-loader */


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(12)
	var __weex_style__ = __webpack_require__(13)
	var __weex_script__ = __webpack_require__(14)

	__weex_define__('@weex-component/todolist_cell', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})


/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "classList": [
	    "container"
	  ],
	  "children": [
	    {
	      "type": "image",
	      "attr": {
	        "src": function () {return this.picUrl}
	      },
	      "classList": [
	        "pic"
	      ],
	      "events": {
	        "click": "check"
	      }
	    },
	    {
	      "type": "text",
	      "classList": [
	        "title"
	      ],
	      "style": {
	        "textDecoration": function () {return this.textDecoration}
	      },
	      "attr": {
	        "value": function () {return this.item.title}
	      }
	    },
	    {
	      "type": "text",
	      "classList": [
	        "time"
	      ],
	      "attr": {
	        "value": function () {return this.item.time}
	      }
	    }
	  ]
	}

/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = {
	  "container": {
	    "backgroundColor": "#DCDCDC",
	    "height": 80,
	    "margin": 10,
	    "flexDirection": "row",
	    "alignItems": "center"
	  },
	  "pic": {
	    "width": 40,
	    "height": 40,
	    "marginLeft": 20
	  },
	  "title": {
	    "marginLeft": 20,
	    "flex": 1
	  },
	  "time": {
	    "marginRight": 20
	  }
	}

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	var icon = __webpack_require__(15);

	module.exports = {
	    data: function () {return {
	        item: []
	    }},
	    methods: {
	        check: function check() {
	            this.item.check = !this.item.check;
	        }
	    },
	    computed: {
	        picUrl: {
	            get: function get() {
	                if (this.item) {
	                    var check = this.item.check;
	                    if (check) {
	                        return icon.check;
	                    } else {
	                        return icon.nocheck;
	                    }
	                }
	            }
	        },
	        textDecoration: {
	            get: function get() {
	                if (this.item) {
	                    var finish = this.item.finish;
	                    if (finish) {
	                        return 'line-through';
	                    } else {
	                        return 'none';
	                    }
	                }
	            }
	        }

	    }
	};}
	/* generated by weex-loader */


/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = {
	     check: "http://p1.bpimg.com/567571/1a7a707567b04e4e.png",
	    nocheck : "http://p1.bpimg.com/567571/b3e63a0c308955f0.png"
	}

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(17)
	var __weex_style__ = __webpack_require__(18)
	var __weex_script__ = __webpack_require__(19)

	__weex_define__('@weex-component/add_dialog', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})


/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "classList": [
	    "container"
	  ],
	  "style": {
	    "height": function () {return this.screenHeight},
	    "backgroundColor": function () {return 'rgba(0, 0, 0,' + (this.opacity) + ')'}
	  },
	  "children": [
	    {
	      "type": "div",
	      "classList": [
	        "dialog_container"
	      ],
	      "children": [
	        {
	          "type": "text",
	          "classList": [
	            "title"
	          ],
	          "attr": {
	            "value": "新增事件"
	          }
	        },
	        {
	          "type": "input",
	          "classList": [
	            "title-input"
	          ],
	          "attr": {
	            "placeholder": "请输入标题",
	            "type": "text"
	          },
	          "events": {
	            "input": "oninputForTitle"
	          }
	        },
	        {
	          "type": "input",
	          "classList": [
	            "time-input"
	          ],
	          "attr": {
	            "placeholder": "请输入时间",
	            "type": "text"
	          },
	          "events": {
	            "input": "oninputForTime"
	          }
	        },
	        {
	          "type": "div",
	          "classList": [
	            "bottom"
	          ],
	          "children": [
	            {
	              "type": "text",
	              "classList": [
	                "cancel"
	              ],
	              "events": {
	                "click": "cancel"
	              },
	              "attr": {
	                "value": "取消"
	              }
	            },
	            {
	              "type": "text",
	              "classList": [
	                "ok"
	              ],
	              "events": {
	                "click": "ok"
	              },
	              "attr": {
	                "value": "确定"
	              }
	            }
	          ]
	        }
	      ]
	    }
	  ]
	}

/***/ },
/* 18 */
/***/ function(module, exports) {

	module.exports = {
	  "container": {
	    "backgroundColor": "#808080",
	    "position": "fixed",
	    "width": 750,
	    "top": 0,
	    "left": 0,
	    "alignItems": "center",
	    "justifyContent": "center"
	  },
	  "dialog_container": {
	    "backgroundColor": "#FFFFFF",
	    "width": 600,
	    "height": 310,
	    "alignItems": "center"
	  },
	  "title": {
	    "marginTop": 20,
	    "fontSize": 40
	  },
	  "title-input": {
	    "marginTop": 20,
	    "height": 60,
	    "width": 500,
	    "fontSize": 25,
	    "borderWidth": 1
	  },
	  "time-input": {
	    "marginTop": 20,
	    "height": 60,
	    "width": 500,
	    "fontSize": 25,
	    "borderWidth": 1
	  },
	  "bottom": {
	    "marginTop": 30,
	    "flexDirection": "row",
	    "width": 400
	  },
	  "cancel": {
	    "textAlign": "center",
	    "flex": 1
	  },
	  "ok": {
	    "textAlign": "center",
	    "flex": 1
	  }
	}

/***/ },
/* 19 */
/***/ function(module, exports) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	module.exports = {
	    data: function () {return {
	        screenHeight: 0,
	        opacity: 0.5,
	        title: '',
	        time: ''
	    }},
	    created: function created() {
	        var config = this.$getConfig();
	        var env = config.env;
	        var screenHeight = env.deviceHeight;
	        this.screenHeight = screenHeight;
	    },
	    methods: {
	        cancel: function cancel() {
	            this.$dispatch('dialog-cancel');
	        },
	        ok: function ok() {
	            this.$dispatch('dialog-ok', {
	                title: this.title,
	                time: this.time
	            });
	        },
	        oninputForTitle: function oninputForTitle(event) {
	            this.title = event.value;
	        },
	        oninputForTime: function oninputForTime(event) {
	            this.time = event.value;
	        }
	    }
	};}
	/* generated by weex-loader */


/***/ }
/******/ ]);