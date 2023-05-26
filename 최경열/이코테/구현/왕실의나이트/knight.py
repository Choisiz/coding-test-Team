n =input()
row = int(n[1])
column = int(ord(n[0])) -int(ord('a'))+1
result=0
steps =[(-2,-1),(-2,1),(2,-1),(2,1),
        (-1,-2),(-1,2),(1,-2),(1,2)]

for i in steps:
    next_row = row+i[0]
    next_column=column+i[1]
    if next_row>=1 and next_row<=8 and next_column>=1 and next_column<=8:
        result+=1

print(result)

#해설
#1.미리 나이트가 이동할수 있는 경로(범위)를 배열로 지정
#2.이동경로(범위)를 순회하면서 나이트가 있는 x,y좌표를 가지고와
#  나이트있는자리에서 이동경로(범위)를 추가
#3.2번에 충족되고, 체스판사이즈(1~8)범위이내를 조건을 충적시키면 카운트증가
#4.전부 이동경로(범위)를 순회후 카운트값 출력