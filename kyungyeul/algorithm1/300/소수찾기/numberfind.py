a = int(input())
b = list(map(int, input().split(" ")))

result = 0
for i in b:
    count = 0
    if i > 1:
        for j in range(2, i+1):
            if i % j == 0:
                count += 1

        if count == 1:
            result += 1


print(result)
