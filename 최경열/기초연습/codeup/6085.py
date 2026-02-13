w,h,b = map(int,input().split())
byte = (w*h*b)/8
kb =byte/1024
mb=kb/1024

print('%.2f'%mb,'MB')