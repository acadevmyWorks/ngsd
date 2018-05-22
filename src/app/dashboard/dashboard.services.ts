import { Injectable } from '@angular/core';

@Injectable()
export class DashboardService {
    private _cards = [
        { title: 'Benvenuto!', cols: 2, rows: 1, component: { type: 'welcome', data: { name: 'Francesco Sciuti' } } },
        {
            title: 'Widget Grafico Impianti',
             cols: 1,
             rows: 1,
             component: {
                  type: 'chart',
                  data: {
                      title: 'Un grafico a barre',
                      type: 'bar',
                      series: [
                          { name: 'Ore di Attività', data: [1, 2, 3] },
                          { name: 'Ore di Intattività', data: [4, 6, 7] }
                      ] }
            }
        },
        {
            title: 'Widget Elenco Impianti',
            cols: 1,
            rows: 1,
            component: { 
                type: 'log-grid',
                data: {
                    dataSourceRecords: [
                        {id: '12346', name: 'Impianto 2', type: 'solar', status: 'active'},
                        {id: '12347', name: 'Impianto 3', type: 'solar', status: 'active'},
                        {id: '12348', name: 'Impianto 4', type: 'solar', status: 'active'}
                    ]
                }
            }
        },
        {
            title: 'Card 2',
            cols: 1,
            rows: 1,
            component: {
                type: 'chart',
                data: {
                    title: 'Un altro grafico a barre',
                    type: 'bar',
                    series: [
                        { name: 'Impianti Attivi', data: [13, 42, 3] },
                        { name: 'Impianti Inattivi', data: [14, 6, 57] }
                    ] }
            }
        },
        {
            title: 'Card 4',
            cols: 1,
            rows: 1,
            component: { 
                type: 'log-grid',
                data: {
                    dataSourceRecords: [
                        {id: '12346', name: 'Impianto 1', type: 'solar', status: 'active'},
                        {id: '12347', name: 'Impianto 7', type: 'solar', status: 'active'},
                        {id: '12348', name: 'Impianto 8', type: 'solar', status: 'active'}
                    ]
                }
            }
        }
    ];

    constructor() {}

    getCards() {
        return [...this._cards];
    }
}
