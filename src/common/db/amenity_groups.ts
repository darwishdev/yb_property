import { BaseTable } from '@/db/base';
import type { AmenityGroup } from '@/db/types';
import db from '@/db/init';

export class PropertyTypeTable extends BaseTable<AmenityGroup> {
    constructor() {
        super(db.amenityGroups);
    }

    private static instance: PropertyTypeTable;

    public static getInstance(): PropertyTypeTable {
        if (!PropertyTypeTable.instance) {
            PropertyTypeTable.instance = new PropertyTypeTable();
        }
        return PropertyTypeTable.instance;
    }
}
export default PropertyTypeTable.getInstance();
