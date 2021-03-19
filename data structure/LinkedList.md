# Linear Data Structure Ⅱ - Linked List

## Ⅰ. Introduction

> - 선형 자료구조 Ⅱ : 연결 리스트

## Ⅱ. Get Started

### 1. 의의

배열과 함께 가장 기본이 되는 대표적인 선형 자료구조이다. 다양한 추상 자료형 구현의 기반이 된다. 특히 동적으로 새로운 노드(배열 요소)를 삽입하거나 삭제하기가 간편하며 연결 구조를 통해 물리 메모리를 꼭 연속적으로 사용하지 않아도 되기 때문에 관리가 용이하다.

다만 배열과 달리 특정 인덱스에 접근하기 위해서는 순서대로 읽어야 하무로 상수 시간이 아닌 O(n)의 시간 복잡도가 소요된다. 반면 시작 또는 끝 지점에 아이템을 추가하거나 삭제, 추출 작업은 O(1)에 가능하다.

## Ⅲ. 관련 알고리즘 문제

### 1. Palindrome Linked List(leetcode #234)

#### (1). 리스트 변환

```python
from typing import List

class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

class Solution:
    def is_palindrome(self, head: ListNode) -> bool:
        q: List = list()

        if not head:
            return True

        node = head
        while node:
            q.append(node.val)
            node = node.next

        while len(q) > 1:
            if q.pop(0) != q.pop():
                return False

        return True
```

리스트로 변환한 후 해당 리스트의 펠린드롬 여부를 체크한다.

#### (2). 데크 활용

```python
from typing import List, Deque
from collections import deque

class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

class Solution:
    def is_palindrome(self, head: ListNode) -> bool:
        q: Deque = deque()

        if not head:
            return True
        
        node = head
        while node:
            q.append(node.val)        
            node = node.next

        while len(q) > 0:
            if q.popleft() != q.pop():
                return False
        
        return True
```

일반적인 리스트에서 `pop(0)`가 O(n)의 시간 복잡도를 갖는데 비해, 데크 자료형을 활용하면 자료의 시작과 끝 양방향에서 O(1)의 시간 복잡도로 자료 추출이 가능하다.

#### (3). 런너 기법

```python
from typing import List

class ListNode:
    def __init__(self, val = 0, next = None):
        self.val = val
        self.next = next
    
class Solution:
    def is_palindrome(self, head: ListNode) -> bool:
        reverse = None
        slow = fast = head
        while fast and fast.next:
            fast = fast.next.next
            reverse = slow
            reverse.next = reverse
            slow = slow.next
        if fast:
            slow = slow.next
        
        while reverse and reverse.val == slow.val:
            slow = slow.next
            reverse = reverse.next

        return not rev
```

런너를 활용해 fast 런너가 끝 지점에 도달했을 때 slow 런너는 중간 지점까지 이동하게 하며 역순 연결 리스트 reverse를 만들어 나간다. 이후 slow 런너 연결 리스트의 남은 값과 reverse 연결 리스트의 값을 비교해나간다.
slow와 reverse의 비교가 끝 지점까지 완료가 되었다면, 즉 둘 다 None 값을 가질 때까지 while문이 진행되었다면 펠린드롬이고, 그렇지 않다면 중간에 비교가 중단되었으니 펠린드롬이 아니라는 의미이다.

### 2. Merge Two Sorted Lists (leetcode #14)

#### (1). 재귀 풀이

```python
class ListNode:
    def __init__(self, val = 0, next = None):
        self.val = val
        self.next = next

class Solution:
    def merge_two_lists(self, l1: ListNode, l2: ListNode) -> ListNode:
        if (not l1) or (l2 and l1.val > l2.val):
            l1, l2 = l2, l1
        if l1:
            l1.next = self.merge_two_lists(l1.next, l2)
        return l1
```

두 연결 리스트 중 더 작은 head 값을 가지는 연결 리스트를 `l1`으로 둔 뒤에, `l1` 연결 리스트의 남은 부분과 다른 연결 리스트 `l2`를 재귀 구조로 엮는다. 기저 조건 두번째 if문으로 병합 대상인 두 연결 리스트의 값이 모두 None 값인 경우이다. 최종적으로 병합된 `l1`을 리턴한다.
