# Python String Manipulation

## Ⅰ. Introduction

> - Python 문자열 조작
> - Valid Palindrome(leetcode #125)
> - Reverse String(leetcode #344)
> - Reorder Log Files(leetcode #937)
> - Most Common Word(leetcode #819)
> - Group Anagrams(leetcode #49)
> - Longest Palindrome Substring(leetcode #5)

## Ⅱ. Valid Palindrome(leetcode #125)

### 1. 리스트로 변환하여 판단하기

```python
import typing

class Solution
    def is_palindrome(self, s: str) -> bool:
        strings = []
        for char in s:
            if char.isalnum():
                strings.append(char.lower())

        while len(strings) > 1:
            if strings.pop(0) != strings.pop():
                return False

        return True
```

문제의 조건에 따라 대소문자 구분을 하지 않으며, 알파벳과 숫자만을 대상으로 하므로 `isalnum()` 및 `lower()` 을 통해 문자열을 판단 및 조작한다.

### 2. 데크 자료형 활용하여 최적화하기

```python
import typing
from collections import deque

class Solution:
    def is_palindrome(self, s: str) -> bool:
        strings: Deque = deque()

        for char in s:
            if char.isalnum():
                strings.append(char.lower())

        while len(strings) > 1:
            if strings.popleft() != strings.pop():
                return False

        return True
```

리스트의 pop(0)는 O(n)의 시간 복잡도지만 데크의 popleft()는 O(1)의 시간 복잡도를 가지기 때문에 시간 복잡도를 개선할 수 있다.

### 3. 정규 표현식 및 슬라이싱 활용

```python
import typing
import re

class Solution:
    def is_palindrome(self, s: str) -> bool:
        strings = re.sub('[^a-z0-9]', '', s.lower())
        return strings == strings[::-1]
```

파이썬 정규 표현식 조작과 문자열 뒤집기 `[::-1]`로 펠린드롬 여부를 판단한다.

## Ⅲ. Reverse String(leetcode #344)

### 1. 포인터 적용 스왑

```python
from typing import List

class Solution:
    def reverse_string(self, s: List[str]) -> None:
        left, right = 0, len()
        while left < right:
            s[left], s[right] = s[right], s[left]
            left += 1
            right -= 1

```

left, right를 입력받는 리스트의 양 쪽 인덱스로 지정하고 점차 범위를 좁혀가며 스왑한다.

### 2. 파이썬 내부 함수 활용

```python
from typing import List

class Solution:
    def reverse_string(self, s: List[str]) -> None:
        s.reverse()
        # s[:] = s[::-1]
```

`reverse` 를 이용해 공간 복잡도를 O(1)으로 제한하여 별도의 변수 할당 없이 처리 가능하다.

## Ⅳ. Reorder Log Files(leetcode #937)

### 1. 람다를 활용한 정렬

```python
from typing import List

class Solution:
    def reorder_log_files(self, logs: List[str]) -> List[str]:
        letters, digits = list(), list()
        for log in logs:
            if log.split()[1].isdigit():
                digits.append(log)
            else:
                letters.append(log)

        letters.sort(key = lambda x: (x.split()[1:], x.split()[0]))
        return letters + digits
```

문자와 숫자로 구성된 로그를 구분하여 서로 다른 리스트에 담는다. 문자로 이루어진 로그는 문자 로그를 우선으로, 식별자를 다음 순서로 하여 `lambda`식을 활용해 정렬한다.

## Ⅴ. Most Common Word(leetcode #819)

### 1. 카운터 활용

```python
from typing import List
from collections import Counter
import re

class Solution:
    def most_common_word(self, paragraph: str, banned: List[str]) -> str:
        words = list(word for word in re.sub(r'[\w])', ' ', paragraph.lower().split() if word not in banned)

    counts = Counter(words)
    return counts.most_common(1)[0][0]
```

## Ⅵ. Group Anagrams(leetcode #49)

### 1. 정렬 활용

```python
from typing import List
from collections import defaultdict

class Solution:
    def group_anagrams(self, strs: List[str]) -> List[List(str)]:
        anagrams = defaultdict(list)

        for word in strs:
            anagrams[''.join(sorted(word))].append(word)
```

## Ⅶ. Longest Palindrome Substring(leetcode #5)

### 1. 투 포인터 풀이

```python
class Solution:
    def longestPalindrome(self, s: str) -> str:
        while left >= 0 and right <= len(s) and s[left] == s[right - 1]:
            left -= 1
            right += 1
        return s[left + 1:right - 1]

    if len(s) < 2 or s == s[::-1]:
        return s

    result = ''
    for index in range(len(s) - 1):
        result = max(result, expand(i, i + 1), expand(i, i + 2), key = len)
```
