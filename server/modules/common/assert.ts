import * as Joi from 'joi';

export const assert = Joi.object().keys(
    {
        amount: Joi.number().positive().precision(3).min(0.001),
        balance: Joi.number().positive().precision(3).min(0.001),
        discount: Joi.number().positive().precision(3).min(0.001),
        factor: Joi.number().positive().precision(3).min(0.001),
        priceCust: Joi.number().positive().precision(3).min(0.001),
        priceDiscount: Joi.number().positive().precision(3).min(0.001),
        priceInterest: Joi.number().positive().precision(3).min(0.001),
        pricePaid: Joi.number().positive().precision(3).min(0.001),
        priceSale: Joi.number().positive().precision(3).min(0.001),
        priceSaleMin: Joi.number().positive().precision(3).min(0.001),
        priceUnit: Joi.number().positive().precision(3).min(0.001),
        priceTotal: Joi.number().positive().precision(3).min(0.001),

        addressId: Joi.number().positive().min(1).integer(),
        cityCode: Joi.number().positive().min(1).integer(),
        clientId: Joi.number().positive().min(1).integer(),
        code: Joi.number().positive().min(1).integer(),
        companyId: Joi.number().positive().min(1).integer(),
        event: Joi.number().positive().min(1).integer(),
        groupId: Joi.number().positive().min(1).integer(),
        id: Joi.number().positive().min(1).integer(),
        packingId: Joi.number().positive().min(1).integer(),
        permissionsId: Joi.number().positive().min(1).integer(),
        productId: Joi.number().min(1).positive().integer(),
        providerId: Joi.number().min(1).positive().integer(),
        receiveId: Joi.number().positive().min(1).integer(),
        saleId: Joi.number().positive().min(1).integer(),
        stateId: Joi.number().positive().min(1).integer(),
        type: Joi.number().positive().integer(),
        userId: Joi.number().min(1).positive().integer(),
        userIdPermissions: Joi.number().positive().min(1).integer(),

        active: Joi.boolean(),

        cancellationDate: Joi.date(),
        closingDate: Joi.date(),
        emissionDate: Joi.date(),
        maturityDate: Joi.date(),
        paymentDate: Joi.date(),
        registrationDate: Joi.date().default(Date.now),

        complement: Joi.string().min(3).max(120),
        contact: Joi.string().min(3).max(120),
        description: Joi.string().min(3).max(120),
        email: Joi.string().alphanum().min(10).max(120).email(),
        history: Joi.string().max(120),
        identification: Joi.string().min(11).max(18),
        initials: Joi.string().min(1).max(3),
        name: Joi.string().alphanum().min(3).max(120),
        nameFatasy: Joi.string().min(5).max(120),
        neighborhood: Joi.string().min(3).max(120),
        note: Joi.string().min(3).max(120),
        number: Joi.string().min(1).max(50),
        page: Joi.string().min(7).max(120),
        password: Joi.string().alphanum().min(6).max(256),
        phone: Joi.string().alphanum().min(8).max(20),
        place: Joi.string().min(5).max(120),
        portion: Joi.string().min(11).max(17),
        reference: Joi.string().min(3).max(120),
        registrationMunicipal: Joi.string().min(3).max(120),
        registrationState: Joi.string().min(5).max(20),
        username: Joi.string().alphanum().min(3).max(30),
        zipCode: Joi.string().min(8).max(8),

    }
);



export const MailSchema = Joi.object().keys(
    {
        smtpConfig: {
            host: Joi.string().min(5).max(500),
            port: Joi.number().positive().integer().min(1),
            secure: Joi.boolean(),
            auth: {
                user: Joi.string().email(),
                pass: Joi.string().min(6).max(256)
            }
        },
        mailOptions: {
            from: Joi.string().email(),//'"Jeziel"<jeziel@sys3tecnologia.com.br>'
            to: Joi.string().min(5).max(500), //'giovani@sys3tecnologia.com.br, doretto@sys3tecnologia.com.br',
            subject: Joi.string().max(500), //'Assunto',
            text: Joi.string(), //'Corpo do email',
            html: Joi.string() // HTML do email
        }
    }
);
