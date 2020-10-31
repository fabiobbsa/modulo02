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
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  secure: false,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
  default: {
    from: 'Equipe GoBarber <noreply@gobarber.com>',
  },
};
