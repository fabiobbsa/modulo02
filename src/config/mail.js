/**
 * Serviços de smpt para envio de e-mails:
 *  Amazon SES (bom e barato - recomendado)
 *  Mailgun
 *  Sparkpost
 *  Mandril (funaciona somente com Mailchimp)
 *  Gmail (Não é recomendado pois tem um limite e deve bloquear em algum momento)
 *
 * Mailtrap (Funciona somente para testes de desenvolvimento)
 */

export default {
  host: 'smtp.mailtrap.io',
  port: '2525',
  secure: false,
  auth: {
    user: '180fc9b9852cbe',
    pass: '28e737c4c2b234',
  },
  default: {
    from: 'Equipe GoBarber <noreply@gobarber.com>',
  },
};
