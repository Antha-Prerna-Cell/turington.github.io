


var loadEvents = /*get json object from backend*/'\
[\
	{\
		"Name": "Coding marathon",\
		"tagLine": "May the code be with you!",\
		"eventType":"Game",\
		"description": "A three round tech marathon. Round 1 will be a debugging round. Round 2 will be a url treasure hunt. And the final round will me the main coding round where the contenders will be solving the problem statement provided.",\
		"website":"https://forms.gle/wEvUij4zMGptNA9e7",\
		"logo":"webiesta.svg"\
	},\
	{\
		"Name": "Web designing competition",\
		"tagLine": "Playing with colours",\
		"eventType":"Game",\
		"description": "The participants will be provided with a problem statement on the spot and they will be making a webpage for the same. The use of pre-made templates or WordPress will be monitored.",\
		"website":"https://forms.gle/FXh6XjfaUc5yimT7A",\
		"logo":"pencil-case.svg"\
	},\
	{\
		"Name": "Logo designing competition",\
		"tagLine": "Blurring the line b/w art & technology",\
		"eventType":"Game",\
		"description": "It will be a graphic designing competition where the participants will be given a time frame to make a logo for the department\'s society, Quiksort. ",\
		"website":"https://forms.gle/BwX3hFrhwCBfJ5Lx9",\
		"logo":"designer.svg"\
	},\
	{\
	 	"Name": "Omnicoder",\
	 	"tagLine": "Multi-language coding",\
	 	"eventType":"Game",\
	"description": "Its a multilingual coding competition. The participant will be given a code and he /she will have to write its solution in as many language they can. The one with more languages and up to mark code will be the winner.It will have two rounds.First round will comprise of MCQ questions and Round second will be actual coding round.",\
	 	"website":"https://www.codingninjas.com/events/omnicoder-ramanujan-college ",\
		"logo":"processor.svg"\
 },\
 {\
		"Name": "Pen the tech",\
		"tagLine": "Tech Content writing",\
		"eventType":"Game",\
		"description": "The contestants will be writing a blog on the topic (It will be given on spot!).",\
		"website":"https://forms.gle/ugTaJuVjCxkiQy8W7",\
		"logo":"gameofcodes.svg"\
	}\
]\
';

var loadSponsors = /*get json object from backend*/'\
[\
	{\
		"name":"Coding Ninjas",\
		"logo":"CNLOGO.svg",\
		"website":"https://www.codingninjas.com/",\
		"sponsortype": "Coding Partner"\
	}\
]\
';


var galleryimg=['DSCN2265.JPG', 'IMG_20170327_122046.jpg', 'IMG_3770.JPG', 'DSCN2266.JPG', 'IMG_20170327_124006.jpg', 'IMG_3773.JPG', 'DSCN2267.JPG', 'IMG_20170327_124007.jpg', 'IMG_3774.JPG', 'DSCN2269.JPG', 'IMG_20170327_141116.jpg', 'IMG_3775.JPG', 'DSCN2282.JPG', 'IMG_20170327_141137.jpg', 'IMG_3776.JPG', 'DSCN2285.JPG', 'IMG_20170327_141143.jpg', 'IMG_3777.JPG', 'DSCN2298.JPG', 'IMG_20170327_155713.jpg', 'IMG_3779 (1).JPG', 'DSCN2306.JPG', 'IMG_20170327_155844.jpg', 'IMG_3779.JPG', 'DSCN2359.JPG', 'IMG_20170327_161316.jpg', 'IMG_3781.JPG', 'DSCN2362.JPG', 'IMG_20170327_161354.jpg', 'IMG_3782.JPG', 'DSCN2399.JPG', 'IMG_20170327_161432.jpg', 'IMG_3783.JPG', 'DSCN2436.JPG', 'IMG-20170327-WA0008.jpg', 'IMG_3785.JPG', 'DSCN2437.JPG', 'IMG-20170327-WA0010.jpg', 'IMG_3789.JPG', 'DSCN2439.JPG', 'IMG-20170327-WA0011.jpg', 'IMG_3791.JPG', 'DSCN2446.JPG', 'IMG-20170327-WA0012.jpg', 'IMG_3792.JPG', 'DSCN2447.JPG', 'IMG-20170327-WA0013.jpg', 'IMG_3794.JPG', 'DSCN2474.JPG', 'IMG-20170327-WA0014.jpg', 'IMG_3796.JPG', 'DSCN2496.JPG', 'IMG-20170327-WA0015.jpg', 'IMG_3798.JPG', 'DSCN2510.JPG', 'IMG-20170327-WA0016.jpg', 'IMG_3802.JPG', 'DSCN2517.JPG', 'IMG-20170327-WA0018.jpg', 'IMG_3803.JPG', 'DSCN2524.JPG', 'IMG-20170327-WA0021.jpg', 'IMG_3804.JPG', 'DSCN2552.JPG', 'IMG-20170327-WA0022.jpg', 'IMG_3805.JPG', 'DSCN2775.JPG', 'IMG-20170330-WA0011.jpg', 'IMG_3806.JPG', 'DSCN2779.JPG', 'IMG-20170330-WA0017.jpg', 'IMG_3812.JPG', 'FSCN2500.JPG', 'IMG_3750.JPG', 'IMG_3823.JPG', 'IMG_20170327_115546.jpg', 'IMG_3751.JPG', 'IMG_3824.JPG', 'IMG_20170327_115554.jpg', 'IMG_3752.JPG', 'IMG_3831 (1).JPG', 'IMG_20170327_115605.jpg', 'IMG_3753.JPG', 'IMG_3831.JPG', 'IMG_20170327_115630.jpg', 'IMG_3754.JPG', 'IMG_3832.JPG', 'IMG_20170327_115701.jpg', 'IMG_3755.JPG', 'IMG_3843.JPG', 'IMG_20170327_115802.jpg', 'IMG_3756.JPG', 'IMG_3871.JPG', 'IMG_20170327_115839.jpg', 'IMG_3757.JPG', 'IMG_3881.JPG', 'IMG_20170327_115900.jpg', 'IMG_3759.JPG', 'IMG_3882 (1).JPG', 'IMG_20170327_120245.jpg', 'IMG_3761.JPG', 'IMG_3882.JPG', 'IMG_20170327_120607.jpg', 'IMG_3762.JPG', 'IMG_20170327_120608.jpg', 'IMG_3765.JPG', 'VID_20170327_120155.jpg', 'IMG_20170327_121713.jpg', 'IMG_3766.JPG', 'IMG_20170327_121724.jpg', 'IMG_3767.JPG'];



function updateEvents()
{
	
	var events = JSON.parse(loadEvents);
	var html = document.getElementById("eventsContainer");

	var text="";

	for(i in events)
	{
		text+= '<a href="'+events[i].website+'">';
		text+= '<div class="eventBox" ><center>';
		text+= '<div class="eventLogo" style="background-image:url(\'img\/'+events[i].logo+'\')"></div>';
		text+= '<div>';
		text+= '<div class="eventName">'+events[i].Name+'</div>';
		text+= '<div class="eventTagLine">&lt;'+events[i].tagLine+'/&gt;</div>';
		text+= '<div class="eventDescription">'+events[i].description+'</div>';
		text+= '<button href="'+events[i].website+'">Register Now</button>';
		text+= '</center></div>';
		text+= '</div>';

		text+='</a><br>';
	}

	html.innerHTML=text;			
			
}


function getSponsors()
{
	var sponsors = JSON.parse(loadSponsors);

	var html = document.getElementById("sponsorsContainer");

	var text="";

	for(i in sponsors)
	{
		text+= '<a href="'+sponsors[i].website+'">';
		text+= '<div class="sponsorTemplate"><strong><center>';
		text+= '<div>'+sponsors[i].name+'</div>';
		text+= '<div><img class="sponsorimg" src="img/sponsors/'+sponsors[i].logo+'"></div>';
		text+= '<div>'+sponsors[i].sponsortype+'</div>';
		text+= '</center></strong></div>';
		text+='</a>';
	}

	html.innerHTML=text;

}

var sliderIndex = Math.floor((Math.random()*(galleryimg.length-6)));
var newslide=0;

function createGallery()
{
	var html = document.getElementById("galleryContainer");
	var text = "";

	text+='<div class="row">';
	//text+='<div class="column">';

	for(var i=0;i<galleryimg.length;i++)
	{
		//if((i%20==0)&&(i!=galleryimg.length-1))
		{
			//if(i!=0)
			//	text+="</div>";
			//text+='<div class="row">';
		}

		if((i%5==0)&&(i!=galleryimg.length-1))
		{
			if(i!=0)
				text+="</div>";
			text+='<div class="column">';
		}

		text+='<img src="img/gallery/'+galleryimg[i]+'\" style="width:100%">';

	}
	text+="</div></div>";


	html.innerHTML=text;
}

function updateGallery()
{
	var html = document.getElementById("galleryContainer");

	var slidecount=newslide;
	var slides=[];
	for(var i=0;i<5;i++)
	{
		slides[i]=document.getElementById("gimg"+slidecount);
		slidecount++;
		if(slidecount==5) slidecount=0;
	}
		console.log(newslide);


	newslide+=1;
	if(newslide==5) newslide=0;
	
	if(sliderIndex+6>galleryimg.length)
	{
		sliderIndex = 0;
		createGallery();
		return;
	}

	//slides[0].classList.add("gimg-hide");

	var width =slides[0].width;

	//slides[0].style.transform="translate(0,0)";

	for(var i=1;i<5;i++)
	{
		//slides[i].style.transform="translate(0,0)";
		slides[i].style.left=width*(i-1);
	}

	slides[0].style.left=slides[4].style.left+slides[4].style.width;

    slides[0].classList.remove("gimg-hide");
    for(var i=0;i<5;i++)
	{
		//slides[i].style.transform="translate(-100%,0)";
	}
    
   

    
    slides[0].setAttribute('src', "img/gallery/"+galleryimg[sliderIndex+5]);
    sliderIndex+=1;

	setTimeout(updateGallery, 5000);
}



function getAbout()
{

}

function getGlimpses()
{

}

function setTimer()
{
	var festDate = new Date("April 8, 2021 10:00:00").getTime();
	var countdown = setInterval(function() {
		var now = new Date().getTime();
		var distance = festDate - now;
		var days = Math.floor(distance / (1000 * 60 * 60 * 24));
		var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

		if(days==-1 || days==-2)
		{
			document.getElementById("timer").innerHTML = 'Festival is On, WELCOME!!';
			document.getElementById("timer").style.display = "inline";
			return
		}
		if(days<-2)
		{
			document.getElementById("timer").innerHTML = 'The event has ended... for this year!';
			document.getElementById("timer").style.display = "inline";
			return
		}

		document.getElementById("days").innerHTML = days;
		document.getElementById("hours").innerHTML = hours;
		document.getElementById("minutes").innerHTML = minutes;
		
	}, 1000);
}
