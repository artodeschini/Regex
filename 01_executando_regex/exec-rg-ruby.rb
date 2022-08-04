texto = '0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f,9';

regexNove = Regexp::new('9');

# puts é a saida do console em ruby
puts ('Metodos da Regexp');

# output 9
puts regexNove.match(texto); # pega a primeira ocorrencia de '9' ocorrencias no texto

outraForma = %r{9} # seria igual a regexNove

# output 9
puts outraForma.match(texto); # pega a primeira ocorrencia de '9' ocorrencias no texto

# output 1
puts regexNove =~ '894'; # retorna 1 de 'true' semelhante a regexNove.test do js

regexLetras = /[a-f]/; # todas as letras de 'a' a 'f'
# output abcdef
puts texto.scan(regexLetras).join() # scan procura todas ocorrencias da regex 'join' coloca tudo em uma linha só

# output ["0,1,2,3,4,5,6,7,8,9,", ",b,c,d,", ",f,9"]
# print diferente de puts mostra no console como um array
print texto.split(/[aeiou]/);