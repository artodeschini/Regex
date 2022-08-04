package main

import (
	"bytes"
	"fmt"
	"regexp"
)

func main() {
	texto := "0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f,9";

	regex9, _ := regexp.Compile("9");
	fmt.Println(regex9.MatchString(texto)); // devolte true se encontrou a regex
	fmt.Println(regex9.FindString(texto)); // mostra o texto encontrado
	fmt.Println(regex9.FindStringIndex(texto)); // mostra o index do texto encontrado

	regexLetras, _ := regexp.Compile("[a-f]");
	fmt.Println(regexLetras.FindAllString(texto, 20)); // mostra a quantidade de matchs que eu quero encontrar
	fmt.Println(regexLetras.ReplaceAllString(texto, "Achei"));

	resultado := regexLetras.ReplaceAllFunc([]byte(texto), bytes.ToUpper); // faz o replace com uma funcao

	fmt.Println(string(resultado)); // converte []byte devolta para string
}