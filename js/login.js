/**
 * Created by weiqiujuan on 17-9-14.
 */
$(function () {
    $("#userAdd").off();
    $("#userAdd").submit(function () {
        var name = $(this).find("[name='name']").val();
        var password = $(this).find("[name='password']").val();
        var User = new User(name,password);
        //调用保存方法
        saves(User,function () {
            alert("登录成功！");
            //保存后重置表单
            //$("#userAdd")[0].reset();
        });
    });
});