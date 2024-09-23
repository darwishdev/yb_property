import type { PropertyFindFilteredResponse, ReservableUnitFindFilteredResponse, PropertiesListAmenityGroup } from '@buf/ahmeddarwish_abc-api.bufbuild_es/abc/v1/properties_property_filters_pb';
import { SUPPORTED_LOCALES_TYPE } from '../i18n/i18n';
export interface DexieTableMultiple<RecordsType> {
    id?: number
    expiredAt?: Date
    key?: string
    records: RecordsType[]
}
export interface DexieTableSingle<RecordType> {
    id?: number | string
    recordId: number
    expiredAt?: Date
    key?: string
    record: RecordType
}

export interface Icon {
    id?: number
    iconName: string
    iconContent: string
}
export type ThemeDefaults = {
    id?: number
    darkMode?: boolean
    preferedLocale?: SUPPORTED_LOCALES_TYPE

}
export interface AmenityGroup extends DexieTableMultiple<PropertiesListAmenityGroup> { }
export interface PropertyFindRow extends DexieTableSingle<PropertyFindFilteredResponse> { }
export interface ReservableUnitFindRow extends DexieTableSingle<ReservableUnitFindFilteredResponse> { } 
