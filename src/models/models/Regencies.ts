import { DataTypes, Model, Optional } from "sequelize";
import connectDB from "../../config/connectDB";

interface RegencyAttributes {
  id?: number;
  id_province?: number;
  name?: string;

  createdAt?: Date;
  updatedAt?: Date;
}

export interface RoleInput extends Optional<RegencyAttributes, "id"> {}
export interface RoleOutput extends Required<RegencyAttributes> {}

class Regency
  extends Model<RegencyAttributes, RoleInput>
  implements RegencyAttributes
{
  public id!: number;
  public id_province!: number;
  public name!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Regency.init(
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    id_province: {
      allowNull: false,
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

export default Regency;
