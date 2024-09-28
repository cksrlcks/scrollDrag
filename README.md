# Horizontal scroll with mouse drag

###### 데모페이지

[보러가기](http://heavybear.cafe24.com/scrollDrag/)

- 클라이언트가 자주 요청하는 표가 가로로 길 경우 마우스드래그로 이동하는 기능을 재사용하기 위해서 만들었습니다.
---

###### 사용방법
```javascript
...
    <div class="h-scroll-wrapper zone-01">
        <div class="h-scroll-container">
            ...content
        </div>
    </div>

    <script src="path/hScrollDrag.min.js"></script>
    <script>
        var zone_01 = new hScrollDrag('.zone-01');
    </script>
...
```

###### 옵션들
```javascript
    <script>
        var zone_01 = new hScrollDrag('.zone-01', {
            acc : 2, //default = 1
            scrollBar : false // default = true
        });

        zone_01.moveTo(300); // 300px만큼 스크롤
    </script>
```
