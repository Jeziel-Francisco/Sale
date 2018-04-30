interface IMail {
    smtpConfig: {
        host: string,
        port: number,
        secure: boolean,
        auth: {
            user: string,
            pass: string
        }
    };
    mailOptions: {
        from: string,//'"Jeziel"<jeziel@sys3tecnologia.com.br>'
        to: string, //'giovani@sys3tecnologia.com.br, doretto@sys3tecnologia.com.br',
        subject: string, //'Assunto',
        text: string, //'Corpo do email',
        html: string // HTML do email
    };
}

export { IMail };