import { DataTypes, Model, Optional } from "sequelize";
import connectDB from "../../config/connectDB";

interface DistrictAttributes {
  id?: number;
  id_regency?: number;
  name?: string;

  createdAt?: Date;
  updatedAt?: Date;
}

export interface RoleInput extends Optional<DistrictAttributes, "id"> {}
export interface RoleOutput extends Required<DistrictAttributes> {}

class District
  extends Model<DistrictAttributes, RoleInput>
  implements DistrictAttributes
{
  public id!: number;
  public id_regency!: number;
  public name!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

District.init(
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    id_regency: {
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

export default District;
