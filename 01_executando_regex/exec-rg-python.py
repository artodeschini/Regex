import re

texto = '0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f'

# pattern
p = re.compile('9')

match1 = re.search(p, texto);

# output Posicoes: 18, 19; Valor: 9.
print("Posicoes: %s, %s; Valor: %s." % (match1.start(), match1.end(), match1.group()))

# python nao permite utilizar /[a-f]/ essa sintaxe nao ira funcionar
valores = re.findall('[a-f]', texto)
# ['a', 'b', 'c', 'd', 'e', 'f']
print(valores);