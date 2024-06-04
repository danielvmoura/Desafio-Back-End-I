const soap = require('soap');

const url = 'http://www.dneonline.com/calculator.asmx?WSDL';

const num1 = parseInt(process.argv[2]);
const num2 = parseInt(process.argv[3]);
const operation = process.argv[4];

const args = { intA: num1, intB: num2 };

soap.createClient(url, function(err, client) {
  if (err) {
    console.error('Erro ao criar cliente SOAP:', err);
  } else {
    console.log('Cliente SOAP criado com sucesso.');

    // Realiza a operação especificada
    switch (operation) {
      case 'adicionar':
        client.Add(args, function(err, result) {
          if (err) {
            console.error('Erro ao chamar método SOAP:', err);
          } else {
            console.log('Resultado da adição:', result.AddResult);
          }
        });
        break;
      case 'subtrair':
        client.Subtract(args, function(err, result) {
          if (err) {
            console.error('Erro ao chamar método SOAP:', err);
          } else {
            console.log('Resultado da subtração:', result.SubtractResult);
          }
        });
        break;
      case 'multiplicar':
        client.Multiply(args, function(err, result) {
          if (err) {
            console.error('Erro ao chamar método SOAP:', err);
          } else {
            console.log('Resultado da multiplicação:', result.MultiplyResult);
          }
        });
        break;
      case 'dividir':
        client.Divide(args, function(err, result) {
          if (err) {
            console.error('Erro ao chamar método SOAP:', err);
          } else {
            console.log('Resultado da divisão:', result.DivideResult);
          }
        });
        break;
      default:
        console.error('Operação inválida. Use "adicionar", "subtrair", "multiplicar" ou "dividir".');
    }
  }
});
