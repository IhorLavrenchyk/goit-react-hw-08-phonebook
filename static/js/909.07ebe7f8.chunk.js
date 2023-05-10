"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[909],{909:function(e,t,n){n.r(t),n.d(t,{default:function(){return A}});var a=n(2791),r=n(9434),s=n(4270),c=n(3433),o=n(9439),i="ContactForm_form__dhl+T",l="ContactForm_formLabel__TSwxK",u="ContactForm_formName__9bHzl",m="ContactForm_formNumber__UMrmC",d="ContactForm_formBtn__qZGY3",_=n(3634),f=function(e){return e.contacts.items},h=function(e){return e.contacts.isLoading},p=function(e){return e.filter.filter},b=n(184),x=function(){var e=(0,a.useState)(""),t=(0,o.Z)(e,2),n=t[0],s=t[1],h=(0,a.useState)(""),p=(0,o.Z)(h,2),x=p[0],v=p[1],C=(0,r.I0)(),j=(0,r.v9)(f);return(0,b.jsxs)("form",{className:i,onSubmit:function(e){e.preventDefault();var t=e.currentTarget;-1!==(0,c.Z)(j).findIndex((function(e){return n===e.name}))?alert("".concat(n," is already in contacts.")):C((0,_.uK)({name:n,number:x})),t.reset()},children:[(0,b.jsxs)("label",{className:l,children:["Name",(0,b.jsx)("input",{className:u,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,placeholder:"Enter name",value:n,onChange:function(e){var t=e.target.value;s(t)}})]}),(0,b.jsxs)("label",{className:l,children:["Number",(0,b.jsx)("input",{className:m,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,placeholder:"Enter phone number",value:x,onChange:function(e){var t=e.target.value;v(t)}})]}),(0,b.jsx)("button",{className:d,type:"submit",children:"Add contact"})]})},v="ContactList_ContactList_ul__4+QB6",C="ContactList_ContactList_li__1CD5A",j="ContactList_ContactList_button__z83r-",N=function(){var e=function(e,t){return t?e.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())})):e}((0,r.v9)(f),(0,r.v9)(p)),t=(0,r.I0)();return(0,b.jsx)("div",{children:(0,b.jsx)("ul",{className:v,children:e.map((function(e,n){return(0,b.jsxs)("li",{className:C,children:[e.name,(0,b.jsx)("button",{className:j,type:"button",onClick:function(){return function(e){return t((0,_.nE)(e))}(e.id)},children:"Delete"})]},n)}))})})},g="Filter_filterLabel__+pnW-",L="Filter_filterName__Y2kKA",y=n(4808),F=function(){var e=(0,r.I0)(),t=(0,r.v9)(p);return(0,b.jsxs)("div",{children:[(0,b.jsx)("label",{className:g,children:"Find contacts by Name "}),(0,b.jsx)("input",{className:L,type:"text",name:"filter",placeholder:"Enter filter",value:t,onChange:function(t){e((0,y.T)(t.target.value))}})]})},k=n(665),w={};function A(){var e=(0,r.I0)(),t=(0,r.v9)(h);return(0,a.useEffect)((function(){e((0,_.yF)())}),[e]),(0,b.jsxs)("section",{className:w.section,children:[(0,b.jsx)(s.q,{children:(0,b.jsx)("title",{children:"Phonebook"})}),(0,b.jsx)(x,{}),(0,b.jsx)("div",{children:t&&(0,b.jsx)(k.a,{})}),(0,b.jsx)(F,{}),(0,b.jsx)(N,{})]})}}}]);
//# sourceMappingURL=909.07ebe7f8.chunk.js.map