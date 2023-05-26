#맵 좌표
n,m = map(int,input().split())
#캐릭터이동위치저장
d=[[0] * m for _ in range(n)]
#캐릭터 위치좌표,방향
x,y,dire = map(int,input().split())
#현재캐릭터위치저장
d[x][y]=1
#전체맵정보
array=[]
for i in range(n):
    array.append(list(map(int,input().split())))
#북,동.남,서
dx=[-1,0,1,0]
dy=[0,1,0,-1]
#방향회전함수
def turn_left():
    global dire
    dire-= 1
    if dire == -1:
        dire = 3
#방문횟수
count=1
#회전횟수
turn_time=0
while True:
    turn_left()
    nx = x+dx[dire] #회전위치에 따른 x증가,감소
    ny = y+dy[dire] #회전위치에 따른 y증가,감소
    #안가봤거나 육지라면
    if d[nx][ny] ==0 and array[nx][ny] ==0:
        d[nx][ny]=1
        x=nx
        y=ny
        count+=1
        turn_time=0
        continue
    #회전했는데 가봤거나, 바다인경우 다시회전해서 도전
    else:
        turn_time+=1
    #회전을 4방향했음에도
    if turn_time==4:
        nx=x-dx[dire] #x칸뒤로가기
        ny=y-dy[dire] #y칸뒤로가기
        #뒤가 육지라면
        if array[nx][ny] ==0:
            x=nx
            y=ny
        #바다라면
        else:
            break
        turn_time=0
print(count)