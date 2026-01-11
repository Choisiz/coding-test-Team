n = int(input())
for i in range(n):
    a = list(input())
    sum =0
    count=1
    for j in a:
        if j =='O':
            sum = sum + count
            count+=1
        else:
            count=1
    print(sum)
