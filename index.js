const tmi = require('tmi.js');
const options = require('./options');

const client = new tmi.client(options.options);

url = 'edersonferreiradev';

client.connect();

client.on('connected', (address, port) => {});

client.on('chat', (channel, user, message, self) => {
  client.color('blue');
  if (message.match(/!git */)) {
    let gitDir = message.replace(/!git /, '');
    let type;
    gitDir.includes('/') ? (type = 'repositório') : (type = 'usuário');
    githubUrl = `https://github.com/${gitDir}`;
    client.action(
      url,
      `@${user['display-name']} Seu ${type} está aqui: ${githubUrl}`,
    );
  }

  if (message.match(/!soniae */)) {
    let quality = message.replace(/!soniae /, '').toLowerCase();
    client.action(url, `A Sonia é MUITO ${quality}! ( ͡° ͜ʖ ͡°)`);
  }

  if (message.match(/!codigosonia */)) {
    client.action(url, 'A Sonia não tem um GitHub :(');
  }

  if (message.match(/!soniamexe */)) {
    let move = message.replace(/!soniamexe /, '').toLowerCase();
    client.action(url, `A Sonia mexe os/as ${move} ( ͡° ͜ʖ ͡°)`);
  }

  if (message.match(/!TemPedra() */)) {
    tempedra = Math.round(Math.random() * 10);
    let result;
    tempedra >= 5 ? (result = 'True') : (result = 'False');
    client.action(url, `@${user['display-name']} TemPedra() => ${result}`);
  }

  if (message.match(/!cantada */)) {
    cantada = message.replace(/!cantada /, '').toLowerCase();

    quality = Math.round(Math.random() * 10);

    switch (quality) {
      case 0:
        msg = 'Vou chamar a polícia, assediador!';
        break;
      case 1:
        msg = 'Saí daqui, seu nojento!';
        break;
      case 2:
        msg = 'Eu vou te ignorar, vai que eu pego essa sua doença';
        break;
      case 3:
        msg = 'Não falo nada dessas suas cantadas';
        break;
      case 4:
        msg = 'Bem ruimzinha hein!';
        break;
      case 5:
        msg = 'Mais ou menos, mas poderia ser melhor';
        break;
      case 6:
        msg = 'Boa, valeu!';
        break;
      case 7:
        msg = 'Obrigada, seu lindo!';
        break;
      case 8:
        msg = 'Gostei, seu maravilhoso!';
        break;
      case 9:
        msg = 'Depois dessa você pode me levar para casa!';
        break;
      case 10:
        msg = 'Agora que eu caso com você!';
        break;
      default:
        msg = 'Nah';
    }

    client.action(url, `@${user['display-name']} ${msg}`);
  }
});
