# Linear Data Structure Ⅴ - Hash Table

## Ⅰ. Introduction

> - 선형 자료구조 Ⅴ - 해시 테이블

## Ⅱ. Get Started

### 1. 의의

해시 테이블(맵)은 키를 값에 매핑할 수 있는 구조(연관 배열 추상 자료형)를 구현한 자료구조이다.

대부분의 연산이 분할 상환 분석에 따른 시간 복잡도가 O(1)이다. 데이터 크기에 상관없이 빠른 성능을 기대할 수 있으나 공간 복잡도가 증가한다.

### 2. 해시, 로드 팩터, 충돌

해시란 임의 크기 데이터를 고정 크기 값으로 매핑하는 데 사용하는 함수이다. 해시 함수 값 충돌을 최소화하기 위해 로드 팩터 비율을 지정하여 해시 테이블의 크기 또는 해시 함수를 조정한다. 또는 체이닝을 통해 연결 리스트, 트리 구조로 연결하거나 오픈 어드레싱을 통해 빈 공간을 탐색하여 충돌이 일어난 값을 저장한다

## Ⅲ. 관련 알고리즘 문제 - Hash Table

### 1. Design HashMap (leetcode #706)

```python
class My_hash_map:
    def __init__(self):
        self.size = 1000
        self.table = collections.defaultdict(ListNode)

    def put(self, key: int, value: int) -> None:
        index = key % self.size
        if self.table[index].value is None:
            self.table[index] = ListNode(key, value)
            return

        p = self.table[index]
        while p:
            if p.key == key:
                p.value = value
                return
            if p.next is None:
                break
            p = p.next
        p.next = ListNode(key, value)

    def get(self, key: int) -> int:
        index = key % self.size
        if self.table[index].value is None:
            return -1

        p = self.table[index]
        while p:
            if p.key = key:
                return p.value
            p = p.next
        return -1

    def remove(self, key: int) -> None:
        index = key % self.size
        if self.table[index].value is None:
            return

        p = self.table[index]
        if p.key == key:
            self.table[index] = ListNode() if p.next is None else p.next
            return

        prev = p
        while p:
            if p.key == key:
                prev.next = p.next
                return
            prev, p = p, p.next
```

연결 리스트를 활용하여 개별 체이닝 방식을 적용한 해시 테이블을 구현하였다.

### 2. Jewels and Stones (leetcode #771)

#### (1). 해시 테이블 활용

```python
class Solution:
    def num_wewels_in stones(self, J: str, S: str) -> int:
        freqs = {}
        count = 0

        for char in S:
            if char not in freqs:
                freqs[char] = 1
            else:
                freqs[char += 1]

        for char in J:
            if char in freqs:
                count += freqs[char]

        return count
```

#### (2). defaultdict 활용

```python
from collections import defaultdict

class Solution:
    def num_wewels_in stones(self, J: str, S: str) -> int:
        freqs = defaultdict(int)
        count = 0

        for char in S:
            freq[char] += 1

        for char in J:
            count += freq[char]

        return count
```

S 문자열 에서 각 문자별로 빈도수를 체크한 뒤 J 문자열 내의 문자열들의 등장 횟수를 합한다.

#### (3). Pythonic Short Coding

```python
class Solution:
    def num_wewels_in stones(self, J: str, S: str) -> int:
        return sum(s in J for s in S)
```

### 3. Longest Substring Without Reapeating Characters (leetcode #3)

#### (1). 슬라이딩 윈도우 활용

```python
class Solution:
    def length_of_longest_substring(self, s: str) -> int:
        used = {}
        max_length = start = 0
        for i, char in enumerate(s):
            if char in used and start <= used[char]:
                start = used[char] + 1
            else:
                max_length = max(max_length, i - start + 1)

            used[char] = i

        return max_length
```

슬라이딩 윈도우의 사이즈를 조절해가며 최대 길이를 구한다. 해시맵에 문자별 인덱스를 갱신해주며 길이를 판단한다.

### 4. Top K Frequent Elements (leetcode #347)

#### (1). Counter & heap 활용

```python
from collections import Counter
from typing import List
import heapq

class Solution:
    def top_k_frequent(self, nums: List[int], k: int) -> List[int]:
        freqs = Counter(nums)
        freqs_heap = []

        for f in freqs:
            heapq.heappush(freqs_heap, (-freqs[f], f))

        top_k = []

        for _ in range(k):
            topk.append(heapq.heappop(freqs_heap)[1])

        return top_k
```

최소힙을 지원하는 파이썬 `heapq`를 이용하여 빈도수(`Counter`)의 음수값을 `heappush`하고, 이를 k번 `heappop`하여 담은 리스트를 반환한다.

#### (2). Pythonic Short Coding

```python
from typing import List
from collections import Counter

class Solution:
    def top_k_frequent(self, nums: List[int], k: int) -> List[int]:
        freturn list(zip(*Counter(nums).most_common(k)))[0]
```
