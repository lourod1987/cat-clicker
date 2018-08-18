$(document).ready(function() {
    /* 		Model
	======================= */
    var model = {
        cats: [
            {
                name: 'Milo',
                clickCount: 0,
                img: './images/cuteKitten.jpg'
            },
            {
                name: 'Mittens',
                clickCount: 0,
                img: './images/hidingCat.jpg'	
            },
            {
                name: 'Tabby and Cuddles',
                clickCount: 0,
                img: './images/catCuddles.jpg'
            },
            {
                name: 'Boots',
                clickCount: 0,
                img: './images/boots.jpg'
            },
            {
                name: 'Smiles',
                clickCount: 0,
                img: './images/smileyCat.jpg'
            }
        ],
        tracker: [0, 0, 0, 0, 0]
    };
	
    /* 		Controller
	======================= */
    var controller = {
        init: function () {
            view.hide();
            view.select();
            view.thumbs[0].click();
        },
        increment: function (image, cat, tracked) {
            image.click(() => {
                model.cats[cat].clickCount += 1 - tracked;
                $('#numDisp').remove();
                $('#textDisp').append(`<i id="numDisp">${model.cats[cat].clickCount}</i>`);
            });
        }
    };

    /* 		View
	======================= */
    var view = {
        catImg: $('div img.cats'),
        thumbs: $('.thumbnail'),
        hide: function() {
            for (let i = 0; i < this.catImg.length; i++) {
                $(this.catImg[i]).hide();
            }
        },
        reveal: function (num) {
            let image;
	
            $('#numDisp').remove();
            $('#textDisp').append('<i id="numDisp">' + model.cats[num].clickCount + '</i>');
            switch(num) {
            case 0:
                image = $(this.catImg[0]);
                if (model.tracker[0] > 0) {
                    $('h1').remove();
                    $('h2').prepend(`<h1>${model.cats[0].name}</h1>`);
                    return controller.increment(image, num, model.tracker[0]);
                }
                if (model.tracker[0] === 0) {
                    model.tracker[0]++;
                    $('h1').remove();
                    $('h2').prepend(`<h1>${model.cats[0].name}</h1>`);
                    return controller.increment(image, num, 0);
                }
                break;
            case 1:
                image = $(this.catImg[1]);
                if (model.tracker[1] > 0) {
                    $('h1').remove();
                    $('h2').prepend(`<h1>${model.cats[1].name}</h1>`);
                    return controller.increment(image, num, model.tracker[0]);
                }
                if (model.tracker[1] === 0) {
                    model.tracker[1]++;
                    $('h1').remove();
                    $('h2').prepend(`<h1>${model.cats[1].name}</h1>`);
                    return controller.increment(image, num, 0);
                }
                break;
            case 2:
                image = $(this.catImg[2]);
                if (model.tracker[2] > 0) {
                    $('h1').remove();
                    $('h2').prepend(`<h1>${model.cats[2].name}</h1>`);
                    return controller.increment(image, num, model.tracker[0]);
                }
                if (model.tracker[2] === 0) {
                    model.tracker[2]++;
                    $('h1').remove();
                    $('h2').prepend(`<h1>${model.cats[2].name}</h1>`);
                    return controller.increment(image, num, 0);
                }
                break;
            case 3:
                image = $(this.catImg[3]);
                if (model.tracker[3] > 0) {
                    $('h1').remove();
                    $('h2').prepend(`<h1>${model.cats[3].name}</h1>`);
                    return controller.increment(image, num, model.tracker[0]);
                }
                if (model.tracker[3] === 0) {
                    model.tracker[3]++;
                    $('h1').remove();
                    $('h2').prepend(`<h1>${model.cats[3].name}</h1>`);
                    return controller.increment(image, num, 0);
                }
                break;
            case 4:
                image = $(this.catImg[4]);
                if (model.tracker[4] > 0) {
                    $('h1').remove();
                    $('h2').prepend(`<h1>${model.cats[4].name}</h1>`);
                    return controller.increment(image, num, model.tracker[0]);
                }
                if (model.tracker[4] === 0) {
                    model.tracker[4]++;
                    $('h1').remove();
                    $('h2').prepend(`<h1>${model.cats[4].name}</h1>`);
                    return controller.increment(image, num, 0);
                }
            }
        },
        select: function() {
            for (let i = 0; i < this.thumbs.length; i++) {
                let thumb = $(this.thumbs[i]);
		
                thumb.click(function() {
                    $(view.catImg).hide();
                    // $(view.catImg[i]).show();
                    $('#countContain').prepend(`<img src="${model.cats[i].img}">`);
                    view.reveal(i);
                });
            }
        }
    };

    controller.init();
});