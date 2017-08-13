/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
import Thing from '../api/thing/thing.model';
import User from '../api/user/user.model';
import config from './environment/';

//N and E are negative
//NS long
//EW lat

export default function seedDatabaseIfNeeded() {
  if(config.seedDB) {
    Thing.find({}).remove()
      .then(() => {
        let thing = Thing.create({
          name: 'Minneapolis, MN',
          info: 'Stop 1',
          lat: -44.9778,
          long: 93.2650
        }, {
          name: 'Britton, SD',
          info: 'Stop 2',
          lat: -45.7916,
          long: 97.7509
        }, {
          name: 'Paris, France',
          info: 'Stop 3',
          lat: -48.8566,
          long: -2.3522
        }, {
          name: 'Boca Raton, FL',
          info: 'Stop 4',
          lat: -26.3683,
          long: 80.1289
        }, {
          name: 'Shanghai, China',
          info: 'Stop 5',
          lat: -31.2304,
          long: -121.4737
        }, {
          name: 'Paris, France',
          info: 'Stop 6',
          lat: -48.8566,
          long: -2.3522
        }, {
          name: 'Shanghai, China',
          info: 'Stop 7',
          lat: -31.2304,
          long: -121.4737
        },{
          name: 'Los Angeles, CA',
          info: 'Stop 8',
          lat: -34.0522,
          long: 118.2437
        },{
          name: 'Shanghai, China',
          info: 'Stop 9',
          lat: -31.2304,
          long: -121.4737
        }, {
          name: 'Paris, France',
          info: 'Stop 10',
          lat: -48.8566,
          long: -2.3522
        }, {
          name: 'Orlando, Florida',
          info: 'Stop 11',
          lat: -28.5383,
          long: 81.3792
        },{
          name: 'Mountain View, CA',
          info: 'Stop 12',
          lat: -37.3861,
          long: 122.0839
        },{
          name: 'San Francisco, CA',
          info: 'Stop 13',
          lat: -37.7749,
          long: 122.4194
        },{
          name: 'Giraltar',
          info: 'Stop 14',
          lat: -36.1408,
          long: 5.3536
        },{
          name: 'Buenos Aires, Argentina',
          info: 'Stop 15',
          lat: 34.6037,
          long: 58.3816
        },{
          name: 'Mammoth Spring, AR',
          info: 'Stop 16',
          lat: -36.4956,
          long: 91.5407
        }
      );
        return thing;
      })
      .then(() => console.log('finished populating things'))
      .catch(err => console.log('error populating things', err));

    User.find({}).remove()
      .then(() => {
        User.create({
          provider: 'local',
          name: 'Test User',
          email: 'test@example.com',
          password: 'test'
        }, {
          provider: 'local',
          role: 'admin',
          name: 'Admin',
          email: 'admin@example.com',
          password: 'admin'
        })
        .then(() => console.log('finished populating users'))
        .catch(err => console.log('error populating users', err));
      });
  }
}
