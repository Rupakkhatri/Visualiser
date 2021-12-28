// 3rd party
import { List, Map } from "immutable";

// project dependencies
import { DrumInstrument } from './instruments/rupakkhatri';
import { SquaresVisualizer } from './visualizers/rupakkhatri';


/** ------------------------------------------------------------------------ **
 * The entire application state is stored in AppState.
 ** ------------------------------------------------------------------------ */

/**
 * Observation: pure map (compare and contrast with impure map)
 *
 * 'instrument': Instrument
 * 'visualizer': Visualizer
 */
export type AppState = Map<string, any>;

const instruments = List([
 
  DrumInstrument,
 

]);
const visualizers = List([
  
  SquaresVisualizer,
 

]);
export const defaultState: AppState = Map<string, any>({
  instruments,
  visualizers,
});
