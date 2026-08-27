/* ----------------------------------------------------------------------------------------------------/
  カレント判定
/---------------------------------------------------------------------------------------------------- */
$(function() {
    var target = $("article").attr("data-page");
    $("#nav ul li").each(function() {
        if( $(this).attr("class") == target ) {
            $(this).addClass("crrt");
        }
    });
});
/* ----------------------------------------------------------------------------------------------------/
  ページ送り
/---------------------------------------------------------------------------------------------------- */
function onLink(i){
    var file = location.pathname.split("/").pop(); // solo el nombre del archivo, p.ej. "page03.html" (ignora carpetas como "manual.htdocs")
    var num = parseInt(file.match(/\d+/), 10);      // extrae el numero de pagina, p.ej. 3
    location.href = "page" + ("00" + (num + i)).slice(-2) + ".html";
}
/* ----------------------------------------------------------------------------------------------------/
  トップへスクロールボタン
/---------------------------------------------------------------------------------------------------- */
$(function() {
    var TopBtn = $('.pageTop');
    var BottomPos = 10; // ボタンの画面下からの位置を指定
    TopBtn.hide();
    $(window).scroll(function(e) {
        $window = $(e.currentTarget);
        WindowHeight = $window.height(); // ウィンドウの高さ
        PageHeight = $(document).height(); // ページの高さ
        footerHeight = $("#footer").height(); // フッタの高さ
        ScrollTop = $window.scrollTop(); // スクロールした量
        MoveTopBtn = WindowHeight + ScrollTop + footerHeight - PageHeight;
        //スクロール位置が指定数値でボタンを表示
        if ($(this).scrollTop() > 100) {
            TopBtn.fadeIn();
        } else {
            TopBtn.fadeOut();
        }
        // フッターまでスクロールするとボタンを移動
        if (ScrollTop >= PageHeight - WindowHeight - footerHeight + BottomPos) {
            TopBtn.css({ bottom: MoveTopBtn });
        } else {
            TopBtn.css({ bottom: BottomPos });
        }
    });
    //ボタンを押下するとトップへ移動
    TopBtn.click(function() {
        $('body,html').animate({
            scrollTop: 0
        }, 300);
        return false;
    });
});
