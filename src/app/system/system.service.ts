import { Injectable } from '@angular/core';
import { System } from './system.model';
import { Subject, BehaviorSubject, Observable } from 'rxjs';
import { AngularFirestore } from 'angularfire2/firestore';
import { map } from 'rxjs/operators';

@Injectable()
export class SystemService {
    availableSystems = new Subject<System[]>();
    activatedSystem = new BehaviorSubject<System>(undefined);
    systemMarkers = new Subject<{lat: number, long: number}[]>();

    // TODO: Expose all Subject as Observable ;)
    activatedSystemObservable: Observable<System> = this.activatedSystem.asObservable();

    systems: System[];
    activeSystem: System | undefined;

    constructor( private db: AngularFirestore) {}

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
        ).subscribe(result => {
            this.systems = <System[]>result;
            this.availableSystems.next([...this.systems]);
            this.systemMarkers.next(this.getMarkers());
            this.setActiveSystem(this.activeSystem);
        });
    }

    setActiveSystem(system: System) {
        this.activeSystem = (system) ? this.systems.find(ex => ex.id === system.id) : undefined;
        this.activatedSystem.next({...this.activeSystem});
    }

    private getMarkers() {
        return [...<{lat: number, long: number}[]>this.systems.map((system: System) => ({lat: system.lat, long: system.long}))];
    }

    getGraphs(system: System) {
      return ( system ) ? system.graphs : false;
    }

}
