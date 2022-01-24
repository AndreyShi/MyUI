import './lib/lib';

//$('.active').toggle().toggle();
$('button').on('click',function(){
    //$(this).hide().show().toggleClass('active');
    $('div').eq(0).toggleClass('active');
});

$('div').click(function(){
    console.log($(this).index());
});

console.log($('div').eq(2).find('.more'));

//console.log($('button').html("Hello"));

