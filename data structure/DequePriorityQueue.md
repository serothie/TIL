# Linear Data Structure Ⅳ - Deque & Priority Queue

## Ⅰ. Introduction

> - 선형 자료구조 Ⅳ - 데크, 우선순위 큐

## Ⅱ. Get Started

### 1. 의의

데크는 더블 엔디드 큐의 줄임말로, 데이터의 양단에서 모두 추출(삭제)과 삽입이 가능한 추상 자료형이다.

우선순의 큐는 큐 또는 스택과 같은 추상 자료형과 유사하지만, 이에 추가로 각 요소의 '우선 순위'가 반영되어 있다. 즉 특정 조건에 따른 우선 순위가 가장 높은 요소가 추출되는 자료형이다.

## Ⅲ. 관련 알고리즘 문제 - Deque

### 1. Design Circular Deque(leetcode #641)

```python
class ListNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class My_circular_deque:
    def __init__(self, k: int):
        self.head, self.tail = ListNode(None), ListNode(None)
        self.k, self.len = k, 0
        self.head.right, self.tail.left = self.tail, self.head

    def _add(self, node: ListNode, new: ListNode):
        n = node.right
        node.right = new
        new.left, new.right = node, n
        n.left = new

    def _del(self, node: ListNode):
        n = node.right.right
        node.right = n
        n.left = node

    def insertFront(self, value: int) -> int:
        if self.len == self.k:
            return False
        self.len += 1
        self._add(self.head, ListNode(value))
        return True

    def insertLast(self, value: int) -> bool:
        if self.len == self.k:
            return False
        self.len += 1
        self._add(self.tail.left, ListNode(value))
        return True

    def deleteFront(self) -> bool:
        if self.len == 0:
            return False
        self.len -= 1
        self._del(self.head)
        return True

    def deleteLast(self) -> bool:
        if self.len == 0:
            return False
        self._del(self.tail.left.left)
        return True

    def getFront(self) -> int:
        return self.head.right.val if self.len else -1

    def getRear(self) -> int:
        return self.tail.left.val if self.len else -1

    def isEmpty(self) -> bool:
        return self.len == 0

    def isFull(self) -> bool:
        return self.len == self.k
```

이중 연결리스트와 내부 함수 `add` 및 `del`을 통해 데크의 양단에서 데이터의 삽입, 삭제를 구현하였다.

## Ⅳ. 관련 알고리즘 문제 - Priority Queue

### 1. Merge k Sorted Lists (leetcode #23)

```python
from typing import List
import heapq

class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

class Solution:
    def merge_k_lists(self, lists: List[ListNode]):
        root = result = ListNode(None)
        heap = []

        for i in range(len(lists)):
            if lists[i]:
                heapq.heappush(heap, (lists[i].val, i, lists[i]))

    while heap:
        node = heapq.heappop(heap)
        idx = node[1]
        result.next = node[2]

        result = result.next
        if result.next:
            heapq.heappush(heap, (result.next.val, idx, result.next))

    return root.next
```

각 연결 리스트를 우선순위 힙에 담은 뒤 최소값을 하나씩 추출하는 과정을 구현한다. 각 연결 리스트의 루트를 힙에 담고, 최소 힙 추출하여 `result`에 연결시킨다. 그 후 추출한 연결 리스트의 `next`를 다시 힙에 담는 과정을 반복한다.
