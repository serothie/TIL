# Vanilla JS Project 2 - PaintJS

## Ⅰ. Introduction

> - Vanilla JS 기반 그림판 만들어보기
> - CanvasRenderingContext2D를 활용한 그림판 Interative 구현

## Ⅱ. Get Started - app.js

### 1. [CanvasRenderingContext2D](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D)

```
The CanvasRenderingContext2D interface, part of the Canvas API,
provides the 2D rendering context for the drawing surface of
a <canvas> element.

It is used for drawing shapes, text, images, and other objects.
```

### 2. 활용하거나 관련된 함수(메서드?)

```javascript
CanvasRenderingContext2D.beginPath();
/* Starts a new path by emptying the list of sub-paths. 
Call this method when you want to create a new path.*/

CanvasRenderingContext2D.moveTo();
/* Moves the starting point of 
a new sub-path to the (x, y) coordinates.*/

CanvasRenderingContext2D.lineTo();
/* Connects the last point in the current sub-path 
to the specified (x, y) coordinates with a straight line. */

CanvasRenderingContext2D.closePath();
/* Causes the point of the pen to move back to the start of the current sub-path. 
It tries to draw a straight line from the current point to the start. 
If the shape has already been closed or has only one point, 
this function does nothing. */

CanvasRenderingContext2D.stroke();
// Strokes the current sub-paths with the current stroke style.

CanvasRenderingContext2D.fillRect();
/*Draws a filled rectangle at (x, y) position 
whose size is determined by width and height.*/

CanvasRenderingContext2D.lineWidth;
// Width of lines. Default 1.0.

CanvasRenderingContext2D.fillStyle;
// Color or style to use inside shapes. Default #000 (black).

CanvasRenderingContext2D.strokeStyle;
// Color or style to use for the lines around shapes. Default #000 (black).
```

## Ⅲ. 새로 배운 점

### 1. 정리가 필요한 기능들

기본적으로 'path'라는 눈에 보이지 않는 가상의 경로를 읽어 선을 그리는 작업이 수행된다.
app.js에서는 커서의 좌표를 읽어 path를 그리게 하였다.

```javascript
CanvasRenderingContext2D.beginPath();
/* Starts a new path by emptying the list of sub-paths. 
Call this method when you want to create a new path.*/
```

'path'라는 가상의 경로를 새로 시작한다. 마우스 움직임이 시작된 위치에서부터 path가 그려진다.

```javascript
CanvasRenderingContext2D.moveTo();
/* Moves the starting point of 
a new sub-path to the (x, y) coordinates.*/
```

해당 좌표로 path의 시작점을 이동시킨다.

```javascript
CanvasRenderingContext2D.lineTo();
/* Connects the last point in the current sub-path 
to the specified (x, y) coordinates with a straight line. */
```

현재 path의 마지막 점과 좌표를 직선으로 연결한다.

```javascript
CanvasRenderingContext2D.closePath();
/* Causes the point of the pen to move back to the start of the current sub-path. 
It tries to draw a straight line from the current point to the start. 
If the shape has already been closed or has only one point, 
this function does nothing. */
```

현재 패스의 시작점과 현재 좌표를 잇는 선을 그린다.

### 2. 기능 활용

```javascript
// const canvas = document.getElementById("jsCanvas");
// const ctx = canvas.getContext("2d");

function onMouseMove(event) {
  const x = event.offsetX;
  const y = event.offsetY;
  if (!painting) {
    ctx.beginPath();
    ctx.moveTo(x, y);
  } else {
    ctx.lineTo(x, y);
    ctx.stroke();
  }
}
```

즉, 그림판에서 마우스를 움직이는 동안 매 좌표마다 새로운 path가 시작되고 마치기를 반복하다가 마우스를 클릭하면
마지막 패스의 지점(마우스를 클릭하기 직전 좌표)와 클릭하고 움직인 좌표를 직선으로 연결하고 선을 그린다.

lineTo로 이동하며 연결된 좌표로도 moveTo와 같이 새로운 path가 생성되어 이동하는 것으로 보인다.

## Ⅳ. 더 개선할 점

> 1. 공식 문서를 참고하여 다양한 그림 기능을 구현해볼 수 도 있을 듯 하다.
> 1. CSS 활용 전체 레이아웃 및 디자인 개선

</br>

출처: [노마드코더 클론코딩](https://nomadcoders.co/?gclid=Cj0KCQjwyZmEBhCpARIsALIzmnIHuVc0EDdM0eo_oXDK2QDMtxzyIxzea1l8mhfDC6agvSup21e0M8YaAigZEALw_wcB)
