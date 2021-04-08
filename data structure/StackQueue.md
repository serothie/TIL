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

### 3.

```

```

### 2.

```

```

## Ⅳ. 관련 알고리즘 문제 - Queue

### 1.

```

```

### 2

```

```

## Ⅴ. 결론

```

```
