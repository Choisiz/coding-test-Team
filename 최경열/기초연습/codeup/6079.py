a = int(input())
sum =0
for i in range(1,a+1,1):
    sum +=i
    if sum>=a:
        print(i)
        break

a = int(input())
count=0
sum =0
while sum<a:
    count+=1
    sum+=count

print(count)