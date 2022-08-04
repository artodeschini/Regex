# Regex

Este repositorio demostra praticas de estudos dicas com regex

## requisitos

* nodejs
* javascript
* go
* ruby
* java
* python 3

## Descricao dos conteudos

[executando](01_executando_regex/README.md)  
[consideracoes iniciais](02_start_regex/README.md)

## Metacaracteres

Caracteres especiais no uso de Regex

### Quantificadores

| Metacaracter  | Nome      | Significado       |
| :-:           | -         | -                 |
| ?             | Opcional  | Zero ou nenhum    |
| *             | Asterisco | Zero ou mais      |
| +             | Mais      | Um ou mais        |
|{n, m}         | Chaves    | De n até m        |

### Âncoras

| Metacaracter  | Nome          | Significado               |
| :-:           | -             | -                         |
| ˆ             | Circunflexo   | Inicio de linha           |
| $             | Cifrão        | Fim de linha              |
| \b            | Borda         | Inicio ou fim de palavra  |

## Outros

| Metacaracter  | Nome          | Significado                       |
| :-:           | -             | -                                 |
| \             | Escape        | Uso de metacaracter como literal  |
| |             | Ou            | Operação Ou                       |
| ()            | Grupo         | Define um grupo                   |
| \1...\q       | Retrovisor    | Resgata grupos já definidos       |
