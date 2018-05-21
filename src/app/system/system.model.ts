export interface System {
    id: string;
    name: string;
    type: 'solar' | 'eolic' | 'geothermal' | 'marine';
    lat?: number;
    long?: number;
    verifyOn?: Date;
    status: 'active' | 'inactive' | 'alert';
}
