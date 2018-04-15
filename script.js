var addBeer = function(name, category) {
    // alert("name: "+name+"\ncategory: "+category);
    beers.push({
        name : name,
        category : category
    });
};

var handlePostBeer = function() {
    addBeer($('.beer-input').val(), $('.category-input').val());
    renderBeers();
};

$('.post-beer').on('click', handlePostBeer);

var beers = [];

var renderBeers = function() {
    $('.beers-list').find('li').remove();
    beers.forEach((beerObj) => $('.beers-list').append("<li>"+beerObj.name+"</li>"));
}