#가장작은거와 큰거를 바꾸면됨
n, k  = map(int,input().split())
a= list(map(int,input().split()))
b= list(map(int,input().split()))

a.sort()
b=sorted(b,reverse=True)

for i in range(k):
    if a[i]<b[i]:
        a[i],b[i]=b[i],a[i]
    else:
        break

print(sum(a))