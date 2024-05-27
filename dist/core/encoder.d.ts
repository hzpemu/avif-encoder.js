/* tslint:disable */
/* eslint-disable */
/**
* @param {Uint8ClampedArray} d
* @param {number} w
* @param {number} h
* @param {number} q
* @param {number} s
* @param {boolean} m
* @returns {Uint8Array}
*/
export function to_avif(d: Uint8ClampedArray, w: number, h: number, q: number, s: number, m: boolean): Uint8Array;

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly to_avif: (a: number, b: number, c: number, d: number, e: number, f: number) => number;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;
/**
* Instantiates the given `module`, which can either be bytes or
* a precompiled `WebAssembly.Module`.
*
* @param {SyncInitInput} module
*
* @returns {InitOutput}
*/
export function initSync(module: SyncInitInput): InitOutput;

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {InitInput | Promise<InitInput>} module_or_path
*
* @returns {Promise<InitOutput>}
*/
export default function __wbg_init (module_or_path?: InitInput | Promise<InitInput>): Promise<InitOutput>;
