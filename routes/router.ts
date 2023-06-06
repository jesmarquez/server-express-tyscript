import { Router, Request, Response } from 'express';

export const router = Router();

router.get('/mensajes', ( req: Request, res: Response) => {
    res.json({
        ok: true,
        mensaje: 'It is ok'
    });
})

router.post('/mensajes/:id', (req: Request, res: Response) => {

    const cuerpo = req.body.cuerpo;
    const de = req.body.de;

    const id = req.params.id;

    res.send({
        ok: true,
        id,
        cuerpo,
        de
    })
})