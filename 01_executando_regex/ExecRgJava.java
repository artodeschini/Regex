import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class ExecRgJava {

    public static void main(String[] args) {
        String texto = "0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f,9";

        Pattern patternLetras = Pattern.compile("[a-f]");
        Matcher matcher = patternLetras.matcher(texto);

        while (matcher.find()) {
            System.out.printf("Posicoes: %s, %s\tvalore: %s%n",
                    matcher.start(), matcher.end(), matcher.group());
        }
        System.out.println(texto.replaceAll("[7-9]", "Achei"));
    }
}