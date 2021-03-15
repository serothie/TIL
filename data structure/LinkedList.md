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



