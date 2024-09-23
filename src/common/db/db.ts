// db.ts
import type {
    PropertyFindRow,
    ReservableUnitFindRow,
    Icon,
} from '@/common/db/types'

import { BaseTable } from './base';
import Dexie, { type Table } from 'dexie';


export class AppDB extends Dexie {
    // 'cart' is added by dexie when declaring the stores()
    // We just tell the typing system this is the case
    singleProperties!: Table<PropertyFindRow>;
    singleReservableUnits!: Table<ReservableUnitFindRow>;
    icons!: Table<Icon>

    private static instance: AppDB;
    constructor() {
        super('db');
        // const multipleTableS paptructure = '++id , expiredAt , key , records'
        const iconsTableStructure = '++id , iconId , iconName, iconContent'
        const singleTableStructure = '++id , expiredAt , key ,recordId , record'
        this.version(1).stores({
            singleProperties: singleTableStructure,
            singleReservableUnits: singleTableStructure,
            icons: iconsTableStructure,
        });
    }

    async resetDatabase() {
        await this.singleProperties.clear()
        await this.singleReservableUnits.clear()
        await this.icons.clear()
    }
    public static getInstance(): AppDB {
        if (!AppDB.instance) {
            AppDB.instance = new AppDB();
        }
        return AppDB.instance;
    }


}
export default AppDB.getInstance();
