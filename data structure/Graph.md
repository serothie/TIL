# Non-Linear Data Structure Ⅰ - Graph

## Ⅰ. Introduction

> - 비선형 자료구조 Ⅰ - 그래프
> - 그래프 탐색 : DFS & BFS

## Ⅱ. Get Started

### 1. 의의

그래프 이론에서 그래프란 객체의 일부 쌍들이 연관되어 있는 객체 집합 구조이다. 오일러 경로는 정점과 간선으로 이루어진 그래프에서 모든 간선을 한 번씩 방문하는 유한 그래프이다. 해밀턴 경로는 각 정점을 한 번씩 방문하는 무향 또는 유향 그래프 경로이다.

그래프 순회란 그래프 탐색, 그래프의 각 정점을 방문하는 과정이다. 깊이 우선 탐색과 너비 우선 탐색의 2가지 알고리즘이 있으며 DFS는 주로 재귀나 스택, BFS는 큐로 구현한다.

### 2. DFS & BFS

```python
graph = {
    1: [2, 3, 4],
    2: [5],
    3: [5],
    4: [],
    5: [6, 7],
    6: [],
    7: [3]
}
```

#### 1. DFS : 깊이 우선 탐색

##### (1). 재귀 구조로 구현

```python
def recursive_dfs(vertex, discovered = []):
    discovered.append(vertex)
    for next_vertex in graph[vertex]:
        if next_vertex not in discovered:
            discovered = recursive_dfs(next_vertex, discovered)
    return discovered

# return [1, 2, 5, 6, 7, 3, 4]
```

##### (2). 스택을 이용한 반복 구조

```python
def stack_dfs(vertex):
    discovered = []
    stack = [vertex]
    while stack:
        vertex = stack.pop()
        if vertex not in discovered:
            discovered.append(vertex)
            for next_vertex in graph[vertex]:
                stack.append(next_vertex)
    return discovered

# return [1, 4, 3, 5, 7, 6, 2]
```

#### 2. BFS : 너비 우선 탐색

#### (3). 큐를 이용한 반복 구조

```python
def queue_bfs(vertex):
    discovered = [vertex]
    queue = [vertex]
    while queue:
        vertex = queue.pop(0)
        for next_vertex in graph[vertex]:
            if next_vertex not in discovered:
                discovered.append(next_vertex)
                queue.append(next_vertex)
    return discovered

# return [1, 2, 3, 4, 5, 6, 7]
```

## Ⅲ.

### 1.

```

```

### 2.

```

```

### 3.

```

```

### 2.

```

```

## Ⅳ.

### 1.

```

```

### 2

```

```

## Ⅴ.
