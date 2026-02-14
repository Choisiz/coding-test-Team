a = int(input())
start=0
sum =0

while True:
    start=start+1
    sum=sum+start
    if sum >= a:
        break

print(sum)