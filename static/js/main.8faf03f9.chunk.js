(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){e.exports=n(18)},16:function(e,t,n){},17:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),s=n(8),r=n.n(s),c=(n(16),n(9)),i=n(2),l=n(3),u=n(5),d=n(4),m=n(6),p=n(1),b=(n(17),function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(u.a)(this,Object(d.a)(t).call(this,e))).handleFormSubmit=n.handleFormSubmit.bind(Object(p.a)(Object(p.a)(n))),n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"handleFormSubmit",value:function(e){e.preventDefault();this.refs.addressInput.value;this.props.actions.send(JSON.stringify({op:"addr_sub",addr:"#{text}"}))}},{key:"render",value:function(){var e=0,t=this.props.messages.map(function(t){return o.a.createElement("li",{key:e++},t)});return o.a.createElement("div",{className:"c-ledger"},o.a.createElement("form",{action:"https://blockchain.info/rawaddr/$bitcoin_address"}),o.a.createElement("form",{onSubmit:this.handleFormSubmit},o.a.createElement("input",{ref:"addressInput",id:"address-input",type:"text"}),o.a.createElement("label",{htmlFor:"address-input"},"Bitcoin Address"),o.a.createElement("button",{type:"submit"},"Look Up Address")),o.a.createElement("ul",null,t))}}]),t}(a.Component)),h={parseResponse:function(e){return JSON.parse(e)},extractTransactionInfo:function(e){return console.log(this),this.parseResponse(e)}},f=function(e){function t(e){var n;Object(i.a)(this,t),n=Object(u.a)(this,Object(d.a)(t).call(this,e));var a=new WebSocket("wss://ws.blockchain.info/inv");a.onopen=function(){console.log("open")};var o=Object(p.a)(Object(p.a)(n));return a.onmessage=function(e){console.log("message",e.data);var t=h.extractTransactionInfo(e.data);o.setState({messages:[].concat(Object(c.a)(o.state.messages),[t])})},a.onclose=function(){console.log("close")},n.state={actions:a,messages:[]},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement("header",null),o.a.createElement(b,this.state))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[10,1,2]]]);
//# sourceMappingURL=main.8faf03f9.chunk.js.map