var dom=document.documentElement;
var meta=document.querySelector('meta[name="viewport"]');
var clientW,rem;

function getSingle(fn,time){
	var timer=null;
	
	return function(){
		if(timer){
			return;
		}
		
		timer=setTimeout(function(){
			timer=null;
			fn.call(this);
		},time||300);
	}
}


function remReset(){
	clientW=dom.clientWidth;
	if(clientW>=1024){
		clientW=1024;
	}
	rem=clientW/10;
	dom.style['font-size']=rem+'px';
}

function pxToRem(px){
	return px/rem;
}


remReset();
window.addEventListener('resize',remReset);

export {getSingle,pxToRem};
