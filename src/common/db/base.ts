import type { Table } from 'dexie';
import type { DexieTableMultiple, DexieTableSingle } from '@/db/types';

export class BaseTable<T extends DexieTableMultiple<any> | DexieTableSingle<any>> {
    protected table: Table<T>;

    constructor(table: Table<T>) {
        this.table = table;
    }

    async addWithExpiry(record: T, cacheTimeout?: number): Promise<void> {
        record = this.setExpiry(record, cacheTimeout);
        await this.table.add(record);
    }

    async addWithExpiryBulk(context: { record: T, cacheTimeout?: number }[]): Promise<void | Error> {
        for (let currentIndex = 0; currentIndex < context.length; currentIndex++) {
            const { record, cacheTimeout } = context[currentIndex];
            try {
                await this.addWithExpiry(record, cacheTimeout);
            } catch (error) {
                return Error(`failed to insert record:${error}`);
            }
        }
    }

    async readWithExpiryCheck(dbRecords: T[]): Promise<T | null> {
        if (dbRecords.length === 0) {
            return null;
        }
        const record = dbRecords[0];
        const expirationTime = record.expiredAt!;
        if (expirationTime < new Date()) {
            this.table.delete(record.id);
            return null;
        }
        return record;
    }

    async readWithExpiry(): Promise<T | null> {
        const dbRecords = await this.table.toArray();
        return await this.readWithExpiryCheck(dbRecords);
    }

    async readWithExpiryFiltered(filterObject: Record<string, any>): Promise<T | null> {
        const dbRecords = await this.table.where(filterObject).toArray();
        return await this.readWithExpiryCheck(dbRecords);
    }



    setExpiry(record: T, cacheTimeout?: number): T {
        const expirationTime = new Date();
        const hours = cacheTimeout ? cacheTimeout : 12;
        expirationTime.setHours(expirationTime.getHours() + hours);
        return { ...record, expiredAt: expirationTime };
    }
}
