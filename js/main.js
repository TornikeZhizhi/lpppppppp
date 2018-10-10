//Home

$(document).ready(function(){

$('.team_slide').owlCarousel({
    loop:true,
    margin:70,
    smartSpeed: 700,
    stagePadding: 10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        551:{
            items:2
        },
        768:{
            items:3
        },
        993:{
            items:4
        },1367:{
            items:5
        }

    }
})

$('.reviews_slide').owlCarousel({
    items:1,
    loop:true,
    dots: true,
    touchDrag:  true,
    mouseDrag: true,
    smartSpeed: 700,
    margin:10,
    autoHeight:true
});


$('.references_content_box').owlCarousel({
    loop:true,
    margin:50,
    smartSpeed: 700,
    stagePadding: 30,
    responsive:{
        0:{
            items:1
        }
       

    }
})


})




$(document).ready(function(){


	$(".news_tittle").click(function(){
		window.location.href = "index.html";
	})
	$(".practice_list_tittle").click(function(){
		window.location.href = "index.html";
	})

	$(".about_tittle h2").click(function(){
		window.location.href = "index.html";
	})


	$(".main_front_arrow_box").click(function(){
		
		window.history.back();
	})

// disclaimer
var desay = 0;
	$(".home_navbar .disclaimer").on("click",function(e){
		e.preventDefault()

		$(this).addClass("active")
		$(".home_navbar_info").addClass("active");	
		$(".vert_tittle").addClass("active");
		$(".navbar_pages").addClass("deactive");

		setTimeout(function(){
			desay = 1;
		},1)
		
	})


	// $(".home_navbar_info").mouseenter(function(){
	// 	desay = 0;
	// })
	// $(".home_navbar_info").mouseleave(function(){
	// 	desay = 1;
	// })


	$(".home_navbar_info").click(function(e){
		e.stopPropagation()
	})

	$("html").on("click",function(event){
			
			if ( desay == 1 ) {
				setTimeout(function(){
					$(".disclaimer").removeClass("active")
					$(".home_navbar_info").removeClass("active");	
					$(".vert_tittle").removeClass("active");
					$(".navbar_pages").removeClass("deactive");
					$(".home_navbar").removeClass("active");
	 				desay = 0;
				},10)
			}
	})
		


// disclaimer



	$(".main_href").on("click",function(e){
		e.preventDefault()

	})


	//Practice areas


	$(".practice_area_text").eq(0).find("p").css("opacity","1")

	$(window).on("load",function(){

		if($(window).width() > 992) {

			$(".practice_area_list_box li").each(function(index){
				$(this).click(function(){
					$(".practice_area_text").css("display","none");
					$(".practice_area_text").eq(index).slideDown(600)
					setTimeout(function(){
						$(".practice_area_text p").css("opacity","0")
						$(".practice_area_text").eq(index).find("p").css("opacity","1")
						

					},50)
				})
			})

		}else if ($(window).width() <= 992){

			$(".practice_area_list_box li").each(function(index){
				$(this).click(function(){
					$(".practice_area_text").css("display","none");
					$(".practice_area_text").eq(index).fadeIn(600)
					setTimeout(function(){
						$(".practice_area_text p").css("opacity","0")
						$(".practice_area_text").eq(index).find("p").css("opacity","1")
						

					},50)
				})
			})

		}

	})


//Practice areas end


	
	// investors down

	$(".investors_prevent li a").click(function(h){
		h.preventDefault()
	})
	$(".investros_content_box").eq(0).css("display","block")
	$(".investors_nav li").each(function(index){
		$(this).click(function(){
			console.log(index)
			$(".investros_content_box").css("display","none");
			$(".investros_content_box").eq(index).fadeIn(900)
		})
	})







	}) //ready function



// slider office


$(document).ready(function(){


   $('.bullet:first-child').click(function(){
           	 $('.owl-dot:first-child').click()
            
            })

             $('.bullet:nth-child(2)').click(function(){
            $('.owl-dot:nth-child(2)').click()
            })


               $('.bullet:last-child').click(function(){
           $('.owl-dot:last-child').click()
            })


//slider 


$(".bullet").eq(0).addClass("active");

	$(".owl-dot").each(function(index){
		$(this).click(function(){

		$(".bullet").removeClass("active");

		

		$(".bullet").eq(index).addClass("active")	
	
		})
	})	

})


// investor table 

$(".main_table a").each(function(index){

	$(this).click(function(h){
		$(".investros_content_box").css("display","none");
		$(".investros_content_box").eq(index).css("display","blocks");
	})

})

$(".resp_table a").each(function(index){

	$(this).click(function(h){
		
		$(".investros_content_box").css("display","none");
		$(".investros_content_box").eq(index).css("display","blocks");
	})

})



// investor table 
$(document).ready(function() {
	  var _gaq = _gaq || [];
	  _gaq.push(['_setAccount', 'UA-36251023-1']);
	  _gaq.push(['_setDomainName', 'jqueryscript.net']);
	  _gaq.push(['_trackPageview']);

		(function() {
		    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
		    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
		    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
		  })();
});
 



 // repsonsive navigattion



 $(document).ready(function(){

 	$("._navigation").fadeOut()

 	$(".responsive_navigation").click(function(){

 		$(".resp_nav_box").toggleClass("active");

 		$(".ham1").toggleClass("active");
 		$(".ham2").toggleClass("active");
 		$(".ham3").toggleClass("active");


 		$(".hamb_for_about").toggleClass("active2");

 		$("._navigation").fadeToggle(100)


 	})



 	$(".li_p").each(function(index){
 		$(this).click(function(){

 			$(this).find("._dropdown_nav").slideToggle()


 		})
 	})



// home page


	$(window).on("load",function(){

		var desay2 = 0;

	if ($(window).width() <= 992) {
			$(".disclaimer").click(function(){
				
				$(".home_navbar").toggleClass("active");
				desay2 = 1;	

			})

		}
	})

 })






