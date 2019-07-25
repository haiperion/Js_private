//jQueryはhtml側で呼び出していれば、別にjsファイルを呼び出すだけでjQueryが適応されている。

//jQueryを適用させるには、適用したいコードの前に書くこと
$(function(){
    $(".ao").css("color","blue").css("border", "1px solid red");
    //一先ずこれでclass:aoの文字が青くなった！
});

$(function(){
    $("#manabu").css("background-color", "pink")//文字の背景色がピンクに
});

$(function(){
    $("<li>三郎<li>").appendTo("#family") //idがfamiryのやつに三郎の文字が追加される
});

$(function(){//クリックすると緑色に変化する
    $(".hoge2A").click(function(){// クリック時のイベント
        $(this).css("background-color", "yellow")
        //thisというのは同じセレクタを指定するという意味
        //ここでは.hoge2Aを指定している
    });
});