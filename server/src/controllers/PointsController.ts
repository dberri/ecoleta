import knex from '../database/connection';
import { Request, Response } from 'express';

class PointsController {
  async create(req: Request, res: Response) {
    const {
      name,
      email,
      whatsapp,
      latitude,
      longitude,
      city,
      uf,
      items
    } = req.body;

    const trx = await knex.transaction();

    const point = {
      image: 'image.fake',
      name,
      email,
      whatsapp,
      latitude,
      longitude,
      city,
      uf,
    };
    const ids = await trx('points').insert(point);

    const pointItems = items.map((item_id: Number) => ({
      item_id,
      point_id: ids[0]
    }))
    await trx('point_items').insert(pointItems)

    trx.commit()

    return res.json({ id: ids[0], ...point });
  }
}

export default PointsController;