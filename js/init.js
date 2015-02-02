
var productArray = ['website', 'internet', 'programming', 'code', 'web', 'information', 'social', 'html', 'php', 'mongoDB', 'rails', 'CSS', 'HTML5'],
positionArray = ['maker', 'artisan', 'ninja', 'architect', 'designer', 'monkey', 'developer', 'craftsman', 'guru'],
greetingArray = ['hello', 'sup', 'salutations', 'what up', 'yo'];

$(document).ready(function() {
	//generate portfolio blurb
	function generateTitle() {
		// if not filled out do an error, else show
		// 
		var validate = true;
		$('.alert-danger').remove();
		if($('.input-name').val() == '') {
			$('.input-name').after('<div class="alert-danger ">Please enter a name.</div>');
			validate = false;
		} if($('.input-city').val() == '') {
			$('.input-city').after('<div class="alert-danger">Please enter a city.</div>');
			validate = false;
		} 

		if(validate) {	
			$('.initial-form').hide();
			$('.user').text($('.input-name').val());
			$('.city').text($('.input-city').val());
			var productTitle = productArray[Math.floor(Math.random()* productArray.length)];
			
			$('.product').text(productTitle);
			//TODO: check if product title begins with vowel, if so, change to 'an'
			//
			if(productTitle.substr(0,1) == 'i') {
				var newText = $('.result-container').html().replace(' a ', ' an ');
				$('.result-container').html(newText);
			} else {
				var newText = $('.result-container').html().replace(' an ', ' a ');
				$('.result-container').html(newText);
			}
			$('.position').text(positionArray[Math.floor(Math.random()* positionArray.length)]);
			$('.greeting').text(greetingArray[Math.floor(Math.random()* greetingArray.length)]);
			$('.result').show();

		}

	}

	function reset() {
		$('.initial-form').show();
		$('.user').text($('.input-name').val());
		$('.city').text($('.input-city').val());
		$('.result').hide();
	}

	function toggleInfo() {
		$('.info').slideToggle();
	}

	//on submit, generate title
	$('.btn-submit').on('click', generateTitle);
	$('.btn-reset').on('click', reset);
	$('.btn-more-info').on('click', toggleInfo);
});
