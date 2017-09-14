/**
 * Created by weiqiujuan on 17-9-13.
 */
$(document).ready(function () {

    /*设置默认激活的选项卡eq(i)*/
    var aL = $(".list:eq(0)");//默认从0开始;
    $("#active").width(aL.innerWidth());
    $("#active").offset(aL.offset());
    aL.addClass("listA");

    /*为每个按钮添加点击事件*/
    $(".list").click(function() {
        $("#active").width($(this).innerWidth());   //设置宽度
        $("#active").offset($(this).offset());   //设置位置
        $(this).addClass("listA");
        $(".list").not(this).removeClass("listA");
    });

    /*hover效果*/
    $(".list").hover(function () {
        $(this).addClass("listH");
    },function () {
        $(this).removeClass("listH");
    });

});