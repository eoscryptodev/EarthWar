import { PlayerState } from '../../../Shared/interfaces/interfaces';

/**
 * Initial Player State after the player is logged in. Launched by Boot State.
 */
export const initialPlayerState: PlayerState = {
  players: null,
  loggedIn: false
};
