# JavaScript에서 데이터를 다루는 라이브러리(Pandas-Like)

## Ⅰ. 개요
> * Pandas와 같이 Series, DataFrame 자료 구조를 제공
> * 특정 행 또는 열 선택, 추가, 삭제
> * 자료의 통계, 그래프, 논리 필터링
> * 데이터를 TensorFlow 자료구조(Tensor)로 출력 가능

## Ⅱ. Get Started

```html
    <script src="https://cdn.jsdelivr.net/npm/danfojs@0.1.2/dist/index.min.js"></script>
```

## Ⅲ. 자료구조 생성

### 1. Seires
```javascript
  var series_dates = new dfd.Series([18, 23, 28, 29]);
  series_dates.print();
```

### 2. Dataframe
```javascript
  //#1. 배열 방식
  var dataframe_weather = new dfd.DataFrame([
    {'날짜':9, '온도':18, '강수량': 5, '풍속': 12},
    {'날짜':10, '온도':23, '강수량': 0, '풍속': 2},
    {'날짜':11, '온도':28, '강수량': 30, '풍속': 7},
    {'날짜':12, '온도':29, '강수량': 15, '풍속': 8},
  ]);

  //#2. 객체 방식
  var dataframe_weather = new dfd.DataFrame({
    '날짜' : [9, 10, 11, 12],
    '온도' : [18, 23, 28, 29],
    '강수량' : [5, 0, 30, 15],
    '풍속' : [12, 2, 7, 8]
  });

  dataframe_weather.print();
```

## Ⅳ. 데이터 관리(DataFrame)

### 1. 데이터 선택

```javascript
  //#1. 특정 열(온도) 출력 (DataType : Series)
  console.log(dataframe_weather['온도']).print();;

  //#2. 특정 행 또는 열 출력 (DataType : DataFrame)
  dataframe_weather.loc({columns:['온도', '풍속']});
  dataframe_weather.loc({rows:[1, 3]}).print();;
  dataframe_weather.loc({columns:['온도', '강수량'], rows:[1, 3]}).print();
```

### 2. 데이터 추가

```javascript
  //#1. 행 추가
  var new_Row = new dfd.DataFrame({'날짜':[13, 14], '온도':[27, 24], '강수량':[5, 0], '풍속':[6, 3]});
  dataFrame_weather.append(new_Row).print();

  //#2. 열 추가
  dataframe_weather.addColumn({'column':'미세먼지', 'value': [16, 31, 13, 12, 15, 22]})
```

### 3. 데이터 삭제

```javascript
  //#1. 행 삭제
  dataframe_weather.drop({axis:0, index:[0]}).print(); 

  //#2. 열 삭제
  dataframe_weather.drop({axis:1, columns:['온도']}).print();
```

## Ⅴ. 특별한 기능

### 1. 통계 및 그래프 자료 출력

```html
<div id='dataframe_plot'></div>
<div id='dataframe_table'></div>

<script>
  //#1. 그래프 시각화(Series/DataFrame, 꺽은선)
  dataframe_weather.plot('dataframe_plot').line();

  //#2. 통계 자료 테이블 출력(평균, 편차, 중위값 등)
  dataframe_weather.plot('dataframe_table').table();
</script>
```

### 2. CSV 파일로부터 데이터프레임 생성
<!-- 향후 보완 必 -->

```javascript
  dfd.read_csv('http://~')
    .then(function(data) {
        data.print();
    });
```

### 3. 논리 비교를 이용한 필터링

```javascript
  //#1. 특정 조건을 만족하는 행 출력
  dataframe_weather
    .query({"column": '온도', 'is': ">", 'to': 20}).print();

  //#2. 다중 논리 비교(체이닝)
  dataframe_weather
    .query({"column": '온도', 'is': ">", 'to': 20}).query({"column": '미세먼지', 'is': "<=", 'to': 15}).print();
```

## Ⅵ. TensorFlow 자료구조(Tensor) 변환
<!-- 향후 보완 必 -->

## 1. 개요

```javascript
  //#1. DataFrame to Array
  dataframe_weather.to_json().then(function(json){
    console.log(JSON.parse(json))
  });

  //#2. DataFrame to Tensor
  dataframe.tensor.print();
  ```
