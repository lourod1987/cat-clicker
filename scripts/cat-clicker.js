var count0 = 0;
var count1 = 0;
var count2 = 0;
var count3 = 0;
var count4 = 0;
const count = [0, 0, 0, 0, 0];
//console.log(count);


//var cats = [$('#kitten'), $('#cat')];



$(document).ready(function() {
    const $cats = $('div img.cats');
    const $thumbs = $('.thumbnail');
    // var loaded = false;
	
    console.log('thumb list: ' + $thumbs.length); 
    // console.log('cat list: ' + $($cats)); 

    //hide all big cat pictures
    function hideCats() {
        for (let i = 0; i < $cats.length; i++) {
            // $($cats[i]).addClass('hide');
            $($cats[i]).hide();
            $($cats[0]).show();
        }
    }
    
    // if (loaded === false) {
    //     $('#kit').hide();
    //     $('#hidingCat').hide();
    //     $('img#cuddles').hide();
    //     $('img#boots').hide();
    //     $('img#smiles').hide();
    // }
	
    // loaded = true;
	
    // Let's loop over the numbers in our array
    for (let i = 0; i < $thumbs.length; i++) {

        // This is the number we're on...
        var thumb = $($thumbs[i]);

        // We're creating a DOM element for the number
        // var elem = document.createElement('div');
        // elem.textContent = num;

        // ... and when we click, alert the value of `num`
        thumb.click(function() {
            $($cats).hide();
            $($cats[i]).show();
        });
        // document.body.appendChild(elem);
    }

    hideCats();
});

// $('#picBar').click( (evt) => {
//     console.log('click: ' + evt.currentTarget);
//     let selected = evt.currentTarget;
//     $(selected).show();
//     $('.countContain').append(selected).show();
// });




//$('img#cat0').on('click', function() {
//	
//	$('img#hidingCat').hide();
//	$('img#cuddles').hide();
//	$('img#boots').hide();
//	$('img#smiles').hide();
//	
//	$('img#kit').show();
//	$('img#kit').addClass('catStyles');
//	$('img#kit').css('float', 'none');
//	
//	$('h1').remove();
//	$('<h1><strong>Name:</strong> Milo</h1>').insertBefore('h2');
//	$('#countContain h2').remove();
//  	$('#countContain').append('<h2 id="numDisp">Click Count: ' + count0 + '</h2>');
//});
//
//
//$('img#cat1').on('click', function() {
//	
//	$('img#kit').hide();
//	$('img#cuddles').hide();
//	$('img#boots').hide();
//	$('img#smiles').hide();
//	
//	$('img#hidingCat').show();
//	$('img#hidingCat').addClass('catStyles');
//	
//	$('h1').remove();
//	$('<h1><strong>Name:</strong> Mittens</h1>').insertBefore('h2');
//	$('#countContain h2').remove();
//  	$('#countContain').append('<h2 id="numDisp">Click Count: ' + count1 + '</h2>');
//});
//
//
//
//$('img#cat2').on('click', function() {
//	
//	$('img#kit').hide();
//	$('img#hidingCat').hide();
//	$('img#boots').hide();
//	$('img#smiles').hide();
//	
//	$('img#cuddles').show();
//	$('img#cuddles').addClass('catStyles');
//	
//	$('h1').remove();
//	$('<h1><strong>Name:</strong> Cuddlers</h1>').insertBefore('h2');
//	$('#countContain h2').remove();
//  	$('#countContain').append('<h2 id="numDisp">Click Count: ' + count2 + '</h2>');
//});
//
//
//$('img#cat3').on('click', function() {
//	
//	$('img#kit').hide();
//	$('img#hidingCat').hide();
//	$('img#cuddles').hide();
//	$('img#smiles').hide();
//	
//	$('img#boots').show();
//	$('img#boots').addClass('catStyles');
//	
//	$('h1').remove();
//	$('<h1><strong>Name:</strong> Boots</h1>').insertBefore('h2');
//	$('#countContain h2').remove();
//  	$('#countContain').append('<h2 id="numDisp">Click Count: ' + count3 + '</h2>');
//});
//
//
//$('img#cat4').on('click', function() {
//	
//	$('img#kit').hide();
//	$('img#hidingCat').hide();
//	$('img#cuddles').hide();
//	$('img#boots').hide();
//	
//	$('img#smiles').show();
//	$('img#smiles').addClass('catStyles');
//	
//	$('h1').remove();
//	$('<h1><strong>Name:</strong> Smiles</h1>').insertBefore('h2');
//	$('#countContain h2').remove();
//  	$('#countContain').append('<h2 id="numDisp">Click Count: ' + count4 + '</h2>');
//});
//
//$('img#kit').click(function() {
//	count0++;
//	
//	$('#countContain h2').remove();
//  	$('#countContain').append('<h2 id="numDisp">Click Count: ' + count0 + '</h2>');
//  	console.log(count0);
//});
//
//
//$('img#hidingCat').click(function() {
//	count1++;
//	
//	$('#countContain h2').remove();
//  	$('#countContain').append('<h2 id="numDisp">Click Count: ' + count1 + '</h2>');
//  	console.log(count1);
//});
//
//$('img#cuddles').click(function() {
//	count2++;
//	
//	$('#countContain h2').remove();
//  	$('#countContain').append('<h2 id="numDisp">Click Count: ' + count2 + '</h2>');
//  	console.log(count2);
//});
//
//
//$('img#boots').click(function() {
//	count3++;
//	
//	$('#countContain h2').remove();
//  	$('#countContain').append('<h2 id="numDisp">Click Count: ' + count3 + '</h2>');
//  	console.log(count3);
//});
//
//
//$('img#smiles').click(function() {
//	count4++;
//	
//	$('#countContain h2').remove();
//  	$('#countContain').append('<h2 id="numDisp">Click Count: ' + count4 + '</h2>');
//  	console.log(count4);
//});

// clear the screen for testing
//document.body.innerHTML = '';
//
//var $cats = [1,2,3];
//
//// Let's loop over the numbers in our array
//for (var i = 0; i < $cats.length; i++) {
//
//    // This is the number we're on...
//    var num = $cats[i];
//
//    // We're creating a DOM element for the number
//    var elem = document.createElement('div');
//    elem.textContent = num;
//
//    // ... and when we click, alert the value of `num`
//    elem.addEventListener('click', (function(numCopy) {
//        return function() {
//            alert(numCopy);
//        };
//    })(num));
//
//    document.body.appendChild(elem);
//};