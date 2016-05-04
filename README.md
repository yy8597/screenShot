# 网页截图测试
测试使用phantomjs截取html为图片的功能

# android sdk 接口
```
public interface YMJsInterface {
    @JavascriptInterface //sdk17版本以上加上注解
    void onViewClosed();

    @JavascriptInterface
    void onViewClicked();

    @JavascriptInterface
    void onViewClicked(String adid, String isShelter); /2 add, isShelter: 0 or 1

    @JavascriptInterface
    void writeLog(String log);
}
```

# 注意
模板中不能出现```\\```