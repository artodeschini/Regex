const texto = 'lista de arquivos mp3: jazz.mp3,rock.mp3,podcast.mp3,blues.mp3';


const regexMp3 = /\.mp3/g; // regex para encontrar .mp3 nos textos

// [ '.mp3', '.mp3', '.mp3', '.mp3' ]
console.log(texto.match(regexMp3));

// pegando todo os nomes dos arquivos com \w+ ...
//[ 'jazz.mp3', 'rock.mp3', 'podcast.mp3', 'blues.mp3' ]
console.log(texto.match(/\w+\.mp3/g));