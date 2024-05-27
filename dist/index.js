import { file2imagedata } from './convert.js';
import _init, { to_avif } from './core/encoder.js';


export default class Avif {
    constructor() {
        this.name = 'Avif';
        this.initialized = false;
    }

    async init() {
        const result = await _init();

        this.initialized = true;
        return result;
    }

    async encode_from_pixels(pixels, { quality = 60, speed = 4, debug = false } = {}) {
        if (!this.initialized) {
            return null;
        }
        if (!(pixels instanceof ImageData)) {
            throw new Error();
        }

        return to_avif(
            pixels.data,
            pixels.width,
            pixels.height,
            quality,
            speed,
            debug
        );
    }

    async encode_from_file(file, { quality = 60, speed = 4, debug = false } = {}) {
        if (!this.initialized) {
            return null;
        }
        if (!(file instanceof File)) {
            throw new Error();
        }

        const pixels = await file2imagedata(file);

        return await this.encode_from_pixels(pixels, { quality, speed, debug });
    }

    async encode(file, { quality = 60, speed = 4, debug = false } = {}) {
        if (!this.initialized) {
            return null;
        }

        return await this.encode_from_file(file, { quality, speed, debug });
    }
}
