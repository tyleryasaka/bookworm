var showpage=1,pagecount=0;
checkBookmark();

$(document).ready(function() {
	
	var parts = new Array();
	var currentpartobj,currentpart,currentpartlen,currentpage,
	currentpagelen=0;
	var content = $('#bookworm-content').html();
	var countelements = $('#bookworm-content').children().size();
	
	$(document.body).append('<div id="currentpart"></div>');
	$(document.body).append('<div id="currentpage"></div>');
	
	for(i=0;i<countelements;i++) {
		currentpartobj = $('#bookworm-content').children().eq(0);
		$('#currentpart').html(currentpartobj);
		currentpart=$('#currentpart').html();
		currentpage=$('#currentpage').html();
		currentpartlen=$('#currentpart').text().length;
		
		//If an element exceeds page limit, put on separate page
		if(currentpartlen>pagelimit) {
			createPage(currentpage);
			createPage(currentpart);
			pagecount+=2;
			$('#currentpage').empty();
			currentpagelen=0;
		}
		
		//if under page limit with part, add part to page
		else if(currentpage.length+currentpartlen<pagelimit) {
			$('#currentpage').append(currentpart);
			currentpagelen+=currentpartlen;
		}
		
		//if over page limit with part, start new page
		else {
			createPage(currentpage);
			pagecount++;
			$('#currentpage').html(currentpart);
			currentpagelen=currentpartlen;
		}
	}
	//create final page
	createPage(currentpage+currentpart);
	
	pagecount++;
	togglePage();
	createPageList();
	
	//add event listener for page jump
	$('.bookworm-control .pagejump select').change(function() {
		jumpToPage($('.bookworm-control .pagejump select').val());
	});
} );

function createPage(content) {
	$('#bookworm-display').append('<div class="page">'+content+'</div>');
}

function nextPage() {
    togglePage();
    if(showpage<pagecount) showpage+=1;
    togglePage();
    createPageList();
    $("html, body").scrollTop($('#bookworm-display').offset().top);
}

function prevPage() {
    togglePage();
    if(showpage>1) showpage-=1;
    togglePage();
    createPageList();
    $("html, body").scrollTop($('#bookworm-display').offset().top);
}

function jumpToPage(index) {
	togglePage();
	showpage=parseInt(index);
	togglePage();
	createPageList();
}

function togglePage() {
    $('#bookworm-display div.page:nth-child('+showpage+')').toggleClass('show-page');
    $('.bookworm-control .counter').html('Page '+showpage+' of '+pagecount);
}

function createPageList() {
	var pagelist="";
	for(i=0;i<pagecount;i++){
		j=i+1
		if(j!=showpage) pagelist=pagelist+'<option>'+j+'</option>';
		else pagelist=pagelist+'<option selected="selected">'+j+'</option>';
	}
	$('.bookworm-control .pagejump select').html(pagelist);
}

function checkBookmark() {
	var cookiename='bookmark'+chapter;
	if(readCookie(cookiename)) {
		showpage=parseInt(readCookie(cookiename));
	}
}

function createBookmark() {
	var cookiename='bookmark'+chapter;
	createCookie(cookiename,showpage,90);
	alert('Cool, when you come back I\'ll have page '+showpage+' open for you. :)');
}

function createCookie(name,value,days) {
  if (days) {
    var date = new Date();
    date.setTime(date.getTime()+(days*24*60*60*1000));
    var expires = "; expires="+date.toGMTString();
  }
  else var expires = "";
  document.cookie = name+"="+value+expires+"; path=/";
}

function readCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for(var i=0;i < ca.length;i++) {
    var c = ca[i];
    while (c.charAt(0)==' ') c = c.substring(1,c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
  }
  return null;
}

function eraseCookie(name) {
  createCookie(name,"",-1);
}
