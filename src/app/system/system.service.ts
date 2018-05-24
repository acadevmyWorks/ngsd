import { Injectable } from '@angular/core';
import { System } from './system.model';

import { AngularFirestore } from 'angularfire2/firestore';
import { map } from 'rxjs/operators';

@Injectable()
export class SystemService {
    selectedRow: System;

    constructor( private db: AngularFirestore) {}

    /*private systems: System[] = [
        {id: '12345', name: 'Impianto 1', lat: 7.51714667, long: -28.67447189, type: 'solar', status: 'active'},
        {id: '12346', name: 'Impianto 2', lat: 37.82031061, long: -124.93922902,  type: 'solar', status: 'active'},
        {id: '12347', name: 'Impianto 3', lat: 14.44069909, long: -44.03490318,  type: 'solar', status: 'active'},
        {id: '12348', name: 'Impianto 4', lat: -35.30583218, long: -42.52361246,  type: 'solar', status: 'active'},
        {id: '12349', name: 'Impianto 5', lat: -1.12622253, long: -1.12622253,  type: 'solar', status: 'active'},
    ];*/

    getAllSystems() {
        return this.db.collection('systems').snapshotChanges()
        .pipe(
            map(dataArray => {
                return dataArray.map(doc => {
                    return {
                        id: doc.payload.doc.id,
                        ...doc.payload.doc.data()
                    };
                });
            })
        );
    }

    selectActiveSystem(system: System) {
        this.selectedRow = system;
    }

    deselectActiveSystem() {
        this.selectedRow = null;
    }

    getGraphs(id: string) {
        return [
            {
                type: 'amchart',
                data: {
                id: 'ciccio',
                title: 'Un grafico a barre',
                type: 'bar',
                series: [
                    { name: 'Ore di Attività', data: [1, 2, 3] },
                    { name: 'Ore di Intattività', data: [4, 6, 7] }
                ] }
             },
             {
                type: 'chart',
                data: {
                title: 'Un grafico a torta',
                type: 'area',
                series: [
                    { name: 'Ore di Attività', data: [1, 2, 3] },
                    { name: 'Ore di Intattività', data: [4, 6, 7] }
                ] }
             },
        ];
    }
}
