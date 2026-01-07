a,b = map(int,input().split())

if b-45 < 0:
    a = a-1
    print('a:',a) 
b=b-45
print('b:',b)  
print(a%24,b%60) #사이클돔(파이썬 규칙임 그래서 시계구할때 좋음)