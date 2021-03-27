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

### 3. Reverse Linked List

### (1). 재귀 풀이

```python
class ListNode:
    def __init__(self, val = 0, next = None):
        self.val = val
        self.next = next

class Solution:
    def reverse_list(self, head: ListNode) -> ListNode:
        def reverse(node: ListNode, prev: ListNode = None):
            if not node:
                return prev
            next, node.next = node.next, prev
            return reverse(next, node)

        return reverse(head)
```

현재 노드 값과 다음 노드 값을 뒤집는 함수를 재귀 호출한다. 기저 조건은 노드값이 None이 될 때까지로 정한다.

### (2). 반복문 풀이

```python
class ListNode:
    def __init__(self, val = 0, next = None):
        self.val = val
        self.next = next

class Solution:
    def reverse_list(self, head: ListNode) -> ListNode:
        node, prev = head, None

        while node:
            next, node.next = node.next, prev
            prev, node = node, next

        return prev
```

재귀 풀이를 반복문으로 구현한 것이다. 재귀 풀이에 비해 적은 공간복잡도를 가지며 이해하기 편하다.

### 4. Add Two Numbers (leetcode #2)

#### (1). 전가산기 구현

```python
class ListNode:
    def __init__(self, val = 0, next = None):
        self.val = val
        self.next = next

class Solution:
    def add_two_numbers(self, l1: ListNode, l2: ListNode) -> ListNode:
        root = head = ListNode(0)

        carry = 0
        while l1 or l2 or carry:
            sum = 0
            if l1:
                sum += l1.val
                l1 = l1.next
            if l2:
                sum += l2.val
                l2 = l2.next

            carry, value = divmod(sum + carry, 10)
            head.next = ListNode(value)
            head = head.next
```

자료형을 전환할 필요없이 각 연결 리스트의 값들을 더하여 carry와 sum으로 나누어 가며 새로운 연결 리스트를 엮어 나가는 풀이이다.

### 5. Swap Nodes in Pairs (leetcode #24)

#### (1). 한 쌍씩 값 교환

```python
class ListNode:
    def __init__(self, val = 0, next = None):
        self.val = val
        self.next = next

class Solution:
    def swap_pairs(self, head: ListNode) -> ListNode:
        cur = head

        while cur and cur.next:
            cur.val, cur.next.val = cur.next.val, cur.val
            cur = cur.next.next

        return head
```

매우 직관적인 방법으로 한쌍의 페어가 있다면 단순히 값을 교환하고 다다음 노드로 이동하기를 반복한다.

#### (2). 반복 구조

```python
class ListNode:
    def __init__(self, val = 0, next = None):
        self.val = val
        self.next = next

class Solution:
    def swap_pairs(self, head: ListNode) -> ListNode:
        root = prev = ListNode(None)
        prev.next = head
        while head and head.next:
            b = head.next
            head.next = b.next
            b.next = head

            prev.next = b

            head = head.next
            prev = prev.next.next
        return root.next
```

두 페어의 첫 값(`head`)의 다음을 `b`로 정의하여 스왑한다. `head`를 가리키던 `prev`는 `b`를 가리키도록 한 뒤 다음 번 페어로 나아간다.

#### (3). 재귀 구조

```python
class ListNode:
    def __init__(self, val = 0, next = None):
        self.val = val
        self.next = next

class Solution:
    def swap_pairs(self, head: ListNode) -> ListNode:
        if head and head.next:
            pointer = head.next
            head.next = self.swap_pairs(pointer.next)
            pointer.next = head
            return pointer
        return head
```

`head`와 `pointer`를 스왑한 뒤 `head`의 `next`는 다음 페어를 재귀 구조로 엮는다. 기저 조건은 남은 값들로 페어가 이루어지지 않는 경우이다. `pointer` 이외의 변수 할당이 없어 공간 복잡도를 개선할 수 있다.

### 6. Odd Even Linked List (leetcode #328)

#### (1). 반복 구조

```python
class ListNode:
    def __init__(self, val = 0, next = None):
        self.val = val
        self.next = next

class Solution:
    def odd_even_list(self, head: ListNode) -> ListNode:
        if head is None:
            return None

        odd = head
        even = head.next
        even_head = head.next

        while even and even.next:
            odd.next, even.next = odd.next.next, even.next.next
            odd, even = odd.next, even.next

        odd.next = even_head
        return head
```

홀수 번째와 짝수 번째의 첫 헤드를 지정하고, 홀수 연결 리스트 뒤에 짝수 연결 리스트를 연결하기 위해 첫 짝수 번째 헤드를 미리 변수 `even_head`에 담아둔다. 반복 구조로 홀짝 연결 리스트를 각각 만든 뒤 홀수 연결 리스트 뒤에 짝수 연결 리스트를 이어 마무리한다.

### 7. Reverse Linked List Ⅱ (leetcode #92)

```python
class ListNode:
    def __init__(self, val = 0, next = None):
        self.val = val
        self.next = next

class Solution:
    def reverse_between(self, m: int, n: int) -> ListNode:
        if not head or m == n:
            return head

        root = start = ListNode(None)
        root.next = head

        for _ in range(m-1):
            start = start.next
        end = start.next

        for _ in range(n-m):
            tmp, start.next, end.next = start.next, end.next, end.next.next
            start.next.next = tmp
        return root.next
```

반복해서 차례대로 노드를 뒤집는다. `end`는 뒤집은 연결 리스트의 꼬리 값으로 미리 정해둔다. `tmp`는 뒤집을 노드의 인덱스 `m`부터 `n`까지 차례대로 나아가며 `start`의 `next`로 지정되는데, 이를 `end`의 `next`로 순차적으로 연결하는 것이다. 또한 `end`의 `next`는 `end.next.next`로 끌어와서 최종적으로 `end`가 가르킬 노드로 연결된다.
