arr=[]

for i in range(9):
    arr.append(int(input()))

max= max(arr)
print(max)
count = arr.index(max)
print(count+1)