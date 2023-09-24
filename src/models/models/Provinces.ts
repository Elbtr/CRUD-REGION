import { DataTypes, Model, Optional } from "sequelize";
import connectDB from "../../config/connectDB";

interface ProvinceAttributes {
  id?: number;
  name?: string;

  createdAt?: Date;
  updatedAt?: Date;
}

export interface RoleInput extends Optional<ProvinceAttributes, "id"> {}
export interface RoleOutput extends Required<ProvinceAttributes> {}

class Province
  extends Model<ProvinceAttributes, RoleInput>
  implements ProvinceAttributes
{
  public id!: number;
  public name!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Province.init(
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: true,
    sequelize: connectDB,
    underscored: false,
  }
);

export default Province;
