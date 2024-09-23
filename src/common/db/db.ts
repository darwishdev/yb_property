// db.ts
import type {
    PropertyFindRow,
    ReservableUnitFindRow,
    ThemeDefaults,
    Icon,
} from '@/common/db/types'

import Dexie, { type Table } from 'dexie';
export class AppDB extends Dexie {
    singleProperties!: Table<PropertyFindRow>;
    singleReservableUnits!: Table<ReservableUnitFindRow>;
    icons!: Table<Icon>
    theme!: Table<ThemeDefaults>
    private static instance: AppDB;
    constructor() {
        super('db');
        const iconsTableStructure = '++id , iconId , iconName, iconContent'
        const themeTableStructure = '++id , darkMode , preferedLocale'
        const singleTableStructure = '++id , expiredAt , key ,recordId , record'
        this.version(1).stores({
            singleProperties: singleTableStructure,
            singleReservableUnits: singleTableStructure,
            icons: iconsTableStructure,
            theme: themeTableStructure
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
