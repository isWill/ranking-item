/**
 * 判断当前是否为移动设备
 * 返回：true为移动设备 false不是移动设备
 * @returns {boolean}
 */
function isMobileDevice() {
    var ConcertUtilBrowser = {
        versions: (function() {
            var u = navigator.userAgent,
                app = navigator.appVersion;
            return { //移动终端浏览器版本信息
                ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
                android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或uc浏览器
                iPhone: u.indexOf('iPhone') > -1, //是否为iPhone或者QQHD浏览器
                iPad: u.indexOf('iPad') > -1 //是否iPad
            };
        })()
    }
    if (((ConcertUtilBrowser.versions.ios && !ConcertUtilBrowser.versions.iPad) || ConcertUtilBrowser.versions.android)) {
        return true;
    } else {
        return false;
    }
}

/**
 * 根据当前屏幕分辨率设置rem
 * 屏宽750px及以上 1rem=100px
 * 屏宽750px以下 1rem=当前屏宽/750*100px
 */
function setRem() {
    if (isMobileDevice()) {
        document.documentElement.style.fontSize = (document.documentElement.clientWidth > 750 ? 100 : document.documentElement.clientWidth * 100 / 750) + 'px';
    }
}

/**
 * 添加监听以实现rem的实时更新
 */
function resetRem() {
    setRem();
    if(window.addEventListener) {
        document.addEventListener('DOMContentLoaded', function () {
            setRem();
        });

        window.addEventListener('load', function () {
            setTimeout(setRem, 300);
        });

        window.addEventListener('resize', function () {
            setTimeout(setRem, 300);
        });
    }
}
/**
 * 初始化操作
 * 添加touchstart监听,解决移动端active伪类无效问题
 * 根据当前屏幕分辨率设置rem 屏宽750px及以上 1rem=100px 屏宽750px以下 1rem=当前屏宽/750*100px
 * 生成cookie鉴权参数
 */
resetRem();