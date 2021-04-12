# Linear Data Structure Ⅲ - Stack & Queue

## Ⅰ. Introduction

> - 선형 자료구조 Ⅲ - 스택, 큐

## Ⅱ. Get Started

### 1. 의의

스택은 후입선출, 큐는 선입선출로 처리되는 선형 자료구조이다.

스택은 `요소를 컬렉션에 추가하는 push 연산`과 `컬렉션의 요소 중 가장 최근에 추가된 요소를 제거하는 pop 연산`을 지원하는 추상 자료형을 의미한다.

큐는 시퀀스의 `한쪽 끝에는 컬렉션에 엔티티를 추가`할 수 있고, `다른 반대쪽 끝에는 컬렉션의 요소를 제거`할 수 있는 엔티티 컬렉션이다.

## Ⅲ. 관련 알고리즘 문제 - Stack

### 1. Valid Parentheses (leetcode #20)

#### (1). 스택 연산 결과 비교

```python
class Solution:
    def is_valid(self, s: str) -> bool:
        stack = list()
        parenthesis_table = {
            ')' : '(',
            ']' : '[',
            '}' : '{'
        }

        for char in s:
            if char not in parenthesis_table:
                stack.append(char)
            elif not stack or parenthesis_table[char] != stack.pop():
                return False

        return len(stack) == 0
```

왼쪽 괄호는 stack에 담아두고 오른쪽 괄호를 만나면 스택에서 pop 연산을 수행한다. pop 연산의 결과물과 다음 괄호와의 괄호 쌍이 맞지 않으면 False를 리턴한다.

### 2. Remove Duplicate Letters (leetcode #316)

#### (1). 재귀 분리

```python
class Solution:
    def remove_duplicate_letters(self, s: str) -> str:
        for char in sorted(set(s)):
            suffix = s[s.index(char):]
            if set(s) == set(suffix):
                return char + self.remove_duplicate_letters(suffix.replace(char, ''))
        return ''
```

우선 사전 순으로 판단하기 위해 `sorted(set(s))` 문자열에 반복문으로 시작한다. 문자열의 각 문자로 시작하는 `suffix`를 분리하여 `set(s)`와 비교하여 일치한다면, 해당 suffix에 담고자 하는 모든 문자들이 담겨있다는 의미이다. 이 경우 해당 suffix에서 첫 문자와, 첫 문자를 제거한 문자열을 재귀 구조로 엮는다.

#### (2). 스택 활용

```python
from collections import Counter

class Solution:
    def remove_duplicate_letters(self, s: str) -> str:
        counter, checked, stack = Counter(s), set(), list()

        for char in s:
            counter[char] -= 1
            if char in checked:
                continue
            while stack and char < stack[-1] and counter[stack[-1]] > 0:
                checked.remove(stack.pop())
            stack.append(char)
            checked.add(char)

        return ''.join(stack)
```

`stack`과 `checked`에 문자열의 문자를 차례대로 쌓는다. `stack`에 문자열이 담겨있고, 다음에 쌓을 문자가 `stack`의 마지막 문자보다 사전순이 빠르며, `stack`의 마지막 문자가 더 남아있다면 이를 제거한다. 이 과정에서 `checked`에 담긴 문자는 건너뛴다.

### 3. Daily Temperatures (leetcode #739)

#### (1). 스택 활용

```python
from typing import List

class Solution:
    def daily_temperatures(self, T: List[int]) -> List[int]:
        answer = [0 for i in range(len(T))]
        stack = list()

        for index, current in enumerate(T):
            while stack and current > T[stack[-1]]:
                last = stack.pop()
                answer[last] = index - last
            stack.append(i)

        return answer

```

`stack`에 인덱스 값을 차례 차례 쌓는다. 다음에 쌓일 인덱스의 값이 `stack`의 마지막 인덱스의 값보다 큰 경우, `stack`에 `pop` 연산을 하여 다음 인덱스 값의 차이만큼 결과 값을 저장한다.

## Ⅳ. 관련 알고리즘 문제 - Queue

### 1. Implement Stack using Queues(leetcode #225)

```python
class My_stack:
    def __init__(self):
        self.q = collections.deque()

    def push(self, x):
        self.q.append(x)
        for _ in range(len(self.q) - 1):
            self.q.append(self.q.popleft())

    def pop(self):
        return self.q.popleft()

    def top(self):
        return self.q[0]

    def empty(self):
        return len(self.q) == 0

```

`Queue`의 FIFO 연산만 활용하여 스택 연산을 구현한다. 추가된 요소를 맨 앞으로 두어 `pop`연산이 맨 앞의 요소를 가져올 수 있도록 한다.

### 2. Implement Queue using Stacks(leetcode #232)

```python
class My_queue:
    def __init__(self):
        self.input = list()
        self.output = list()

    def push(self, x):
        self.input.append(x)

    def pop(self):
        self.peek()
        return self.output.pop()

    def peek(self):
        if not self.output:
            while self.input:
                self.output.append(self.input.pop())
        return self.output[-1]

    def empty(self):
        return self.input == list() and self.output == list()
```

`Stack`의 LIFO 연산을 활용하여 큐의 연산을 구현한다. `append` 연산은 `input` 리스트에서, `pop`과 `peek`연산은 `output` 리스트에서 `스택의 pop` 연산을 활용해 큐를 구현하였다.

### 2

```

```

## Ⅴ. 결론

```

```
