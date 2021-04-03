# Linear Data Structure Ⅲ - Stack & Queue

## Ⅰ. Introduction

> - 선형 자료구조 Ⅲ - 스택, 큐

## Ⅱ. Get Started

### 1. 의의

스택은 후입선출, 큐는 선입선출로 처리되는 선형 자료구조이다.

스택은 `요소를 컬렉션에 추가하는 push 연산`과 `컬렉션의 요소 중 가장 최근에 추가된 요소를 제거하는 pop 연산`을 지원하는 추상 자료형을 의미한다.

큐는 시퀀스의 `한쪽 끝에는 컬렉션에 엔티티를 추가`할 수 있고, `다른 반대쪽 끝에는 컬렉션의 요소를 제거`할 수 있는 엔티티 컬렉션이다.

## Ⅲ. 관련 알고리즘 문제 - Stack

### 1. Valid Parentheses

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

### 2.

```

```

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
