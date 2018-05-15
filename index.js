/**
 * Pull up loading
 * 动态绑定, 解除绑定
 */

// window.onscroll = () => {
//     throttle(() => {
//         if (Math.abs(document.body.clientHeight - document.documentElement.clientHeight) <= (document.documentElement.scrollTop || document.body.scrollTop)) {
//             alert("滚到底部");
//         }
//     })
// }

;(function(global, factory) {
    /* Browser */
    global.UpLoad = factory();
})(this, (function() { 'use strict';
    /* cache status */
    var instance;

    function extend (to, _from) {
        for (var key in _from) {
          to[key] = _from[key];
        }
        return to
    }

    function throttle(method, context) {
        clearTimeout(method.tId);
        method.tId = setTimeout(() => {
            method.call(context)
        },100)
    }

    var CreateDiv = function(options) {
        this.$el = null;
        this.settings = {
            trigger: function() {}
        }
        this.init(options);
    }

    CreateDiv.prototype.init = function(options) {
        this.$el = document.querySelector(options.el)
        extend(this.settings, options)

        this.$el.onscroll = () => {
            this.bind()
        }
    }

    CreateDiv.prototype.bind = function() {

    }

    CreateDiv.prototype.unbind = function() {
        
    }
    
    return function(options) {
        if(!instance) {
            instance = new CreateDiv(options)
        }
        return instance;
    }
}));


let Up_one = new UpLoad({
    el: '#oUl',
    trigger: function() {
        
    }
});
