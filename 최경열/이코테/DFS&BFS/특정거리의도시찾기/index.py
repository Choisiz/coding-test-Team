from collections import deque

#input입력
n,m,k,x = map(int,input().split())
graph=[[]for _ in range(n+1)]

#도로정보입력
for _ in range(m): 
    a, b = map(int,input().split())
    graph[a].append(b)

#방문도시 초기화
visited =[-1] * (n+1)
visited[x]=0

#너비우선탐색
def bfs(start):
    queue =deque([start])
    while queue:
        v = queue.popleft()
        for i in graph[v]:
            if visited[i] == -1: 
                visited[i] = visited[v]+1
                queue.append(i)
bfs(x)

#최단거리 도시출력
check =False
for i in range(1,n+1):
    if visited[i]==k:
        print(i)
        check=True

#최단거리 없다면
if check ==False:
    print(-1)