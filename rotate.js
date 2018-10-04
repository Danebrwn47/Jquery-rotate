$(document).ready(function () {
    var $todo = $(".test-block");
    var interval = setInterval(function () {
        var $el = $todo.eq(Math.floor(Math.random() * $todo.length)).addClass('active');
        setTimeout(function () {
            $el.removeClass('active');
        }, 1500)
        if ($todo.length == 1) {
            clearInterval(interval);
        }
        $todo =$todo.not($el);
    }, Math.floor((Math.random() * 0) + 1500));
});
