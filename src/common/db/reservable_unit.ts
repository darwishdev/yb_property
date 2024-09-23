import { BaseTable } from '@/db/base';
import type { ReservableUnitFindRow } from '@/db/types';
import type { Table } from 'dexie';
import db from './init';
import { ReservableUnitFindFilteredResponse } from '@buf/ahmeddarwish_abc-api.bufbuild_es/abc/v1/properties_property_filters_pb';

export class ReservableUnitTable extends BaseTable<ReservableUnitFindRow> {
    constructor() {
        super(db.singleReservableUnits);
    }
    async findReservableUnit(recordId: number, key: string) {
        const records = await this.readWithExpiryFiltered({ key, recordId });
        return records;
    }

    async addReservableUnit(record: ReservableUnitFindFilteredResponse, key: string) {
        const records = await this.addWithExpiry({
            recordId: record.reservableUnitId,
            key,
            record
        });
        return records;
    }
    private static instance: ReservableUnitTable;

    public static getInstance(): ReservableUnitTable {
        if (!ReservableUnitTable.instance) {
            ReservableUnitTable.instance = new ReservableUnitTable();
        }
        return ReservableUnitTable.instance;
    }
}
export default ReservableUnitTable.getInstance();
