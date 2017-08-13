'use strict';

import mongoose from 'mongoose';
import {registerEvents} from './thing.events';

var ThingSchema = new mongoose.Schema({
  name: String,
  info: String,
  lat: { type: Number, min: -180, max: 180 },
  long: { type: Number, min: -180, max: 180 },
  active: Boolean
});

registerEvents(ThingSchema);
export default mongoose.model('Thing', ThingSchema);
