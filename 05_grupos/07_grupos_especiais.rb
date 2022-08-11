texto = 'supermercado superação hiperMERCADO';

# javascript nao contepla isso exemplo em ruby

# supermercado superação
puts texto.scan(/(?:super)[\wÀ-ú]+/i).join(' ')

# Positivo lookbehind '<' olha para tras '=' positivo deu match
puts texto.scan(/(?<=super)[\wÀ-ú]+/i).join(' ') # mercado ação

# Negativo lookbehind '<' olha para tras '!' negativo NAO DEU MATCH
puts texto.scan(/(?<!super)mercado/i).join(' ') # MERCADO