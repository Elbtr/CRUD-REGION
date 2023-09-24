import { DataTypes, Model, Optional } from "sequelize";
import connectDB from "../../config/connectDB";

interface VillageAttributes {
  id?: number;
  id_village?: number;
  name?: string;

  createdAt?: Date;
  updatedAt?: Date;
}

export interface RoleInput extends Optional<VillageAttributes, "id"> {}
export interface RoleOutput extends Required<VillageAttributes> {}

class Village
  extends Model<VillageAttributes, RoleInput>
  implements VillageAttributes
{
  public id!: number;
  public id_village!: number;
  public name!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Village.init(
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    id_village: {
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

export default Village;
