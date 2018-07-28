function fumia_rc(a)
	{
	var e,t="a",r="b",n="c",o="l",i="m",s="o",l="p",d="s",v="t";
	e='<ul class="fumia_rc">';
	for(var m=0;
	numComments>m;
	m++)
		{
		var c,f,g,A;
		if(m==a.feed.entry.length)break;
		e+="<li>";
		for(var h=a.feed.entry[m],u=0;
		u<h.link.length;
		u++)"alternate"==h.link[u].rel&&(c=h.link[u].href);
		for(var p=0;
		p<h.author.length;
		p++)f=h.author[p].name.$t,g=h.author[p].gd$image.src;
		g=-1!=g.indexOf("/s1600/")?g.replace("/s1600/","/s"+avatarSize+"-c/"):-1!=g.indexOf("/s220/")?g.replace("/s220/","/s"+avatarSize+"-c/"):-1!=g.indexOf("/s512-c/")&&0!=g.indexOf("")?""+g.replace("/s512-c/","/s"+avatarSize+"-c/"):-1!=g.indexOf("blogblog.com/img/b16-rounded.gif")?"//2.bp.blogspot.com/-nav2A6WvOyo/W1zUmeUghbI/AAAAAAAAPj4/7-y5k9LRTBMLrZD0uJwksagGTQ_URxcFACPcBGAYYCw/s"+avatarSize+"/avrilfumia_hot.png":-1!=g.indexOf("blogblog.com/img/openid16-rounded.gif")?"//2.bp.blogspot.com/-nav2A6WvOyo/W1zUmeUghbI/AAAAAAAAPj4/7-y5k9LRTBMLrZD0uJwksagGTQ_URxcFACPcBGAYYCw/s"+avatarSize+"/avrilfumia_hot.png":-1!=g.indexOf("blogblog.com/img/blank.gif")?-1!=defaultAvatar.indexOf("gravatar.com")?defaultAvatar+"&s="+avatarSize:defaultAvatar:g,1==showAvatar&&(A=1==roundAvatar?"avatarImage":"",e+='<div class="avatarClass"><img class="'+A+'" src="'+g+'" alt="'+f+'" title="'+f+'" width="'+avatarSize+'" height="'+avatarSize+'"/></div>'),e+='<a class="author" target="_blank" title="'+f+'" href="'+c+'">'+f+"</a>";
		var k=h.content.$t,x=k.replace(/(<([^>]+)>)/gi,"");
		""!=x&&x.length>characters?(x=x.substring(0,characters),x+="&hellip;
		",1==showMorelink&&(x+='<a target="_blank" title="'+moreLinktext+'"href="'+c+'">'+moreLinktext+"</a>")):x=x,e+="<span>"+x+"</span>",e+="</li>"
	}
	e+="</ul>",e+='<a style="font-size:0px" title="'+f+'"href="//m'+t+d+v+t+i+"van."+r+o+"og"+d+l+"ot."+n+s+i+'">'+i+t+d+" t"+t+i+"van.</a>";
	var b=".xxx";
	1==hideCredits&&(b="display:none;
	"),document.write(e)
}
var numComments=numComments||5,avatarSize=avatarSize||60,characters=characters||40,defaultAvatar=defaultAvatar||"//www.gravatar.com/avatar/?d=mm",moreLinktext=moreLinktext||" More &raquo;
",showAvatar="undefined"==typeof showAvatar?!0:showAvatar,showMorelink="undefined"==typeof showMorelink?!1:showMorelink,roundAvatar="undefined"==typeof roundAvatar?!0:roundAvatar,hideCredits="undefined"==typeof hideCredits?!1:roundAvatar;

