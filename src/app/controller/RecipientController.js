import * as Yup from 'yup';
import Recipient from '../model/Recipient';

class RecipientController {
    async index(req, res) {
        const recipients = await Recipient.findAll();

        return res.json(recipients);
    }

    async store(req, res) {
        const schema = Yup.object().shape({
            name: Yup.string().required(),
            street: Yup.string().required(),
            number: Yup.number().required(),
            zip_code: Yup.number().required(),
            city: Yup.string().required(),
            country: Yup.string().required(),
            complement: Yup.string(),
        });

        if (!(await schema.isValid(req.body))) {
            return res.status(400).json({ error: 'Vadiation fails' });
        }

        const recipient = await Recipient.create(req.body);

        return res.json(recipient);
    }

    async update(req, res) {
        const schema = Yup.object().shape({
            name: Yup.string(),
            street: Yup.string(),
            number: Yup.number(),
            zip_code: Yup.number(),
            city: Yup.string(),
            country: Yup.string(),
            complement: Yup.string(),
        });

        if (!(await schema.isValid(req.body))) {
            return res.status(400).json({ error: 'Vadiation fails' });
        }

        const { id } = req.params;

        const recipient = await Recipient.findByPk(id);

        if (!recipient) {
            return res.status(401).json({ error: 'Recipient does not exist' });
        }

        await recipient.update(req.body);

        return res.json(recipient);
    }
}

export default new RecipientController();
