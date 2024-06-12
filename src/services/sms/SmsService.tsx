/* eslint-disable prettier/prettier */
import SendSMS from 'react-native-sms';

export class SmsService {
  enviarMensagem(numero: string, mensagem: string): void {
    SendSMS.send(
      {
        body: mensagem,
        recipients: [numero],
        allowAndroidSendWithoutReadPermission: true,
      },
      (completed, cancelled, error) => {
        if (completed) {
          console.log('SMS enviado com sucesso!');
        } else if (cancelled) {
          console.log('Envio de SMS cancelado');
        } else if (error) {
          console.error('Erro ao enviar SMS:', error);
        }
      }
    );
  }
}
