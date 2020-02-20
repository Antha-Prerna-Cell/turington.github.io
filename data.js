


var loadEvents = /*get json object from backend*/'\
[\
	{\
		"Name": "HackRCDU",\
		"tagLine": "May the code be with you!",\
		"eventType":"Game",\
		"description": "Solve real-world problems using the power of code! Come in teams of 4 and compete against others to grab prizes and goodies kept just for you. HackRcdu is a 2-day hackathon event that will judge the innovation of your solution and your coding skills(tech stack, algorithms, UI/UX etc.) to award the best among you.",\
		"website":"https://hackrcdu.turington.in/",\
		"logo":"webiesta.svg"\
	},\
	{\
		"Name": "QR-Hunt",\
		"tagLine": "Treasure hunt with a cool technical twist",\
		"eventType":"Game",\
		"description": "This is modernistic form of Treasure Hunt where the clues will be hidden throughout the Ramanujan Campus in the form of QR instead of those traditional envelopes. The game will start with a beg-borrow-steel round followed by  <strong>crack the clue</strong> round.The winning team will win exciting cash prizes along with vouchers.",\
		"website":"https://forms.gle/B7b3ARwC2DmvsQHk9",\
		"logo":"qrhunt.svg"\
	},\
	{\
		"Name": "Coding Marathon",\
		"tagLine": " A pack of coding events",\
		"eventType":"Game",\
		"description": "This is a sub-event of Turington and our event stack includes Andhadhun, Web Hunt, OmniCoder. One of their kind! <br> <br> Participate independently in one or all 3! As you like.",\
		"website":"https://forms.gle/B7b3ARwC2DmvsQHk9",\
		"logo":"gameofcodes.svg"\
	},\
	{\
		"Name": "Chitti 3.0",\
		"tagLine": "Supercool Muzzle robo race.",\
		"eventType":"Game",\
		"description": "This is a supercool robo race competition. It is the event where you get to test the efficiency and power, skills of your robo car. It provides you a track for the open your enthusiasm for the rush to win with your robots.<br> Race your bots till the finish line and earn accolades.",\
		"website":"https://forms.gle/B7b3ARwC2DmvsQHk9",\
		"logo":"chitti.svg"\
	},\
	{\
		"Name": "Debug The Code",\
		"tagLine": "Can you assassinate the Bug?",\
		"eventType":"Game",\
		"description": "In today’s world anyone can overcome programming errors by using certain tools. Would you dare to take a head on challenge on the work of a lousy programmer? A program with god knows how many errors, without using any outside tools or in-built debugger in the system.",\
		"website":"https://forms.gle/B7b3ARwC2DmvsQHk9",\
		"logo":"chitti.svg"\
	},\
	{\
		"Name": "Tambola",\
		"tagLine": "It\'s all about luck",\
		"eventType":"Game",\
		"description": "Tambola is played with Numbers (1-90) being called out one at a time and players striking out those Numbers on their Tickets.<br> In order to win in Tambola, you need to match ticket with all the 15 numbers marked first(house full)",\
		"website":"https://forms.gle/B7b3ARwC2DmvsQHk9",\
		"logo":"tambola.svg"\
	},\
	{\
		"Name": "Rangbaaz",\
		"tagLine": "Playing with colours",\
		"eventType":"Game",\
		"description": "We have Face painting and Tshirt Painting competition for you. Bring all the exciting colours and your crazy friend with you and win cool prizes!",\
		"website":"https://forms.gle/B7b3ARwC2DmvsQHk9",\
		"logo":"pencil-case.svg"\
	},\
	{\
		"Name": "UI/UX-Designer Event",\
		"tagLine": "Blurring the line b/w art & technology",\
		"eventType":"Game",\
		"description": "Unleash your creativity with UI/UX- our Designer event! Create designs for Web/Mobile Apps on enthralling themes and get a chance to bag cash prizes worth 2500!",\
		"website":"https://forms.gle/B7b3ARwC2DmvsQHk9",\
		"logo":"designer.svg"\
	}\
]\
';

var loadSponsors = /*get json object from backend*/'\
[\
	{\
		"name":"WADHWA OPTICS",\
		"logo":"plain-white-background.jpg",\
		"website":"#",\
		"sponsortype": "VR Headset Partner"\
	},\
	{\
		"name":"Coding Blocks",\
		"logo":"cblogo.png",\
		"website":"https://codingblocks.com/",\
		"sponsortype": "Coding Partner"\
	},\
	{\
		"name":"Coding Ninjas",\
		"logo":"CNLOGO.svg",\
		"website":"https://www.codingninjas.com/",\
		"sponsortype": "Coding Partner"\
	},\
	{\
		"name":"Geeks For Geeks",\
		"logo":"geeksforgeeks-6.png",\
		"website":"https://www.geeksforgeeks.org/",\
		"sponsortype": "Coding Partner"\
	},\
	{\
		"name":"Blue leaves",\
		"logo":"blue-leaves.jpg",\
		"website":"https://www.instagram.com/blueleavescommunity/",\
		"sponsortype": "Media Partner"\
	},\
	{\
		"name":"DU VIBES",\
		"logo":"DUVIBES.jpeg",\
		"website":"https://www.instagram.com/duvibes_/?hl=en",\
		"sponsortype": "Media Partner"\
	},\
	{\
		"name":"DU BEAT",\
		"logo":"36924384_213064919352891_676374602280075264_n.jpg",\
		"website":"https://www.instagram.com/du_beat/?hl=ens",\
		"sponsortype": "Media Partner"\
	},\
	{\
		"name":"THE CAMPUS MEDIA",\
		"logo":"29400420_553066068399537_6444360456395030528_n.jpg",\
		"website":"https://www.instagram.com/thecampusmedia/",\
		"sponsortype": "Media Partner"\
	},\
	{\
		"name":"DU EXPRESS",\
		"logo":"51605493_299705310603864_1920568990834114244_n.jpg",\
		"website":"https://www.instagram.com/duexpress/?hl=en",\
		"sponsortype": "Media Partner"\
	},\
	{\
		"name":"DU Assassins",\
		"logo":"du-assassins.jpg",\
		"website":"https://www.instagram.com/du_assassins/",\
		"sponsortype": "Media Partner"\
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
	var festDate = new Date("Feb 28, 2020 10:00:00").getTime();
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
