$(function () {
    //固定导航栏
    if($(document).scrollTop()>$(".header").height()){
        $(".slideShow").css("padding-top",$(".header").height())
    }
    else{
        $(".slideShow").css("padding-top",0);
    }
    //返回顶部
    $("#back").click(function () {
        $("body").animate({"scrollTop":0});
    });
    //登录跳转
    $("#login").click(function () {
        window.location.href = "注册页面/login.html";
    });
    //注册跳转
    $("#register").click(function () {
        window.location.href = "注册页面/register.html";
    })
    //二维码显示
    $("#app").mouseenter(function () {
        $("#er").slideDown();
        $("#er").css({"position": "abdolute", "top": $("#app").offset().top + 30})
    });
    $("#app").mouseleave(function () {
        $("#er").slideUp();
    });
    //底部二维码的滑入
    $("#sina").mouseenter(function () {
        $("#sinaer").stop().slideDown();
    });
    $("#sina").mouseleave(function () {
        $("#sinaer").stop().slideUp();
    });

    $("#wechat").mouseenter(function () {
        $("#wechater").stop().slideDown();
    });
    $("#wechat").mouseleave(function () {
        $("#wechater").stop().slideUp();
    });
    //地址显示
    $("#tangle").mouseenter(function () {
        $("#address").stop().slideDown();
        $("#address").css({"position": "abdolute", "top": $("#tangle").offset().top + 25})

    });
    $("#address").mouseleave(function () {
        $("#address").stop().slideUp();
    })
    $("select option").click(function () {
        $("#currentcity").text($(this).text());
    });
    //无缝轮播图
    var ul = document.getElementById("ul");
    var ol = document.getElementById("ol");
    var imgWidth = $("#ul img").width();
    var olLiArr = ol.children;
    var ulLiArr = ul.children;
    ul.appendChild(ulLiArr[0].cloneNode(true));

    $("#ol li").mouseenter(function () {
        var index=$(this).index();
        $(".slideShow #ul").stop().animate({"margin-left":-index*imgWidth},200);
        $(this).css("background-color","#442818").siblings("li").css("background-color","#fff")
        square=key=index;
    });
    var square = 0;
    var key = 0;
    //左侧焦点图
    $("#left").click(function () {
        square--;
        key--;
        if (square == -1) {
            square = 2;
        }
        if (key == -1) {
            key = 2;
            ul.style.left = -3 * imgWidth + "px";
        }
        var sss=-key*imgWidth;
        $(".slideShow #ul").stop().animate({"margin-left":sss});
        $("#ol li").eq(key).css("background-color","#442818").siblings("li").css("background-color","#fff");
    })
    //右侧焦点图
    $("#right").click(function () {
        square++;
        key++;
        if (square == 3) {
            square = 0;
        }
        if (key == 4) {
            key = 0;
            ul.style.left = 0;
        }
        var sss=-key*imgWidth;
        $(".slideShow #ul").stop().animate({"margin-left":sss});
        $("#ol li").eq(key).css("background-color","#442818").siblings("li").css("background-color","#fff");
    });

    //定时器设置
    var timer = setInterval(autoPlay, 1000);
    $(".slideShow").mouseenter(function () {
        $("#arrow").stop().fadeIn();
        clearInterval(timer);
    })
    $(".slideShow").mouseleave(function () {
        $("#arrow").stop().fadeOut();
        timer = setInterval(autoPlay, 1000);
    });
    //封装定时器函数
    function autoPlay() {
        square++;
        key++;
        if (square == 3) {
             square = 0;
        }
        if (key == 4) {
            key = 0;
            ul.style.left = 0;
        }
        var sss=-key*imgWidth;
        $(".slideShow #ul").animate({"margin-left":sss});
        $("#ol li").eq(key).css("background-color","#442818").siblings("li").css("background-color","#fff");
    }
    //楼层跳跃
    $(document).scroll(function () {
        if($(document).scrollTop()>800){
            $(".floor").show();
        }
    });
    //楼层跳跃
    $("#gift").click(function () {
        $(document).scrollTop($(".card1").offset().top);
        $(".floor li").eq(0).css("background-color","#442818").sibling("li").css("background-color","#fff");
//                $(this).css("background-color","#442818").sibling("li").css("background-color","#fff");
    });
    $("#enjoy").click(function () {
        $(document).scrollTop($(".card2").offset().top);
        $(this).css("background-color","#442818").sibling("li").css("background-color","#fff");
    });
    $("#store").click(function () {
        $(document).scrollTop($(".card3").offset().top);
        $(this).css("background-color","#442818").sibling("li").css("background-color","#fff");
    })
})