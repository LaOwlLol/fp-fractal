webpackJsonp([1],{0:function(n,l,t){n.exports=t("cDNt")},cDNt:function(n,l,t){"use strict";function u(n){return s._25(0,[s._22(402653184,1,{canvasRef:0}),(n()(),s._24(-1,null,["\n"])),(n()(),s._7(2,0,[[1,0],["fractalCanvas",1]],null,0,"canvas",[["class","canvasClass"]],null,null,null,null,null)),(n()(),s._24(-1,null,["\n"]))],null,null)}function e(n){return s._25(0,[(n()(),s._7(0,0,null,null,2,"fractal-canvas",[],null,null,null,u,x)),s._21(512,null,C,C,[]),s._5(2,770048,null,0,v,[C],null,null)],function(n,l){n(l,2,0)},null)}function i(n){return s._25(0,[(n()(),s._24(-1,null,["\n"])),(n()(),s._7(1,0,null,null,102,"ul",[],null,null,null,null,null)),(n()(),s._24(-1,null,["\n\t"])),(n()(),s._7(3,0,null,null,1,"li",[["class","range-label"]],null,null,null,null,null)),(n()(),s._24(-1,null,[" Minimum X or left screen edge: "])),(n()(),s._24(-1,null,["\n\t"])),(n()(),s._7(6,0,null,null,16,"li",[],null,null,null,null,null)),(n()(),s._24(-1,null,["\n\t\t"])),(n()(),s._7(8,0,null,null,6,"input",[["class","slider"],["min","-2.5"],["step","0.01"],["type","range"]],[[8,"max",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"change"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(n,l,t){var u=!0,e=n.component;if("input"===l){u=!1!==s._20(n,9)._handleInput(t.target.value)&&u}if("blur"===l){u=!1!==s._20(n,9).onTouched()&&u}if("compositionstart"===l){u=!1!==s._20(n,9)._compositionStart()&&u}if("compositionend"===l){u=!1!==s._20(n,9)._compositionEnd(t.target.value)&&u}if("change"===l){u=!1!==s._20(n,10).onChange(t.target.value)&&u}if("input"===l){u=!1!==s._20(n,10).onChange(t.target.value)&&u}if("blur"===l){u=!1!==s._20(n,10).onTouched()&&u}if("ngModelChange"===l){u=!1!==(e.minX=t)&&u}if("change"===l){u=!1!==e.minXChange(t.target.value)&&u}return u},null,null)),s._5(9,16384,null,0,Y.b,[s.G,s.k,[2,Y.a]],null,null),s._5(10,16384,null,0,Y.i,[s.G,s.k],null,null),s._21(1024,null,Y.d,function(n,l){return[n,l]},[Y.b,Y.i]),s._5(12,671744,null,0,Y.g,[[8,null],[8,null],[8,null],[2,Y.d]],{model:[0,"model"]},{update:"ngModelChange"}),s._21(2048,null,Y.e,null,[Y.g]),s._5(14,16384,null,0,Y.f,[Y.e],null,null),(n()(),s._24(-1,null,["\n\t\t"])),(n()(),s._7(16,0,null,null,5,"input",[["class","range-input"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"change"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(n,l,t){var u=!0,e=n.component;if("input"===l){u=!1!==s._20(n,17)._handleInput(t.target.value)&&u}if("blur"===l){u=!1!==s._20(n,17).onTouched()&&u}if("compositionstart"===l){u=!1!==s._20(n,17)._compositionStart()&&u}if("compositionend"===l){u=!1!==s._20(n,17)._compositionEnd(t.target.value)&&u}if("ngModelChange"===l){u=!1!==(e.minX=t)&&u}if("change"===l){u=!1!==e.minXChange(t.target.value)&&u}return u},null,null)),s._5(17,16384,null,0,Y.b,[s.G,s.k,[2,Y.a]],null,null),s._21(1024,null,Y.d,function(n){return[n]},[Y.b]),s._5(19,671744,null,0,Y.g,[[8,null],[8,null],[8,null],[2,Y.d]],{model:[0,"model"]},{update:"ngModelChange"}),s._21(2048,null,Y.e,null,[Y.g]),s._5(21,16384,null,0,Y.f,[Y.e],null,null),(n()(),s._24(-1,null,["\n\t"])),(n()(),s._24(-1,null,["\n\n\t"])),(n()(),s._7(24,0,null,null,1,"li",[["class","range-label"]],null,null,null,null,null)),(n()(),s._24(-1,null,[" Maximum X or right screen edge: "])),(n()(),s._24(-1,null,["\n\t"])),(n()(),s._7(27,0,null,null,16,"li",[],null,null,null,null,null)),(n()(),s._24(-1,null,["\n\t\t"])),(n()(),s._7(29,0,null,null,6,"input",[["class","slider"],["max","1.0"],["step","0.01"],["type","range"]],[[8,"min",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"change"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(n,l,t){var u=!0,e=n.component;if("input"===l){u=!1!==s._20(n,30)._handleInput(t.target.value)&&u}if("blur"===l){u=!1!==s._20(n,30).onTouched()&&u}if("compositionstart"===l){u=!1!==s._20(n,30)._compositionStart()&&u}if("compositionend"===l){u=!1!==s._20(n,30)._compositionEnd(t.target.value)&&u}if("change"===l){u=!1!==s._20(n,31).onChange(t.target.value)&&u}if("input"===l){u=!1!==s._20(n,31).onChange(t.target.value)&&u}if("blur"===l){u=!1!==s._20(n,31).onTouched()&&u}if("ngModelChange"===l){u=!1!==(e.maxX=t)&&u}if("change"===l){u=!1!==e.maxXChange(t.target.value)&&u}return u},null,null)),s._5(30,16384,null,0,Y.b,[s.G,s.k,[2,Y.a]],null,null),s._5(31,16384,null,0,Y.i,[s.G,s.k],null,null),s._21(1024,null,Y.d,function(n,l){return[n,l]},[Y.b,Y.i]),s._5(33,671744,null,0,Y.g,[[8,null],[8,null],[8,null],[2,Y.d]],{model:[0,"model"]},{update:"ngModelChange"}),s._21(2048,null,Y.e,null,[Y.g]),s._5(35,16384,null,0,Y.f,[Y.e],null,null),(n()(),s._24(-1,null,["\n\t\t"])),(n()(),s._7(37,0,null,null,5,"input",[["class","range-input"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"change"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(n,l,t){var u=!0,e=n.component;if("input"===l){u=!1!==s._20(n,38)._handleInput(t.target.value)&&u}if("blur"===l){u=!1!==s._20(n,38).onTouched()&&u}if("compositionstart"===l){u=!1!==s._20(n,38)._compositionStart()&&u}if("compositionend"===l){u=!1!==s._20(n,38)._compositionEnd(t.target.value)&&u}if("ngModelChange"===l){u=!1!==(e.maxX=t)&&u}if("change"===l){u=!1!==e.maxXChange(t.target.value)&&u}return u},null,null)),s._5(38,16384,null,0,Y.b,[s.G,s.k,[2,Y.a]],null,null),s._21(1024,null,Y.d,function(n){return[n]},[Y.b]),s._5(40,671744,null,0,Y.g,[[8,null],[8,null],[8,null],[2,Y.d]],{model:[0,"model"]},{update:"ngModelChange"}),s._21(2048,null,Y.e,null,[Y.g]),s._5(42,16384,null,0,Y.f,[Y.e],null,null),(n()(),s._24(-1,null,["\n\t"])),(n()(),s._24(-1,null,["\n\n\n\t"])),(n()(),s._7(45,0,null,null,1,"li",[["class","range-label"]],null,null,null,null,null)),(n()(),s._24(-1,null,[" Minimum Y or top screen edge (upside down y axis): "])),(n()(),s._24(-1,null,["\n\t"])),(n()(),s._7(48,0,null,null,16,"li",[],null,null,null,null,null)),(n()(),s._24(-1,null,["\n\t\t"])),(n()(),s._7(50,0,null,null,6,"input",[["class","slider"],["min","-1.0"],["step","0.01"],["type","range"]],[[8,"max",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"change"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(n,l,t){var u=!0,e=n.component;if("input"===l){u=!1!==s._20(n,51)._handleInput(t.target.value)&&u}if("blur"===l){u=!1!==s._20(n,51).onTouched()&&u}if("compositionstart"===l){u=!1!==s._20(n,51)._compositionStart()&&u}if("compositionend"===l){u=!1!==s._20(n,51)._compositionEnd(t.target.value)&&u}if("change"===l){u=!1!==s._20(n,52).onChange(t.target.value)&&u}if("input"===l){u=!1!==s._20(n,52).onChange(t.target.value)&&u}if("blur"===l){u=!1!==s._20(n,52).onTouched()&&u}if("ngModelChange"===l){u=!1!==(e.minY=t)&&u}if("change"===l){u=!1!==e.minYChange(t.target.value)&&u}return u},null,null)),s._5(51,16384,null,0,Y.b,[s.G,s.k,[2,Y.a]],null,null),s._5(52,16384,null,0,Y.i,[s.G,s.k],null,null),s._21(1024,null,Y.d,function(n,l){return[n,l]},[Y.b,Y.i]),s._5(54,671744,null,0,Y.g,[[8,null],[8,null],[8,null],[2,Y.d]],{model:[0,"model"]},{update:"ngModelChange"}),s._21(2048,null,Y.e,null,[Y.g]),s._5(56,16384,null,0,Y.f,[Y.e],null,null),(n()(),s._24(-1,null,["\n\t\t"])),(n()(),s._7(58,0,null,null,5,"input",[["class","range-input"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"change"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(n,l,t){var u=!0,e=n.component;if("input"===l){u=!1!==s._20(n,59)._handleInput(t.target.value)&&u}if("blur"===l){u=!1!==s._20(n,59).onTouched()&&u}if("compositionstart"===l){u=!1!==s._20(n,59)._compositionStart()&&u}if("compositionend"===l){u=!1!==s._20(n,59)._compositionEnd(t.target.value)&&u}if("ngModelChange"===l){u=!1!==(e.minY=t)&&u}if("change"===l){u=!1!==e.minYChange(t.target.value)&&u}return u},null,null)),s._5(59,16384,null,0,Y.b,[s.G,s.k,[2,Y.a]],null,null),s._21(1024,null,Y.d,function(n){return[n]},[Y.b]),s._5(61,671744,null,0,Y.g,[[8,null],[8,null],[8,null],[2,Y.d]],{model:[0,"model"]},{update:"ngModelChange"}),s._21(2048,null,Y.e,null,[Y.g]),s._5(63,16384,null,0,Y.f,[Y.e],null,null),(n()(),s._24(-1,null,["\n\t"])),(n()(),s._24(-1,null,["\n\n\n\t"])),(n()(),s._7(66,0,null,null,1,"li",[["class","range-label"]],null,null,null,null,null)),(n()(),s._24(-1,null,[" Maximum Y or bottom screen edge: "])),(n()(),s._24(-1,null,["\n\t"])),(n()(),s._7(69,0,null,null,16,"li",[],null,null,null,null,null)),(n()(),s._24(-1,null,["\n\t\t"])),(n()(),s._7(71,0,null,null,6,"input",[["class","slider"],["max","1.0"],["step","0.01"],["type","range"]],[[8,"min",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"change"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(n,l,t){var u=!0,e=n.component;if("input"===l){u=!1!==s._20(n,72)._handleInput(t.target.value)&&u}if("blur"===l){u=!1!==s._20(n,72).onTouched()&&u}if("compositionstart"===l){u=!1!==s._20(n,72)._compositionStart()&&u}if("compositionend"===l){u=!1!==s._20(n,72)._compositionEnd(t.target.value)&&u}if("change"===l){u=!1!==s._20(n,73).onChange(t.target.value)&&u}if("input"===l){u=!1!==s._20(n,73).onChange(t.target.value)&&u}if("blur"===l){u=!1!==s._20(n,73).onTouched()&&u}if("ngModelChange"===l){u=!1!==(e.maxY=t)&&u}if("change"===l){u=!1!==e.maxYChange(t.target.value)&&u}return u},null,null)),s._5(72,16384,null,0,Y.b,[s.G,s.k,[2,Y.a]],null,null),s._5(73,16384,null,0,Y.i,[s.G,s.k],null,null),s._21(1024,null,Y.d,function(n,l){return[n,l]},[Y.b,Y.i]),s._5(75,671744,null,0,Y.g,[[8,null],[8,null],[8,null],[2,Y.d]],{model:[0,"model"]},{update:"ngModelChange"}),s._21(2048,null,Y.e,null,[Y.g]),s._5(77,16384,null,0,Y.f,[Y.e],null,null),(n()(),s._24(-1,null,["\n\t\t"])),(n()(),s._7(79,0,null,null,5,"input",[["class","range-input"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"change"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(n,l,t){var u=!0,e=n.component;if("input"===l){u=!1!==s._20(n,80)._handleInput(t.target.value)&&u}if("blur"===l){u=!1!==s._20(n,80).onTouched()&&u}if("compositionstart"===l){u=!1!==s._20(n,80)._compositionStart()&&u}if("compositionend"===l){u=!1!==s._20(n,80)._compositionEnd(t.target.value)&&u}if("ngModelChange"===l){u=!1!==(e.maxY=t)&&u}if("change"===l){u=!1!==e.maxYChange(t.target.value)&&u}return u},null,null)),s._5(80,16384,null,0,Y.b,[s.G,s.k,[2,Y.a]],null,null),s._21(1024,null,Y.d,function(n){return[n]},[Y.b]),s._5(82,671744,null,0,Y.g,[[8,null],[8,null],[8,null],[2,Y.d]],{model:[0,"model"]},{update:"ngModelChange"}),s._21(2048,null,Y.e,null,[Y.g]),s._5(84,16384,null,0,Y.f,[Y.e],null,null),(n()(),s._24(-1,null,["\n\t"])),(n()(),s._24(-1,null,["\n\n\t\n\t"])),(n()(),s._7(87,0,null,null,1,"li",[["class","range-label"]],null,null,null,null,null)),(n()(),s._24(-1,null,[" Escape Value: "])),(n()(),s._24(-1,null,["\n\t"])),(n()(),s._7(90,0,null,null,12,"li",[],null,null,null,null,null)),(n()(),s._24(-1,null,["\n\t\t"])),(n()(),s._7(92,0,[["escapeVal",1]],null,6,"input",[["class","slider"],["max","1000"],["min","10"],["type","range"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"change"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(n,l,t){var u=!0,e=n.component;if("input"===l){u=!1!==s._20(n,93)._handleInput(t.target.value)&&u}if("blur"===l){u=!1!==s._20(n,93).onTouched()&&u}if("compositionstart"===l){u=!1!==s._20(n,93)._compositionStart()&&u}if("compositionend"===l){u=!1!==s._20(n,93)._compositionEnd(t.target.value)&&u}if("change"===l){u=!1!==s._20(n,94).onChange(t.target.value)&&u}if("input"===l){u=!1!==s._20(n,94).onChange(t.target.value)&&u}if("blur"===l){u=!1!==s._20(n,94).onTouched()&&u}if("ngModelChange"===l){u=!1!==(e.iterations=t)&&u}if("change"===l){u=!1!==e.iterationsChange(t.target.value)&&u}return u},null,null)),s._5(93,16384,null,0,Y.b,[s.G,s.k,[2,Y.a]],null,null),s._5(94,16384,null,0,Y.i,[s.G,s.k],null,null),s._21(1024,null,Y.d,function(n,l){return[n,l]},[Y.b,Y.i]),s._5(96,671744,null,0,Y.g,[[8,null],[8,null],[8,null],[2,Y.d]],{model:[0,"model"]},{update:"ngModelChange"}),s._21(2048,null,Y.e,null,[Y.g]),s._5(98,16384,null,0,Y.f,[Y.e],null,null),(n()(),s._24(-1,null,["\n\t\t"])),(n()(),s._7(100,0,null,null,1,"label",[],null,null,null,null,null)),(n()(),s._24(101,null,["",""])),(n()(),s._24(-1,null,["\n\t"])),(n()(),s._24(-1,null,["\n"])),(n()(),s._24(-1,null,["\n"]))],function(n,l){var t=l.component;n(l,12,0,t.minX),n(l,19,0,t.minX),n(l,33,0,t.maxX),n(l,40,0,t.maxX),n(l,54,0,t.minY),n(l,61,0,t.minY),n(l,75,0,t.maxY),n(l,82,0,t.maxY),n(l,96,0,t.iterations)},function(n,l){var t=l.component;n(l,8,0,s._10(1,"",t.maxX,""),s._20(l,14).ngClassUntouched,s._20(l,14).ngClassTouched,s._20(l,14).ngClassPristine,s._20(l,14).ngClassDirty,s._20(l,14).ngClassValid,s._20(l,14).ngClassInvalid,s._20(l,14).ngClassPending),n(l,16,0,s._20(l,21).ngClassUntouched,s._20(l,21).ngClassTouched,s._20(l,21).ngClassPristine,s._20(l,21).ngClassDirty,s._20(l,21).ngClassValid,s._20(l,21).ngClassInvalid,s._20(l,21).ngClassPending),n(l,29,0,s._10(1,"",t.minX,""),s._20(l,35).ngClassUntouched,s._20(l,35).ngClassTouched,s._20(l,35).ngClassPristine,s._20(l,35).ngClassDirty,s._20(l,35).ngClassValid,s._20(l,35).ngClassInvalid,s._20(l,35).ngClassPending),n(l,37,0,s._20(l,42).ngClassUntouched,s._20(l,42).ngClassTouched,s._20(l,42).ngClassPristine,s._20(l,42).ngClassDirty,s._20(l,42).ngClassValid,s._20(l,42).ngClassInvalid,s._20(l,42).ngClassPending),n(l,50,0,s._10(1,"",t.maxY,""),s._20(l,56).ngClassUntouched,s._20(l,56).ngClassTouched,s._20(l,56).ngClassPristine,s._20(l,56).ngClassDirty,s._20(l,56).ngClassValid,s._20(l,56).ngClassInvalid,s._20(l,56).ngClassPending),n(l,58,0,s._20(l,63).ngClassUntouched,s._20(l,63).ngClassTouched,s._20(l,63).ngClassPristine,s._20(l,63).ngClassDirty,s._20(l,63).ngClassValid,s._20(l,63).ngClassInvalid,s._20(l,63).ngClassPending),n(l,71,0,s._10(1,"",t.minY,""),s._20(l,77).ngClassUntouched,s._20(l,77).ngClassTouched,s._20(l,77).ngClassPristine,s._20(l,77).ngClassDirty,s._20(l,77).ngClassValid,s._20(l,77).ngClassInvalid,s._20(l,77).ngClassPending),n(l,79,0,s._20(l,84).ngClassUntouched,s._20(l,84).ngClassTouched,s._20(l,84).ngClassPristine,s._20(l,84).ngClassDirty,s._20(l,84).ngClassValid,s._20(l,84).ngClassInvalid,s._20(l,84).ngClassPending),n(l,92,0,s._20(l,98).ngClassUntouched,s._20(l,98).ngClassTouched,s._20(l,98).ngClassPristine,s._20(l,98).ngClassDirty,s._20(l,98).ngClassValid,s._20(l,98).ngClassInvalid,s._20(l,98).ngClassPending),n(l,101,0,t.iterations)})}function o(n){return s._25(0,[(n()(),s._7(0,0,null,null,2,"fractal-controller",[],null,null,null,i,S)),s._21(512,null,C,C,[]),s._5(2,245760,null,0,M,[C],null,null)],function(n,l){n(l,2,0)},null)}function a(n){return s._25(0,[(n()(),s._24(-1,null,["\n\n"])),(n()(),s._7(1,0,null,null,4,"div",[["style","text-align:center"]],null,null,null,null,null)),(n()(),s._24(-1,null,["\n  "])),(n()(),s._7(3,0,null,null,1,"h2",[],null,null,null,null,null)),(n()(),s._24(4,null,["\n   ","\n  "])),(n()(),s._24(-1,null,["\n"])),(n()(),s._24(-1,null,["\n"])),(n()(),s._7(7,0,null,null,2,"fractal-canvas",[],null,null,null,u,x)),s._21(512,null,C,C,[]),s._5(9,770048,null,0,v,[C],null,null),(n()(),s._24(-1,null,["\n"])),(n()(),s._7(11,0,null,null,2,"fractal-controller",[],null,null,null,i,S)),s._21(512,null,C,C,[]),s._5(13,245760,null,0,M,[C],null,null),(n()(),s._24(-1,null,["\n"]))],function(n,l){n(l,9,0),n(l,13,0)},function(n,l){n(l,4,0,l.component.title)})}function r(n){return s._25(0,[(n()(),s._7(0,0,null,null,1,"app-root",[],null,null,null,a,T)),s._5(1,114688,null,0,p,[],null,null)],function(n,l){n(l,1,0)},null)}Object.defineProperty(l,"__esModule",{value:!0});var s=t("/oeL"),c={production:!0},g=function(){function n(){}return n}(),p=function(){function n(){this.title="Fractal Viewer"}return n.prototype.ngOnInit=function(){},n.ctorParameters=function(){return[]},n}(),_=[""],h=[".canvasClass[_ngcontent-%COMP%]{border-style:solid;border-width:1px;border-color:#d3d3d3}"],f=t("Dqrr"),d=function(){function n(n,l,t,u,e,i,o,a,r,s){this.dirtyPalette=!0,this.minX=n,this.maxX=l,this.minY=t,this.maxY=u,this.width=e,this.height=i,this.iterations=o,this.escapeColor=a,this.lowColor=r,this.highColor=s,this.minXBuffer=new f.Subject,this.maxXBuffer=new f.Subject,this.minYBuffer=new f.Subject,this.maxYBuffer=new f.Subject,this.iterationsBuffer=new f.Subject,this.pixelBuffer=new f.Subject}return n.prototype.DirtyPalette=function(n){this.dirtyPalette=n},n.prototype.MinX=function(n){this.minX=n,this.minXBuffer.next(this.minX),this.escapeTestPixels()},n.prototype.MaxX=function(n){this.maxX=n,this.maxXBuffer.next(this.maxX),this.escapeTestPixels()},n.prototype.MinY=function(n){this.minY=n,this.minYBuffer.next(this.minY),this.escapeTestPixels()},n.prototype.MaxY=function(n){this.maxY=n,this.maxYBuffer.next(this.maxY),this.escapeTestPixels()},n.prototype.Width=function(n){this.width=n},n.prototype.Height=function(n){this.height=n},n.prototype.Iterations=function(n){this.iterations=n,this.dirtyPalette=!0,this.iterationsBuffer.next(this.iterations),this.refreshPalette(),this.escapeTestPixels()},n.prototype.EscapeColor=function(n){this.EscapeColor=n,this.escapeTestPixels()},n.prototype.LowColor=function(n){this.LowColor=n,this.dirtyPalette=!0,this.refreshPalette(),this.escapeTestPixels()},n.prototype.HighColor=function(n){this.HighColor=n,this.dirtyPalette=!0,this.refreshPalette(),this.escapeTestPixels()},n.prototype.escapeTestPixels=function(){this.dirtyPalette&&this.refreshPalette();for(var n=0;n<this.height;++n)for(var l=0;l<this.width;++l){for(var t=this.scaleX(l),u=this.scaleY(n),e=0,i=0,o=0;e*e+i*i<4&&o<this.iterations;){var a=e*e-i*i+t;i=2*e*i+u,e=a,o+=1}o<this.iterations?this.pixelBuffer.next({x:l,y:n,c:this.palette[o]}):this.pixelBuffer.next({x:l,y:n,c:this.escapeColor})}},n.prototype.refreshPalette=function(){for(var n=this.convertToRGB(this.lowColor),l=this.convertToRGB(this.highColor),t=0,u=[],e=0;e<this.iterations;e++){var i=[];t+=1/this.iterations,i[0]=n[0]*t+(1-t)*l[0],i[1]=n[1]*t+(1-t)*l[1],i[2]=n[2]*t+(1-t)*l[2],u.push(this.convertToHex(i))}this.palette=u,this.DirtyPalette(!1)},n.prototype.scaleX=function(n){return this.minX*(1-n/(this.width-1))+this.maxX*(n/(this.width-1))},n.prototype.scaleY=function(n){return this.minY*(1-n/(this.height-1))+this.maxY*(n/(this.height-1))},n.prototype.hex=function(n){var l="0123456789abcdef",t=parseInt(n);return 0==t||isNaN(n)?"00":(t=Math.round(Math.min(Math.max(0,t),255)),l.charAt((t-t%16)/16)+l.charAt(t%16))},n.prototype.convertToHex=function(n){return"#"+this.hex(n[0])+this.hex(n[1])+this.hex(n[2])},n.prototype.trim=function(n){return"#"==n.charAt(0)?n.substring(1,7):n},n.prototype.convertToRGB=function(n){var l=[];return l[0]=parseInt(this.trim(n).substring(0,2),16),l[1]=parseInt(this.trim(n).substring(2,4),16),l[2]=parseInt(this.trim(n).substring(4,6),16),l},n}(),m=new d(-2.5,1,-1,1,1024,600,15,"#000000","#ffc200","#0000ff"),C=function(){function n(){}return n.prototype.getPixelSubscription=function(n){var l=m.pixelBuffer.subscribe(n);return m.escapeTestPixels(),l},n.prototype.getWidth=function(){return m.width},n.prototype.getHeight=function(){return m.height},n.prototype.getEscapeColor=function(){return m.escapeColor},n.prototype.getLowColor=function(){return m.lowColor},n.prototype.getHighColor=function(){return m.highColor},n.prototype.getEscapeSubscription=function(n){var l=m.iterationsBuffer.subscribe(n);return m.iterationsBuffer.next(m.iterations),l},n.prototype.getMinXSubscription=function(n){var l=m.minXBuffer.subscribe(n);return m.minXBuffer.next(m.minX),l},n.prototype.getMaxXSubscription=function(n){var l=m.maxXBuffer.subscribe(n);return m.maxXBuffer.next(m.maxX),l},n.prototype.getMinYSubscription=function(n){var l=m.minYBuffer.subscribe(n);return m.minYBuffer.next(m.minY),l},n.prototype.getMaxYSubscription=function(n){var l=m.maxYBuffer.subscribe(n);return m.maxYBuffer.next(m.maxY),l},n.prototype.setMinX=function(n){m.MinX(n)},n.prototype.setMaxX=function(n){m.MaxX(n)},n.prototype.setMinY=function(n){m.MinY(n)},n.prototype.setMaxY=function(n){m.MaxY(n)},n.prototype.setWidth=function(n){m.Width(n)},n.prototype.setHeight=function(n){m.Height(n)},n.prototype.setIterations=function(n){m.Iterations(n)},n.prototype.setEscapeColor=function(n){m.EscapeColor(n)},n.prototype.setLowColor=function(n){m.LowColor(n)},n.prototype.setHighColor=function(n){m.HighColor(n)},n.ctorParameters=function(){return[]},n}(),v=function(){function n(n){this.fractalService=n}return n.prototype.ngOnInit=function(){var n=this;this.canvasContext=this.canvasRef.nativeElement.getContext("2d"),this.canvasRef.nativeElement.width=this.fractalService.getWidth(),this.canvasRef.nativeElement.height=this.fractalService.getHeight(),this.pixelSubscription=this.fractalService.getPixelSubscription(function(l){return n.paint(l)})},n.prototype.ngOnDestroy=function(){this.pixelSubscription.unsubscribe()},n.prototype.ngOnDoCheck=function(){},n.prototype.ngOnChanges=function(){},n.prototype.paint=function(n){this.canvasContext.fillStyle=n.c,this.canvasContext.fillRect(n.x,n.y,1,1)},n.ctorParameters=function(){return[{type:C}]},n}(),b=[h],x=s._4({encapsulation:0,styles:b,data:{}}),y=(s._2("fractal-canvas",v,e,{},{},[]),["ul[_ngcontent-%COMP%]{list-style-type:none}.slider[_ngcontent-%COMP%]{width:600px}.range-input[_ngcontent-%COMP%]{width:100px}"]),M=function(){function n(n){this.fractalService=n}return n.prototype.ngOnInit=function(){var n=this;this.minXSubscription=this.fractalService.getMinXSubscription(function(l){return n.minX=l}),this.maxXSubscription=this.fractalService.getMaxXSubscription(function(l){return n.maxX=l}),this.minYSubscription=this.fractalService.getMinYSubscription(function(l){return n.minY=l}),this.maxYSubscription=this.fractalService.getMaxYSubscription(function(l){return n.maxY=l}),this.iterationsSubscription=this.fractalService.getEscapeSubscription(function(l){return n.iterations=l})},n.prototype.ngOnDestroy=function(){this.minXSubscription.unsubscribe(),this.maxXSubscription.unsubscribe(),this.minYSubscription.unsubscribe(),this.maxYSubscription.unsubscribe(),this.iterationsSubscription.unsubscribe()},n.prototype.iterationsChange=function(n){this.fractalService.setIterations(n)},n.prototype.minXChange=function(n){this.fractalService.setMinX(n)},n.prototype.maxXChange=function(n){this.fractalService.setMaxX(n)},n.prototype.minYChange=function(n){this.fractalService.setMinY(n)},n.prototype.maxYChange=function(n){this.fractalService.setMaxY(n)},n.ctorParameters=function(){return[{type:C}]},n}(),Y=t("bm2B"),X=[y],S=s._4({encapsulation:0,styles:X,data:{}}),P=(s._2("fractal-controller",M,o,{},{},[]),[_]),T=s._4({encapsulation:0,styles:P,data:{}}),w=s._2("app-root",p,r,{},{},[]),I=t("qbdv"),B=t("fc+i"),E=s._3(g,[p],function(n){return s._18([s._19(512,s.i,s._0,[[8,[w]],[3,s.i],s.x]),s._19(5120,s.v,s._17,[[3,s.v]]),s._19(4608,I.d,I.c,[s.v]),s._19(4608,s.h,s.h,[]),s._19(5120,s.a,s._8,[]),s._19(5120,s.t,s._14,[]),s._19(5120,s.u,s._15,[]),s._19(4608,B.b,B.s,[I.b]),s._19(6144,s.J,null,[B.b]),s._19(4608,B.e,B.f,[]),s._19(5120,B.c,function(n,l,t,u){return[new B.k(n),new B.o(l),new B.n(t,u)]},[I.b,I.b,I.b,B.e]),s._19(4608,B.d,B.d,[B.c,s.z]),s._19(135680,B.m,B.m,[I.b]),s._19(4608,B.l,B.l,[B.d,B.m]),s._19(6144,s.H,null,[B.l]),s._19(6144,B.p,null,[B.m]),s._19(4608,s.O,s.O,[s.z]),s._19(4608,B.g,B.g,[I.b]),s._19(4608,B.i,B.i,[I.b]),s._19(4608,Y.j,Y.j,[]),s._19(512,I.a,I.a,[]),s._19(1024,s.l,B.q,[]),s._19(1024,s.b,function(n,l){return[B.r(n,l)]},[[2,B.h],[2,s.y]]),s._19(512,s.c,s.c,[[2,s.b]]),s._19(131584,s._6,s._6,[s.z,s._1,s.r,s.l,s.i,s.c]),s._19(2048,s.e,null,[s._6]),s._19(512,s.d,s.d,[s.e]),s._19(512,B.a,B.a,[[3,B.a]]),s._19(512,Y.h,Y.h,[]),s._19(512,Y.c,Y.c,[]),s._19(512,g,g,[])])});c.production&&Object(s.U)(),Object(B.j)().bootstrapModuleFactory(E).catch(function(n){return console.log(n)})},gFIY:function(n,l){function t(n){return Promise.resolve().then(function(){throw new Error("Cannot find module '"+n+"'.")})}t.keys=function(){return[]},t.resolve=t,n.exports=t,t.id="gFIY"}},[0]);