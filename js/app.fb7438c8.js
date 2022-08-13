(function(){"use strict";var e={1877:function(e,t,i){var n=i(6369),r=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("h1",[e._v("Receitas")]),t("button",{staticClass:"add-btn btn",on:{click:e.show}},[e._v("Adicionar receita")]),e.recipe?t("RecipeList"):e._e(),t("transition",[e.isActive?t("section",{staticClass:"add-recipes"},[t("h2",[e._v("Adicionar nova receita")]),t("AddRecipeForm")],1):e._e()])],1)},s=[],o=function(){var e=this,t=e._self._c;return t("section",{staticClass:"recipes-list"},[t("ul",{staticClass:"recipe"},e._l(e.recipe,(function(i,n){return t("li",{key:n},[t("h3",[e._v(e._s(i.title))]),t("p",[e._v(e._s(e.shorten(i.description)))]),t("router-link",{attrs:{to:`/recipe/${i.slug}`},nativeOn:{click:function(t){e.viewRecipe=!0}}},[t("button",{staticClass:"btn"},[e._v("ver receita")])])],1)})),0),t("transition",[e.viewRecipe?t("router-view",[t("RecipePage")],1):e._e()],1)],1)},c=[],a=function(){var e=this,t=e._self._c;return t("section",{staticClass:"recipe-modal"},[t("div",{staticClass:"recipe-info"},[t("router-link",{staticClass:"close",attrs:{to:"/"}},[t("button",{staticClass:"btn"},[e._v("voltar")])]),t("h1",[e._v(e._s(e.recipe[0].title))]),t("p",[e._v(e._s(e.recipe[0].description))]),""!=e.recipe[0].ingredients?t("div",{staticClass:"ingredients"},[t("h2",[e._v("ingredientes")]),t("ul",e._l(e.recipe[0].ingredients,(function(i,n){return t("li",{key:n},[e._v(" "+e._s(`${n+1} - ${i}`)+" ")])})),0)]):e._e(),""!=e.recipe[0].methods?t("div",{staticClass:"methods"},[t("h2",[e._v("modo de preparo")]),t("ul",e._l(e.recipe[0].methods,(function(i,n){return t("li",{key:n},[e._v(" "+e._s(`${n+1} - ${i}`)+" ")])})),0)]):e._e()],1)])},l=[],u={name:"RecipePage",computed:{recipe(){return this.$store.state.recipe.filter((e=>e.slug===this.$route.params.slug))}}},p=u,d=i(1001),v=(0,d.Z)(p,a,l,!1,null,"1bd76e76",null),m=v.exports,h={name:"RecipeList",components:{RecipePage:m},data(){return{viewRecipe:!1}},methods:{shorten(e){return e.length>75?`${e.slice(0,75)}...`:e}},computed:{recipe(){return this.$store.state.recipe}}},f=h,g=(0,d.Z)(f,o,c,!1,null,"1fc781e1",null),_=g.exports,w=function(){var e=this,t=e._self._c;return t("form",{staticClass:"form"},[t("label",{attrs:{for:"title"}},[e._v("Título")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.newRecipe.title,expression:"newRecipe.title"}],attrs:{type:"text",name:"title",id:"title"},domProps:{value:e.newRecipe.title},on:{input:function(t){t.target.composing||e.$set(e.newRecipe,"title",t.target.value)}}}),t("label",{attrs:{for:"description"}},[e._v("Descrição")]),t("textarea",{directives:[{name:"model",rawName:"v-model",value:e.newRecipe.description,expression:"newRecipe.description"}],attrs:{name:"description",id:"description",cols:"30",rows:"5"},domProps:{value:e.newRecipe.description},on:{input:function(t){t.target.composing||e.$set(e.newRecipe,"description",t.target.value)}}}),t("label",{attrs:{for:"ingredients"}},[e._v("Ingredientes")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.ingredientText,expression:"ingredientText"}],attrs:{type:"text",name:"ingredients",id:"ingredients"},domProps:{value:e.ingredientText},on:{input:function(t){t.target.composing||(e.ingredientText=t.target.value)}}}),e.newRecipe.ingredients?t("div",{staticClass:"ingredients-list"},[t("ul",e._l(e.newRecipe.ingredients,(function(i,n){return t("li",{key:n},[e._v(" "+e._s(`${n+1} - ${i}`)+" ")])})),0)]):e._e(),t("button",{staticClass:"btn",on:{click:function(t){return t.preventDefault(),e.addIngredient.apply(null,arguments)}}},[e._v(" Adicionar Ingrediente ")]),t("label",{attrs:{for:"method"}},[e._v("Instruções")]),t("textarea",{directives:[{name:"model",rawName:"v-model",value:e.methodText,expression:"methodText"}],attrs:{name:"method",id:"method",cols:"30",rows:"5"},domProps:{value:e.methodText},on:{input:function(t){t.target.composing||(e.methodText=t.target.value)}}}),e.newRecipe.methods?t("div",{staticClass:"methods-list"},[t("ul",e._l(e.newRecipe.methods,(function(i,n){return t("li",{key:n},[e._v(" "+e._s(`${n+1} - ${i}`)+" ")])})),0)]):e._e(),t("button",{staticClass:"btn",on:{click:function(t){return t.preventDefault(),e.addMethod.apply(null,arguments)}}},[e._v("Adicionar instrução")]),t("div",{staticClass:"buttons"},[t("button",{staticClass:"btn",on:{click:function(t){return t.preventDefault(),e.addRecipe.apply(null,arguments)}}},[e._v("Adicionar Receita")]),t("button",{staticClass:"btn",on:{click:function(t){t.preventDefault(),e.$store.state.isActive=!1}}},[e._v("Fechar")])])])},R=[],b={name:"AddRecipeForm",data(){return{ingredientText:"",methodText:"",newRecipe:{title:"",slug:"",description:"",ingredients:[],methods:[]}}},methods:{addIngredient(){this.ingredientText.length&&(this.newRecipe.ingredients.push(this.ingredientText),this.ingredientText="")},addMethod(){this.methodText.length&&(this.newRecipe.methods.push(this.methodText),this.methodText="")},addRecipe(){this.newRecipe.slug=this.newRecipe.title.normalize("NFD").replace(/[^a-zA-Z\s]/g,"").toLowerCase().replace(/\s/g,"-"),this.newRecipe.slug?(this.$store.commit("ADD_RECIPE",this.newRecipe),this.$store.state.isActive=!1,this.clearRecipe()):window.alert("Por favor informe o título da receita.")},clearRecipe(){this.newRecipe={title:"",slug:"",description:"",ingredients:[],methods:[]}}}},x=b,C=(0,d.Z)(x,w,R,!1,null,"4cfc4021",null),T=C.exports,A={name:"TheApp",components:{RecipeList:_,AddRecipeForm:T},methods:{show(){this.$store.commit("SHOW_ADD_RECIPE_FORM")}},computed:{recipe(){return this.$store.state.recipe},isActive(){return this.$store.state.isActive}},created(){this.$store.commit("START")}},$=A,y=(0,d.Z)($,r,s,!1,null,null,null),P=y.exports,k=i(2631);n.ZP.use(k.Z);const O=[{path:"/recipe/:slug",name:"recipe-page",component:m}],D=new k.Z({mode:"history",base:"/recipe-repo/",routes:O});var Z=D,I=i(3822);n.ZP.use(I.ZP);var S=new I.ZP.Store({state:{recipe:[],isActive:!1},getters:{},mutations:{ADD_RECIPE(e,t){e.recipe.unshift(t),console.log(t),localStorage.setItem("recipes",JSON.stringify(e.recipe))},START(e){const t=JSON.parse(localStorage.getItem("recipes"));if(t)try{e.recipe.push(...t)}catch(i){localStorage.removeItem("recipes")}},SHOW_ADD_RECIPE_FORM(e){e.isActive=!e.isActive}},actions:{},modules:{}});n.ZP.config.productionTip=!1,new n.ZP({router:Z,store:S,render:e=>e(P)}).$mount("#app")}},t={};function i(n){var r=t[n];if(void 0!==r)return r.exports;var s=t[n]={exports:{}};return e[n](s,s.exports,i),s.exports}i.m=e,function(){var e=[];i.O=function(t,n,r,s){if(!n){var o=1/0;for(u=0;u<e.length;u++){n=e[u][0],r=e[u][1],s=e[u][2];for(var c=!0,a=0;a<n.length;a++)(!1&s||o>=s)&&Object.keys(i.O).every((function(e){return i.O[e](n[a])}))?n.splice(a--,1):(c=!1,s<o&&(o=s));if(c){e.splice(u--,1);var l=r();void 0!==l&&(t=l)}}return t}s=s||0;for(var u=e.length;u>0&&e[u-1][2]>s;u--)e[u]=e[u-1];e[u]=[n,r,s]}}(),function(){i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,{a:t}),t}}(),function(){i.d=function(e,t){for(var n in t)i.o(t,n)&&!i.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};i.O.j=function(t){return 0===e[t]};var t=function(t,n){var r,s,o=n[0],c=n[1],a=n[2],l=0;if(o.some((function(t){return 0!==e[t]}))){for(r in c)i.o(c,r)&&(i.m[r]=c[r]);if(a)var u=a(i)}for(t&&t(n);l<o.length;l++)s=o[l],i.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return i.O(u)},n=self["webpackChunkrecipe_app"]=self["webpackChunkrecipe_app"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=i.O(void 0,[998],(function(){return i(1877)}));n=i.O(n)})();
//# sourceMappingURL=app.fb7438c8.js.map