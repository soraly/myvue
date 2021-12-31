var compiler = require('vue-template-compiler')

//_c:createElement _v:createTextVNode _s:toString
//模板插值
var template = '<div>{{name}}</div>';
//with(this){return _c('div',[_v(_s(name))])}

//表达式
template1 = '<div>{{active ? "actived":"notactive"}}</div>';
//with(this){return _c('div',[_v(_s(active ? "actived":"notactive"))])}

//属性和动态属性
template2 = '<div :id="myid">hello，xiang</div>';
//with(this){return _c('div',{attrs:{"id":myid}},[_v("hello，xiang")])}

//条件
template3 = '<div> <span v-if="mark">i am true</span><span v-else>我是额外的</span> </div>'
//with(this){return _c('div',[(mark)?_c('span',[_v("i am true")]):_c('span',[_v("我是额外的")])])}

//循环
template4 = `<div>
                <ul><li v-for="item in list">{{item.name}}</li></ul>
            </div>` 
//with(this){return _c('div',[_c('ul',_l((list),function(item){return _c('li',[_v(_s(item.name))])}),0)])}
//_l 是 renderList

//函数
template5 = `<button @click="test" id="mybtn">点击</button>`;
//with(this){return _c('button',{attrs:{"id":"mybtn"},on:{"click":test}},[_v("点击")])}

//v-model
template6 = `<input id="myInput"  v-model='myvalue'}>`;
/*with(this){return _c('input',{directives:[{name:"model",rawName:"v-model",value:
(myvalue),expression:"myvalue"}],attrs:{"id":"myInput","}":""},domProps:{"value"
:(myvalue)},on:{"input":function($event){if($event.target.composing)return;myval
ue=$event.target.value}}})}*/

//编译
var res = compiler.compile(template6)
console.log(res.render);

return;
vm._c = (a, b, c, d) => createElement(vm, a, b, c, d, false)

function installRenderHelpers (target) {
    target._o = markOnce;
    target._n = toNumber;
    target._s = toString;
    target._l = renderList;
    target._t = renderSlot;
    target._q = looseEqual;
    target._i = looseIndexOf;
    target._m = renderStatic;
    target._f = resolveFilter;
    target._k = checkKeyCodes;
    target._b = bindObjectProps;
    target._v = createTextVNode;
    target._e = createEmptyVNode;
    target._u = resolveScopedSlots;
    target._g = bindObjectListeners;
    target._d = bindDynamicKeys;
    target._p = prependModifier;
  }