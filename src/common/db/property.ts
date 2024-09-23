import { BaseTable } from '@/db/base';
import type { PropertyFindRow } from '@/db/types';
import { PropertyFindFilteredResponse } from '@buf/ahmeddarwish_abc-api.bufbuild_es/abc/v1/properties_property_filters_pb';

import db from '@/db/init'
class PropertyTable extends BaseTable<PropertyFindRow> {
    constructor() {
        super(db.singleProperties);
    }

    async findProperty(recordId: number, key: string) {
        const records = await this.readWithExpiryFiltered({ recordId, key });
        return records;
    }

    async addProperty(record: PropertyFindFilteredResponse, key: string) {
        const records = await this.addWithExpiry({
            recordId: record.propertyId,
            key,
            record
        });
        return records;
    }

    private static instance: PropertyTable;

    public static getInstance(): PropertyTable {
        if (!PropertyTable.instance) {
            PropertyTable.instance = new PropertyTable();
        }
        return PropertyTable.instance;
    }
}


export default PropertyTable.getInstance();