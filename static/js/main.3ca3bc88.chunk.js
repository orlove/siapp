(this.webpackJsonpsiapp=this.webpackJsonpsiapp||[]).push([[0],{115:function(e,t,n){e.exports=n.p+"static/media/home.09715b70.png"},189:function(e,t,n){e.exports=n(295)},281:function(e,t,n){},282:function(e,t,n){},283:function(e,t,n){},295:function(e,t,n){"use strict";n.r(t);n(190),n(216),n(218),n(219),n(221),n(222),n(223),n(224),n(225),n(226),n(227),n(228),n(230),n(231),n(232),n(233),n(234),n(235),n(236),n(237),n(238),n(239),n(241),n(242),n(243),n(244),n(245),n(246),n(247),n(248),n(249),n(250),n(251),n(252),n(253),n(254),n(255),n(256),n(257),n(258);var a=n(0),r=n.n(a),l=n(35),o=n.n(l),c=n(21),i=n.n(c),s=n(64),u=n.n(s),m=n(102),p=n(27),d=n(28),h=n(30),f=n(29),b=n(128),v=n.n(b),E=n(3),g=(n(278),n(131)),O={home:{begin:function(e,t){return O.post({method:"home/begin",body:e,handler:t})},level:function(e,t){return O.request({method:"home/level?uid="+e,handler:t})},confirm:function(e,t,n,a){var r={uid:e};return t&&(r.lat=t,r.long=n),O.request({method:"home/confirm?"+Object.entries(r).map((function(e){var t=Object(g.a)(e,2),n=t[0],a=t[1];return"".concat(n,"=").concat(a)})).join("&"),handler:a})}}},y={rating:{global:function(e){return y.request({method:"rating/global",handler:e})}}},k="https://rest-news.hozya.ru",j={request:function(e){var t=e.method,n=e.params,a=e.tag,r=e.handler,l=e.options;return a&&fetch.abort(a),n=n?"?"+(n=Object.keys(n).map((function(e){return encodeURIComponent(e)+"="+encodeURIComponent(n[e])})).join("&")):"",fetch(k+"/"+t+n,l,a).then((function(e){return e.ok?e.json():(e.text().then((function(t){console.error(e.url,t.substr(-64),e)})),!1)})).then(r).catch((function(e){console.error(e)}))},post:function(e){var t=e.method,n=e.body,a=e.tag,r=e.handler,l=e.options;return a&&fetch.abort(a),l=Object.assign({method:"POST",body:JSON.stringify(n)},l||{}),fetch(k+"/"+t,l,a).then((function(e){return e.ok?e.json():(e.text().then((function(t){console.error(e.url,t.substr(-64),e)})),!1)})).then(r).catch((function(e){console.error(e)}))},abort:function(e){fetch.abort(e)}};[O,y].forEach((function(e){j=Object.assign(e,j)}));var C=j,_=n(23),M=function(e){return new Promise((function(t,n){t({type:"LEVEL_UPDATE",level:e})}))},U=function(e,t){return new Promise((function(n,a){n({type:"MODAL_OPEN",activeModal:e,modalParams:t})}))},P=function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(p.a)(this,n),(a=t.call(this,e)).state={},a}return Object(d.a)(n,[{key:"render",value:function(){return r.a.createElement(E.k,{id:this.props.id},r.a.createElement(E.n,{size:"large"}))}}]),n}(r.a.Component),w=Object(_.b)((function(e,t){return{}}))(P),L=n(115),A=n.n(L),N=(n(99),n(281),function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(p.a)(this,n),(a=t.call(this,e)).state={},a}return Object(d.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement(E.k,{id:this.props.id},r.a.createElement(E.l,null,r.a.createElement("b",null,"#"),r.a.createElement("b",null,"\u041b"),r.a.createElement("b",null,"\u0423"),r.a.createElement("b",null,"\u0427"),r.a.createElement("b",null,"\u0428"),r.a.createElement("b",null,"\u0415"),r.a.createElement("b",null,"\u0414"),r.a.createElement("b",null,"\u041e"),r.a.createElement("b",null,"\u041c"),r.a.createElement("b",null,"\u0410")),r.a.createElement(E.e,null,r.a.createElement("img",{className:"Home",src:A.a,alt:"\u0414\u043e\u043c"}),r.a.createElement(E.d,{className:"Explanation"},"\u0421\u0435\u0439\u0447\u0430\u0441 \u043e\u0447\u0435\u043d\u044c \u0432\u0430\u0436\u043d\u043e \u043d\u0430\u0445\u043e\u0434\u0438\u0442\u0441\u044f ",r.a.createElement("b",null,"\u0434\u043e\u043c\u0430"),". \u0414\u0430\u043d\u043d\u043e\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u043d\u0430\u0447\u0438\u0441\u043b\u044f\u0435\u0442 \u0431\u0430\u043b\u044b \u0437\u0430 \u043f\u0440\u043e\u0432\u0435\u0434\u0435\u043d\u043d\u043e\u0435 \u0432\u0440\u0435\u043c\u044f \u0434\u043e\u043c\u0430. \u0414\u0435\u043c\u043e\u043d\u0441\u0442\u0440\u0438\u0440\u0443\u0439\u0442\u0435 \u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0435 \u043f\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u0435 \u043b\u0438\u0447\u043d\u044b\u043c \u043f\u0440\u0438\u043c\u0435\u0440\u043e\u043c! \u041f\u043e\u0441\u043b\u0435 \u043f\u0440\u0438\u043d\u044f\u0442\u0438\u044f \u0443\u0447\u0430\u0441\u0442\u0438\u044f, \u043d\u0430\u0448\u0430 \u0433\u0440\u0443\u043f\u043f\u0430 \u0431\u0443\u0434\u0435\u0442 \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u044f\u0442\u044c \u0432\u0430\u043c \u0443\u0432\u0435\u0434\u043e\u043c\u043b\u0435\u043d\u0438\u044f. \u041f\u0440\u0438 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u0438 \u0442\u0430\u043a\u043e\u0433\u043e \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f, \u0432\u0430\u043c \u043d\u0443\u0436\u043d\u043e \u043f\u0435\u0440\u0435\u0439\u0442\u0438 \u0432 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u0438 \u043f\u043e\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044c \u0442\u043e, \u0447\u0442\u043e \u0432\u044b \u043d\u0430\u0445\u043e\u0434\u0438\u0442\u0435\u0441\u044c \u0434\u043e\u043c\u0430 (\u0443 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f \u043d\u0435\u0442 \u043f\u043e\u0441\u0442\u043e\u044f\u043d\u043d\u043e\u0433\u043e \u0434\u043e\u0441\u0442\u0443\u043f\u0430 \u043a \u0432\u0430\u0448\u0435\u043c\u0443 \u043c\u0435\u0441\u0442\u043e\u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u044e, \u043f\u043e\u044d\u0442\u043e\u043c\u0443 \u043f\u0440\u0438\u0445\u043e\u0434\u0438\u0442\u0441\u044f \u043f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0430\u0442\u044c \u0432\u0440\u0443\u0447\u043d\u0443\u044e)."),r.a.createElement(E.d,null,r.a.createElement(E.b,{size:"xl",level:"2",onClick:function(){e.props.start()}},"\u0421\u0435\u0439\u0447\u0430\u0441 \u044f \u0434\u043e\u043c\u0430, \u043d\u0430\u0447\u0430\u0442\u044c!"))))}}]),n}(r.a.Component)),x=Object(_.b)((function(e,t){return{}}))(N),I=n(116),V=n.n(I),G=n(117),W=n.n(G),D=n(118),K=n.n(D),S=n(119),z=n.n(S),T=n(120),q=n.n(T),R=n(121),J=n.n(R),B=n(122),F=n.n(B),H="modal_reward",Q="modal_skipped",X="modal_not-home",Y="modal_no-geodata",Z=function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(){return Object(p.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"setActiveModal",value:function(e){return this.props.onOpenModal(e)}},{key:"close",value:function(){return this.setActiveModal(null)}},{key:"render",value:function(){var e,t,n,a=this;return r.a.createElement(E.j,{activeModal:this.props.activeModal||null,onClose:this.close},(e="modal_are-at-home",t=function(){a.close()},n=this.props.permission,r.a.createElement(E.i,{id:e,onClose:function(){return t()},icon:r.a.createElement(V.a,null),header:"\u0412\u044b \u0441\u0435\u0439\u0447\u0430\u0441 \u0434\u043e\u043c\u0430?",caption:"\u0411\u0430\u043b\u043b\u044b \u0431\u0443\u0434\u0443\u0442 \u043d\u0430\u0447\u0438\u0441\u043b\u044f\u0442\u044c\u0441\u044f \u0442\u043e\u043b\u044c\u043a\u043e \u0437\u0430 \u043d\u0430\u0445\u043e\u0436\u0434\u0435\u043d\u0438\u0435 \u0442\u0430\u043c, \u0433\u0434\u0435 \u0432\u044b \u043d\u0430\u0445\u043e\u0434\u0438\u0442\u0435\u0441\u044c \u0441\u0435\u0439\u0447\u0430\u0441. \u041d\u0435 \u0437\u0430\u0431\u0443\u0434\u044c\u0442\u0435 \u0440\u0430\u0437\u0440\u0435\u0448\u0438\u0442\u044c \u0433\u0435\u043e\u0434\u0430\u043d\u043d\u044b\u0435.",actions:[{title:"\u0414\u0430, \u044f \u0434\u043e\u043c\u0430",mode:"primary",action:n}]})),function(e,t,n){return r.a.createElement(E.i,{id:e,onClose:function(){return t()},icon:r.a.createElement(W.a,null),header:"\u0412\u0430\u043c \u043d\u0443\u0436\u043d\u043e \u0440\u0430\u0437\u0440\u0435\u0448\u0438\u0442\u044c \u0434\u043e\u0441\u0442\u0443\u043f \u043a \u0433\u0435\u043e\u043f\u043e\u0437\u0438\u0446\u0438\u0438",caption:"\u0411\u0435\u0437 \u0434\u0430\u043d\u043d\u043e\u0433\u043e \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u0438\u044f \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u043d\u0435 \u0441\u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u0441\u043b\u044f\u0442\u044c \u0432\u0430\u043c \u0431\u0430\u043b\u043b\u044b",actions:[{title:"\u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u044c",mode:"primary",action:n}]})}("modal_not-allow-location",(function(){a.close()}),this.props.permission),function(e,t,n){return r.a.createElement(E.i,{id:e,onClose:function(){return t()},icon:r.a.createElement(K.a,null),header:"\u0412\u0430\u043c \u043d\u0443\u0436\u043d\u043e \u0440\u0430\u0437\u0440\u0435\u0448\u0438\u0442\u044c \u043e\u0442\u043f\u0440\u0430\u0432\u043a\u0443 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0439",caption:"\u0411\u0435\u0437 \u0434\u0430\u043d\u043d\u043e\u0433\u043e \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u0438\u044f \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u043d\u0435 \u0441\u043c\u043e\u0436\u0435\u0442 \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u044f\u0442\u044c \u0432\u0430\u043c \u0443\u0432\u0435\u0434\u043e\u043c\u043b\u0435\u043d\u0438\u044f.",actions:[{title:"\u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u044c",mode:"primary",action:n}]})}("modal_not-allow-messages",(function(){a.close()}),this.props.permission),function(e,t){return r.a.createElement(E.i,{id:H,onClose:e,icon:r.a.createElement(z.a,null),header:"\u041e\u0442\u043c\u0435\u0442\u043a\u0430 \u043f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043d\u0430!",caption:t?"\u0412\u0430\u043c \u043d\u0430\u0447\u0438\u0441\u043b\u0438\u043d\u043e "+t.value+" \u0431\u0430\u043b\u043b\u043e\u0432":""})}((function(){a.close()}),this.props.modalParams),function(e,t){return r.a.createElement(E.i,{id:Q,onClose:e,icon:r.a.createElement(q.a,null),header:"\u041f\u0440\u043e\u043f\u0443\u0449\u0435\u043d\u043e!",caption:"\u041a \u0441\u043e\u0436\u0430\u043b\u0435\u043d\u0438\u044e \u043f\u0440\u043e\u0448\u043b\u043e \u0431\u043e\u043b\u044c\u0448\u0435 10 \u043c\u0438\u043d\u0443\u0442 \u0441 \u043c\u043e\u043c\u0435\u043d\u0442\u0430 \u043e\u0442\u043f\u0440\u0430\u0432\u043a\u0438 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f."})}((function(){a.close()})),function(e,t){return r.a.createElement(E.i,{id:X,onClose:e,icon:r.a.createElement(J.a,null),header:"\u0412\u044b \u043f\u043e\u043a\u0438\u043d\u0443\u043b\u0438 \u0434\u043e\u043c",caption:"\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0441\u043e\u0431\u043b\u044e\u0434\u0430\u0439\u0442\u0435 \u043a\u0430\u0440\u0430\u043d\u0442\u0438\u043d."})}((function(){a.close()})),function(e,t){return r.a.createElement(E.i,{id:Y,onClose:e,icon:r.a.createElement(F.a,null),header:"\u041d\u0435\u0442 \u0434\u043e\u0441\u0442\u0443\u043f\u0430 \u043a \u043c\u0435\u0441\u0442\u043e\u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u044e",caption:"\u041d\u0435\u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e \u043f\u0440\u043e\u0432\u0435\u0440\u0438\u0442\u044c \u0441\u043e\u0431\u043b\u044e\u0434\u0435\u043d\u0438\u0435 \u043a\u0430\u0440\u0430\u043d\u0442\u0438\u043d\u0430"})}((function(){a.close()})))}}]),n}(r.a.Component),$=Object(_.b)((function(e,t){return e.modal?{activeModal:e.modal.activeModal,modalParams:e.modal.modalParams}:{}}),(function(e){return{onOpenModal:function(t){return new Promise((function(n){return U(t).then((function(t){e(t),n()}))}))}}}))(Z),ee=n(123),te=n.n(ee),ne=n(68),ae=n.n(ne),re=n(69),le=n.n(re),oe=n(124),ce=n.n(oe),ie=n(70),se=n.n(ie),ue=n(125),me=n.n(ue),pe=(n(282),function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(e){return Object(p.a)(this,n),t.call(this,e)}return Object(d.a)(n,[{key:"confirm",value:function(){var e=this;i.a.send("VKWebAppGetGeodata",{}).then((function(t){C.home.confirm(e.props.fetchedUser.id,t.lat,t.long,(function(t){return e.afterConfirm(t)}))})).catch((function(){C.home.confirm(e.props.fetchedUser.id,null,null,(function(t){return e.afterConfirm(t)}))}))}},{key:"afterConfirm",value:function(e){var t=this;this.props.onLevelUpdate(e).then((function(){var n=e.result;switch(parseInt(n.status)){case 1:t.props.onOpenModal(H,{value:n.value});break;case 2:t.props.onOpenModal(X);break;case 4:t.props.onOpenModal(Q);break;case 8:case 12:t.props.onOpenModal(Y)}}))}},{key:"statusOfCheck",value:function(e){switch(parseInt(e.status)){case 1:return"\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043d\u043e";case 2:return"\u041d\u0435 \u0434\u043e\u043c\u0430";case 4:return"\u041f\u043e\u0437\u0434\u043d\u043e";case 8:case 12:return"\u041d\u0435\u0442 \u0433\u0435\u043e\u0434\u0430\u043d\u043d\u044b\u0445";case 16:return"\u041f\u0440\u043e\u043f\u0443\u0449\u0435\u043d\u043e";default:return"\u0422\u0440\u0435\u0431\u0443\u0435\u0442 \u043f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043d\u0438\u044f"}}},{key:"statusOfCheckIcon",value:function(e){switch(parseInt(e.status)){case 1:return r.a.createElement(ae.a,{style:{color:"green"}});case 2:return r.a.createElement(le.a,{style:{color:"red"}});case 4:return r.a.createElement(ce.a,{style:{color:"red"}});case 8:case 12:return r.a.createElement(se.a,{style:{color:"gray"}});case 16:return r.a.createElement(le.a,{style:{color:"gray"}});default:return r.a.createElement(me.a,{style:{color:"var(--button_primary_background)"}})}}},{key:"levelName",value:function(){return"\u041d\u0430\u0440\u0443\u0448\u0438\u0442\u0435\u043b\u044c \u043a\u0430\u0440\u0430\u043d\u0442\u0438\u043d\u0430 3000"+(this.props.fetchedUser.city&&this.props.fetchedUser.city.title?" \u0433."+this.props.fetchedUser.city.title:"")}},{key:"render",value:function(){var e=this;return r.a.createElement(E.k,{id:this.props.id},r.a.createElement(E.l,{left:this.props.level.noGeodata&&r.a.createElement(E.d,null,r.a.createElement(E.b,{before:r.a.createElement(se.a,null),onClick:function(){e.props.permission()},mode:"destructive"},"\u0420\u0430\u0437\u0440\u0435\u0448\u0438\u0442\u044c \u0433\u0435\u043e\u0434\u0430\u043d\u043d\u044b\u0435")),right:r.a.createElement(E.d,null,r.a.createElement(E.b,{before:r.a.createElement(te.a,null),onClick:function(){e.props.navigate("rating")}},"\u0420\u0435\u0439\u0442\u0438\u043d\u0433"))},r.a.createElement("b",null,"#"),r.a.createElement("b",null,"\u041b"),r.a.createElement("b",null,"\u0423"),r.a.createElement("b",null,"\u0427"),r.a.createElement("b",null,"\u0428"),r.a.createElement("b",null,"\u0415"),r.a.createElement("b",null,"\u0414"),r.a.createElement("b",null,"\u041e"),r.a.createElement("b",null,"\u041c"),r.a.createElement("b",null,"\u0410")),this.props.fetchedUser&&r.a.createElement(E.e,null,r.a.createElement(E.h,{className:"RatingList"},r.a.createElement(E.c,null,r.a.createElement(E.d,null),r.a.createElement(E.d,null,"\u0423\u0440\u043e\u0432\u0435\u043d\u044c")),r.a.createElement(E.c,{before:this.props.fetchedUser.photo_200?r.a.createElement(E.a,{src:this.props.fetchedUser.photo_200}):null,description:this.levelName()},r.a.createElement(E.d,null,"".concat(this.props.fetchedUser.first_name," ").concat(this.props.fetchedUser.last_name)),r.a.createElement(E.d,null,this.props.level?this.props.level.value:"-")))),this.props.level&&this.props.level.checks&&r.a.createElement(E.e,null,this.props.level.checks.length>0&&!this.props.level.checks[0].confirmed&&r.a.createElement(E.d,null,r.a.createElement(E.b,{size:"xl",mode:"commerce",onClick:function(){e.confirm()}},"\u042f \u0434\u043e\u043c\u0430")),r.a.createElement(E.f,null,"\u041f\u043e\u0441\u043b\u0435\u0434\u043d\u0438\u0435 \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0438"),r.a.createElement(E.h,{className:"ChecksList"},r.a.createElement(E.c,{before:r.a.createElement(ae.a,{style:{color:"green"}}),key:"check_head"},r.a.createElement(E.d,null,"\u0412\u0440\u0435\u043c\u044f"),r.a.createElement(E.d,null,"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442"),r.a.createElement(E.d,{className:"Values"},"\u0411\u0430\u043b\u043b\u044b")),0==this.props.level.checks.length&&r.a.createElement(E.c,{key:"check_empty",style:{textAlign:"center"}},r.a.createElement(E.d,null,"\u041f\u0440\u043e\u0432\u0435\u0440\u043e\u043a \u0435\u0449\u0451 \u043d\u0435 \u0431\u044b\u043b\u043e")),this.props.level.checks.map((function(t){return r.a.createElement(E.c,{key:"check_"+t.check_id,before:e.statusOfCheckIcon(t)},r.a.createElement(E.d,null,t.sended),r.a.createElement(E.d,null,e.statusOfCheck(t)),r.a.createElement(E.d,{className:"Values",style:t.value>0?{color:"green",fontWeight:"bold"}:{}},t.value))})))))}}]),n}(r.a.Component)),de=Object(_.b)((function(e,t){return{level:e.level.level}}),(function(e){return{onLevelUpdate:function(t){return new Promise((function(n){return M(t).then((function(t){e(t),n()}))}))},onOpenModal:function(t,n){return new Promise((function(a){return U(t,n).then((function(t){e(t),a()}))}))}}}))(pe),he=n(126),fe=n.n(he),be=n(127),ve=n.n(be),Ee=(n(283),Object(E.o)()),ge=function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(p.a)(this,n),(a=t.call(this,e)).state={isLoading:!0},a}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=this;C.rating.global((function(t){e.setState({isLoading:!1,table:t})}))}},{key:"render",value:function(){var e=this;return r.a.createElement(E.k,{id:this.props.id},r.a.createElement(E.l,{left:r.a.createElement(E.m,{onClick:function(){e.props.navigate("level")}},Ee===E.g?r.a.createElement(fe.a,null):r.a.createElement(ve.a,null))},"\u0420\u0435\u0439\u0442\u0438\u043d\u0433"),!this.state.isLoading&&r.a.createElement(E.e,null,r.a.createElement(E.h,{className:"RatingList"},r.a.createElement(E.c,{expandable:!0},r.a.createElement(E.d,null),r.a.createElement(E.d,null,"\u0423\u0440\u043e\u0432\u0435\u043d\u044c")),this.state.table.map((function(e){return r.a.createElement(E.c,{key:"friend_"+e.uid,before:e.photo_200?r.a.createElement(E.a,{src:e.photo_200}):null,description:"\u041f\u0440\u0438\u043c\u0435\u0440 \u0434\u043b\u044f \u0432\u0441\u0435\u0445"},r.a.createElement(E.d,null,"".concat(e.first_name," ").concat(e.last_name)),r.a.createElement(E.d,null,e.value))})))),this.state.isLoading&&r.a.createElement(E.n,{size:"large"}))}}]),n}(r.a.Component),Oe=Object(_.b)((function(e,t){return{}}),(function(e){return{}}))(ge),ye=function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(p.a)(this,n),(a=t.call(this,e)).state={activeModal:null,activePanel:"home",user:null,locationPermissionCount:0},a.navigate=function(e,t){a.setState({activePanel:e.currentTarget?e.currentTarget.dataset.to:e})},a.setUser=function(e){a.setState({user:e})},a.begin=function(e){var t=Object.assign({},a.state.user);e&&Object.assign(t,{lat:e.lat,long:e.long}),C.home.begin(t,(function(e){e&&a.props.onLevelUpdate(e).then((function(){a.navigate("level")}))}))},a.permission=function(){a.props.onOpenModal(null),i.a.send("VKWebAppAllowMessagesFromGroup",{group_id:193696611}).then((function(e){i.a.send("VKWebAppGetGeodata",{}).then((function(e){e.available&&a.begin(e)})).catch((function(){var e=a.state.locationPermissionCount+1;a.setState({locationPermissionCount:e}),e>1?a.begin():a.props.onOpenModal("modal_not-allow-location")}))})).catch((function(){a.props.onOpenModal("modal_not-allow-messages")}))},a}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=this;function t(){return(t=Object(m.a)(u.a.mark((function t(){var n,a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.a.send("VKWebAppGetUserInfo");case 2:return n=t.sent,e.setUser(n),t.next=6,C.home.level(n.id);case 6:(a=t.sent)?e.props.onLevelUpdate(a).then((function(){e.permission()})):e.navigate("begin");case 8:case"end":return t.stop()}}),t)})))).apply(this,arguments)}i.a.subscribe((function(e){var t=e.detail,n=t.type,a=t.data;if("VKWebAppUpdateConfig"===n){var r=document.createAttribute("scheme");r.value=a.scheme?a.scheme:"client_light",document.body.attributes.setNamedItem(r)}})),function(){t.apply(this,arguments)}()}},{key:"render",value:function(){var e=this;return r.a.createElement(v.a,{activePanel:this.state.activePanel,modal:r.a.createElement($,{permission:this.permission})},r.a.createElement(w,{id:"home",fetchedUser:this.state.user,navigate:this.navigate}),r.a.createElement(x,{id:"begin",fetchedUser:this.state.user,navigate:this.navigate,start:function(){e.props.onOpenModal("modal_are-at-home")}}),r.a.createElement(de,{id:"level",fetchedUser:this.state.user,navigate:this.navigate,permission:this.permission}),r.a.createElement(Oe,{id:"rating",navigate:this.navigate}))}}]),n}(r.a.Component),ke=Object(_.b)((function(e,t){return{}}),(function(e){return{onLevelUpdate:function(t){return new Promise((function(n){return M(t).then((function(t){e(t),n()}))}))},onOpenModal:function(t){return new Promise((function(n){return U(t).then((function(t){e(t),n()}))}))}}}))(ye),je=n(33),Ce=n(71),_e=n(129),Me=n.n(_e);var Ue=Object(je.b)({modal:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"MODAL_OPEN":return Object.assign({},e,{activeModal:t.activeModal,modalParams:t.modalParams});default:return e}},level:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LEVEL_UPDATE":return Object.assign({},e,{level:t.level});default:return e}}}),Pe=function(e,t){return Ue(e,t)},we={key:"root",storage:Me.a},Le=Object(Ce.a)(we,Pe),Ae=Object(je.c)(Le),Ne=Object(Ce.b)(Ae),xe=n(130);i.a.send("VKWebAppInit"),o.a.render(r.a.createElement(_.a,{store:Ae},r.a.createElement(xe.a,{loading:null,persistor:Ne},r.a.createElement(ke,null))),document.getElementById("root"))},99:function(e,t,n){}},[[189,1,2]]]);
//# sourceMappingURL=main.3ca3bc88.chunk.js.map