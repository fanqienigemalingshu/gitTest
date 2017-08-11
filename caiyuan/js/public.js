/**
 * Created by Administrator on 2016/3/7   0007.
 */
function loading_Waiting(){
    var loadingHtml =   '<img class="loading_img" style="position: fixed;top:50%;left:50%;z-index:1000;" src="../images/482.GIF"/>'+
        '<div class="cover_layer"></div>';
    $("body").append(loadingHtml).css("overflow","hidden");
}
function loading_cancal(){
    $(".loading_img").remove();
    $(".cover_layer").remove();
    $("body").css("overflow","auto");
}
