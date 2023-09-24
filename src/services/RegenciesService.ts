import { Request, Response } from "express";
import Regency from "../models/models/Regencies";
import Province from "../models/models/Provinces";

export default new (class RegenciesServices {
  async find(req: Request, res: Response): Promise<Response> {
    try {
      const id: number = Number(req.params.id);

      const allData = await Regency.findAll();
      const data = allData.filter((data) => data.dataValues.id_province === id);

      if (data.length <= 0) {
        return res.status(201).json({ message: "empty data" });
      }
      return res.status(200).json({ regencies: data });
    } catch (error) {
      return res
        .status(500)
        .json({ message: "something when wrong with find all regencies" });
    }
  }

  async create(req: Request, res: Response): Promise<Response> {
    try {
      const { province, name } = req.body;

      const dataProvince = await Province.findOne({
        where: {
          name: province,
        },
      });
      //   console.log(dataProvince?.dataValues.id);
      if (!dataProvince) {
        return res.status(404).json({ message: "cannot find a provice" });
      }

      const id_province = dataProvince?.dataValues.id;

      const newData = await Regency.create(
        { name, id_province, createdAt: new Date(), updatedAt: new Date() },
        { fields: ["name", "id_province", "createdAt", "updatedAt"] }
      );
      return res.status(200).json({ message: newData });
    } catch (error) {
      return res.status(500).json({ message: error });
    }
  }
  async delete(req: Request, res: Response): Promise<Response> {
    try {
      const id: number = Number(req.params.id);

      const data = await Regency.findByPk(id);

      if (!data) {
        return res.status(404).json({ message: "cannot find id" });
      }

      await data?.destroy();

      return res.status(200).json({ message: "success to delete data" });
    } catch (error) {
      return res
        .status(500)
        .json({ message: "something when wrong to delete Regency data" });
    }
  }
  async update(req: Request, res: Response): Promise<Response> {
    try {
      const id: number = Number(req.params.id);

      const dataRegency = await Regency.findByPk(id);
      if (!dataRegency) {
        return res
          .status(404)
          .json({ message: `cannot find data regencies with ${id} ` });
      }
      const newData = req.body;
      const updateData = {
        ...newData,
        updatedAt: new Date(),
      };
      const data = await dataRegency?.update(updateData);
      return res.status(200).json({ message: data });
    } catch (error) {
      return res
        .status(500)
        .json({ message: "something when wrong to update data Regencies" });
    }
  }
})();
