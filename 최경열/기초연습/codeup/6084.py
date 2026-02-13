h,b,c,s = map(int,input().split())

byte = h*b*c*s
kb = byte/1024
mb = kb/1024
result = mb/8


print(f"{result:.1f}",'MB')