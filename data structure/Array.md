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

| 인덱스    | 주소 (id)     | 메모리 |
| --------- | ------------- | ------ |
| arr[0] >> | 2822030256496 | 3      |
| arr[1] >> | 2822030256688 | 9      |
| arr[2] >> | 2822030257040 | 20     |
| arr[3] >> | 2822030256560 | 5      |
| arr[4] >> | 2822030256944 | 17     |

메모리에 대한 접근은 바이트 단위로 한다. 32비트 이상의 시스템에서는 int를 4바이트로 사용하므로 배열의 각 엘리먼트는 4바이트의 메모리를 사용한다.

배열의 요소는 고유의 주소를 갖기 때문에 주소값을 통해 어느 위치에서나 그 엘리먼트를 O(1)에 조회할 수 있다. 접근하고자 하는 엘리먼트의 주소값을 계산하고 즉시 해당 주소의 값을 읽어올 수 있다.

단점은 원소의 추가 삭제가 까다롭다. `pop()` 이나 `append()`의 경우가 아닌 `insert()` 또는 `remove()` 을 통해 리스트이 중간에 값을 삽입/제거하는 경우 해당 공간에 접근하는 만큼의 공간복잡도와 시간복잡도를 갖게 된다.

### 2. Dynamic Array & Doubling

실제 데이터에서는 전체 크기를 가늠하기 어려울 때가 많다. 메머레를 너무 적게 할당하여 모자라거나 너무 많이 할당하여 낭비할 수가 있다. 따라서 자동으로 크기(메모리)를 지정하는 동적 배열을 이용한다.

미리 초기값을 적게 잡아 배열을 생성하고, 데이터가 추가되면 메모리를 늘려주어 모두 복사하는 방식이다. 이를 더블링 또는 그로스 팩터(Growth Factor)에 따라 일정 비율로 재할당한다.

## Ⅲ. 관련 알고리즘 문제

### 1. Two Sum(leetcode #1)

#### (1). 브루트 포스

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

#### (2). python `in`

```python
from typing import List

class Solution:
    def two_sum(self, nums: List[int], target: int) -> List[int]:
        for index, number in enumerate(nums):
            complement = target - number
            if complement in nums[i + 1]:
                return nums.index(number), nums[i + 1:].index(complement) + (i + 1)
```

#### (3). 딕셔너리 활용

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

```python
from typing import List

class Solution:
    def two_sum(self, nums: List[int], target: int) -> List[int]:
        nums_map = dict()
        for index, number in enumerate(nums):
            if target - number in nums_map:
                return [nums_map[target - num], index]
            nums_map[number] = index
```

타겟 값에서 첫번째 수를 뺀 결과가 딕셔너리의 키값에 존재하는지 조회한다. 딕셔너리는 해시 테이블로 구현되어 있고, 따라서 조회는 O(1)의 시간 복잡도를 갖는다.

#### (4). 투 포인터

```python
from typing import List

class Solution:
    def two_sum(self nums: List[int], target: int) -> List[int]:
        left, right = 0, len() - 1
        while left != right:
            if nums[left] + nums[right] < target:
                left += 1
            elif nums[left] + nums[right] > target:
                right -= 1
            else
                return left, right
```

입력값인 nums가 정렬된 상태가 아니며, 정렬을 하더라도 원래의 출력값으로 지정할 인덱스가 섞이는 문제가 발생한다. 따라서 투 포인터로 풀 수는 없다.

### 2. Trapping Rain Water (leetcode #42)

#### (1). 투 포인터

```python
from typing import List

class Solution:
    def trap(self, height: List[int]) -> int:
        if not height:
            return 0

        volume = 0
        left, right = 0, len(height) - 1
        left_max, right_max = height[left], height[right]

        while left < right:
            left_max, right_max = max(height[left], left_max), max(height[right], right_max)
            if left_max <= right_max:
                volume += left_max - height[left]
                left += 1
            else:
                volume += right_max = height[right]
                right -= 1
        return volume
```

투 포인터의 좌우 지점에서 중앙으로 순회한다. 순회한 지점을 기준으로 이전에 있던 최대 높이의 height와 비교하여 그 값의 차이만큼 volume의 양이 추가된다.

#### (2). 스택 활용

```python
from typing import List

class Solution:
    def trap(self, height: List[int]) -> int:
        stack = []
        volume = 0

        for i in range(len(height)):
            while stack and height[i] > height[stack[-1]]:
                bottom = stack.pop()
                if not len(stack):
                    break
                distance = i - stack[-1] - 1
                waters - min(height[i], height[stack[-1]]) - height[bottom]

                volume += distance * waters
            stack.append(i)
        return volume
```

순회하며 stack에 인덱스를 담아둔다. stack에 담긴 마지막 높이(bottom)보다 큰 높이를 마주했을 때 bottom 이전의 기둥 높이와 비교하하여 더 작은 기둥의 높이와, 그 기둥간 거리 차이(인덱스 값 차이)를 volume에 더해준다.

### 3. 3Sum (leetcode #15)

#### (1). 브루트 포스

```python
from typing import List

class Solution:
    def three_sum(self, nums: List[int]) -> List[List[int]]:
        result = []
        nums.sort()
        for i in range(len(nums) - 2):
            if i > 0 and nums[i] == nums[i - 1]:
                continue
            for j in range(i + 1, len(nums) - 1):
                if j > i + 1 and nums[j] == nums[j - 1]:
                    continue
                for k in range(j + 1, len(nums)):
                    if k > j + 1 and nums[k] == nums[k - 1]:
                        continue
                    if nums[i] + nums[j] + nums[k] == 0:
                        result.append([nums[i], nums[j], nums[k]])
        return result
```

브루트 포스로 풀이하되 중복된 값의 경우에는 `continue`를 통해 건너뛴다.

### (2). 투 포인터

```python
from typing import List

class Solution:
    def three_sum(self, nums: List[int]) -> List[List[int]]:
        result = []
        nums.sort()
        for i in range(len(nums) - 2):
            if i > 0 and nums[i] == nums[i-1]:
                continue

        left, right = i + 1, len(nums) - 1
        while left < right:
            sum = nums[i] + nums[left] + nums[right]
            if sum < 0:
                left += 1
            elif sum > 0:
                right -= 1
            else:
                result.append([nums[i], nums[left], nums[right]])
                while left < right and nums[left] == nums[left + 1]:
                    left += 1
                while left < right and nums[right] == nums[right - 1]:
                    right -= 1
                left += 1
                right -= 1

        return result
```

첫번째 값은 기존대로 중복된 값을 건너뛰는 식으로 순회한다. 첫번째 값을 기준으로 나머지 두 값은 투 포인터로 처리한다. 합이 0인 조합을 찾은 뒤에는 투 포인터가 가리키는 나머지 두 값의 중복을 건너뛴 뒤 한 칸씩 좁혀 다음 조합을 탐색한다.

### 4. Array Partition I (leetcode #561)

#### (1). 정렬 이용

```python
from collections import List

class Solution:
    def array_pair_sum(self, nums: List[int]) -> int:
        result = 0
        pair_list = list()
        nums.sort()
        for num in nums:
            pair_list.append(num)
            if len(pair) == 2:
                result += min(pair_list)
                pair_list = list()
        return result
```

```python
from collections import List

class Solution:
    def array_pair_sum(self, nums: List[int]) -> int:
        result = 0
        nums.sort()
        for index, num in enumerate(nums):
            if index % 2 == 0:
                result += num
        return result
```

전방에서 순회하여 2개씩 페어를 만든뒤 최소값을 결과값에 더해나간다. 또는 짝수 번째 값만을 결과값에 더해나간다.

#### (2). 스텝 인덱싱(숏 코딩)

```python
from collections import List

class Solution:
    def array_pair_sum(self, nums: List[int]) -> int:
        return sum(sorted(nums[::2]))
```
