import './lib/lib';

//$('.active').toggle().toggle();
$('button').on('click',function(){
    $(this).hide().show().toggleClass('active');
});

