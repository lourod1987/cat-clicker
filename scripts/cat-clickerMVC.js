$(document).ready(function() {
    var model = {
        cats: [
            {
                name: 'Milo',
                clickCount: 0
            },
            {
                name: 'Mittens',
                clickCount: 0	
            },
            {
                name: 'Cuddlers',
                clickCount: 0
            },
            {
                name: 'Boots',
                clickCount: 0
            },
            {
                name: 'Smiles',
                clickCount: 0
            }
        ],
        count: [0, 0, 0, 0, 0],
        tracker: [0, 0, 0, 0, 0]
    };
	
    console.log(model.cats[3].name);
    var controller = {
	
    };

    var view = {
        cats: $('div img.cats'),
        thumbs: $('.thumbnail'),
        hide: function() {
            for (let i = 0; i < this.cats.length; i++) {
                $(this.cats[i]).hide();
                $(this.cats[0]).show();
            }
        }
    };
	console.log(view.cats.length);
	view.hide();
});













/*
$(document).ready(function() {
    const count = [0, 0, 0, 0, 0];
    const tracker = [0, 0, 0, 0, 0];
    const $cats = $('div img.cats');
    const $thumbs = $('.thumbnail'); 

    //hide all big cat pictures
    function hideCats() {
        for (let i = 0; i < $cats.length; i++) {
            $($cats[i]).hide();
            $($cats[0]).show();
        }
    }

    function catCount(num) {
        let image;

        $('#numDisp').remove();
        $('#textDisp').append('<i id="numDisp">' + count[num] + '</i>');
        switch(num) {
        case 0:
            image = $($cats[0]);
            if (tracker[0] > 0) {
                $('h1').remove();
                $('h2').prepend('<h1>Milo</h1>');
                return imageClick(image, num, tracker[0]);
            }
            if (tracker[0] === 0) {
                tracker[0]++;
                $('h1').remove();
                $('h2').prepend('<h1>Milo</h1>');
                return imageClick(image, num, 0);
            }
            break;
        case 1:
            image = $($cats[1]);
            if (tracker[1] > 0) {
                $('h1').remove();
                $('h2').prepend('<h1>Shy</h1>');
                return imageClick(image, num, tracker[0]);
            }
            if (tracker[1] === 0) {
                tracker[1]++;
                $('h1').remove();
                $('h2').prepend('<h1>Shy</h1>');
                return imageClick(image, num, 0);
            }
            break;
        case 2:
            image = $($cats[2]);
            if (tracker[2] > 0) {
                $('h1').remove();
                $('h2').prepend('<h1>Tabby and Cuddles</h1>');
                return imageClick(image, num, tracker[0]);
            }
            if (tracker[2] === 0) {
                tracker[2]++;
                $('h1').remove();
                $('h2').prepend('<h1>Tabby and Cuddles</h1>');
                return imageClick(image, num, 0);
            }
            break;
        case 3:
            image = $($cats[3]);
            if (tracker[3] > 0) {
                $('h1').remove();
                $('h2').prepend('<h1>Boots</h1>');
                return imageClick(image, num, tracker[0]);
            }
            if (tracker[3] === 0) {
                tracker[3]++;
                $('h1').remove();
                $('h2').prepend('<h1>Boots</h1>');
                return imageClick(image, num, 0);
            }
            break;
        case 4:
            image = $($cats[4]);
            if (tracker[4] > 0) {
                $('h1').remove();
                $('h2').prepend('<h1>Smiles</h1>');
                return imageClick(image, num, tracker[0]);
            }
            if (tracker[4] === 0) {
                tracker[4]++;
                $('h1').remove();
                $('h2').prepend('<h1>Smiles</h1>');
                return imageClick(image, num, 0);
            }
        }
    }

    function imageClick(image, cat, tracked) {
        image.click(() => {
            count[cat] += 1 - tracked;
            $('#numDisp').remove();
            $('#textDisp').append('<i id="numDisp">' + count[cat] + '</i>');
        });
    }
	
    // loop over the thumbnail images in our array and select the one that is clicked
    for (let i = 0; i < $thumbs.length; i++) {
        var thumb = $($thumbs[i]);

        thumb.click(function() {
            $($cats).hide();
            $($cats[i]).show();               
            catCount(i);
        });
    }

    hideCats();
    catCount(0);
});

*/