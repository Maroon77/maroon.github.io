function getByClass(oParent, sClassName)
	{
    	var aElm=oParent.getElementsByTagName('*');
    	var aArr=[];
    	for(var i=0; i<aElm.length; i++)
    	{
        	if(aElm[i].className==sClassName)
        	{
            	aArr.push(aElm[i]);
        	}
    	}
    	return aArr;
	}
window.onload=function(){
	var oDiv=document.getElementById('txt_list');
	var oUl=document.getElementById("tab1");
	var oLi=oUl.getElementsByTagName("li");
	var oTabtxt=getByClass(oDiv,'txt_ul');
	for( var i=0;i<oLi.length;i++){
		  oLi[i].index=i;
		  oLi[i].onmouseover=function(){
			  for(var i=0;i<oLi.length;i++){
				  oLi[i].className="";
				  oTabtxt[i].style.display="none";
				  }
				  this.className="active";
				  oTabtxt[this.index].style.display="block";
			  }
		}
	}