# Linear Data Structure Ⅰ - Array

## Ⅰ. Introduction

> - 선형 자료구조 Ⅰ : 배열
> - 관련 알고리즘 문제풀이

## Ⅱ. Linear Data Structure & Array

### 1. 의의

데이터 요소가 순차적으로 배열되는 자료구조를 `선형 자료구조`라고 한다. 단일 레벨로 구성되어 한 번이 탐색이 가능하고 구현이 용이하다. 배열, 스택, 큐, 연결 리스트 등이 이에 해당한다.

`배열`은 메모리 공간 기반의 연속 방식 자료 구조에서 가장 기본이 되는 자료형이다. 배열은 크기를 지정하고 해당 크기만큼의 연속된 메모리 공간을 할당받는 작업을 수행하는 자료형을 말한다. 정적 배열의 경우 크기가 고정되어 있으며, 한 번 생성한 배열은 크기를 변경하는 것이 불가능하다.

```py
# python3
from typing import List

arr: List[int] = [3, 9, 20, 5, 17]
```

| 인덱스                        | 주소                            | 메모리 |
| ----------------------------- | ------------------------------- | ------ |
| arr[0] >><br/><br/><br/><br/> | 0x00<br/>0x01<br/>0x02<br/>0x03 | 3      |
| arr[1] >><br/><br/><br/><br/> | 0x04<br/>0x05<br/>0x06<br/>0x07 | 9      |
| arr[2] >><br/><br/><br/><br/> | 0x08<br/>0x09<br/>0x0A<br/>0x0B | 20     |
| arr[3] >><br/><br/><br/><br/> | 0x0C<br/>0x0D<br/>0x0E<br/>0x0F | 5      |
| arr[4] >><br/><br/><br/><br/> | 0x10<br/>0x11<br/>0x12<br/>0x13 | 17     |

메모리에 대한 접근은 바이트 단위로 한다. 32비트 이상의 시스템에서는 int를 4바이트로 사용하므로 배열의 각 엘리먼트는 4바이트의 메모리를 사용하고 주소 또한 4씩 증가한다.

따라서 배열은 어느 위치에서나 그 엘리먼트를 O(1)에 조회할 수 있다. 접근하고자 하는 엘리먼트의 주소값을 계산하고 즉시 해당 주소의 값을 읽어올 수 있다.

### 2. Dynamic Array & Doubling

실제 데이터에서는 전체 크기를 가늠하기 어려울 때가 많다. 메머레를 너무 적게 할당하여 모자라거나 너무 많이 할당하여 낭비할 수가 있다. 따라서 자동으로 크기(메모리)를 지정하는 동적 배열을 이용한다.

미리 초기값을 적게 잡아 배열을 생성하고, 데이터가 추가되면 메모리를 늘려주어 모두 복사하는 방식이다. 이를 더블링 또는 그로스 팩터(Growth Factor)에 따라 일정 비율로 재할당한다.

## Ⅲ. 관련 알고리즘 문제

### 1. Two Sum(leetcode #1)

1. 브루트 포스

```python
from typing import List

class Solution:
    def two_sum(self, nums: List[int], target: int) -> List[int]:
        for i in range(len(nums)):
            for j in range(i + 1, len(nums)):
                if num[i] + num[j] == target:
                    return [i, j]
```

모든 조합을 더해서 하나하나 확인해보는 방식이다. 시간 복잡도가 크다는 단점이 있다.

### 2. python `in`

```python
from typing import List

class Solution:
    def two_sum(self, nums: List[int], target: int) -> List[int]:
        for index, number in enumerate(nums):
            complement = target - number
            if complement in nums[i + 1]:
                return nums.index(number), nums[i + 1:].index(complement) + (i + 1)
```

### 3. 딕셔너리 활용

```python
from typing import List

class Solution:
    def two_sum(self, nums: List[int], target: int) -> List[int]:
        nums_map = dict()
        for index, number in enumrate(nums):
            nums_map[number] = index

        for index, number in enumerate(nums):
            if target - number in nums_map and index != nums_map[target - num] :
                return nums.index(num), nums_map[target - num]
```

타겟 값에서 첫번째 수를 뺀 결과가 딕셔너리의 키값에 존재하는지 조회한다. 딕셔너리는 해시 테이블로 구현되어 있고, 따라서 조회는 O(1)의 시간 복잡도를 갖는다.
