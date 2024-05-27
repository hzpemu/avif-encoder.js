use wasm_bindgen::prelude::*;


#[wasm_bindgen]
extern "C" {
    #[wasm_bindgen(js_namespace=console)]
    fn debug(s: &str);
}


#[wasm_bindgen]
pub fn to_avif(
    d: &js_sys::Uint8ClampedArray,
    w: &js_sys::Number,
    h: &js_sys::Number,
    q: &js_sys::Number,
    s: &js_sys::Number,
    m: &js_sys::Boolean
) -> js_sys::Uint8Array {

    let debug_mode = m.value_of();


    let width = unsafe { w.value_of().to_int_unchecked::<u32>() };
    let height = unsafe { h.value_of().to_int_unchecked::<u32>() };

    if debug_mode {
        debug("width:");
        debug( &( width.to_string() ) );
        debug("height:");
        debug( &( height.to_string() ) );
    }


    let quality = q.value_of() as f32;
    let speed = unsafe { s.value_of().to_int_unchecked::<u8>() };

    if debug_mode {
        debug("quality:");
        debug( &( quality.to_string() ) );
        debug("speed:");
        debug( &( speed.to_string() ) );
    }


    let mut input: Vec<ravif::RGBA8> = Vec::new();
    for y in 0..height {
        for x in 0..width {
            let i = (y * 4) * width + (x * 4);

            input.push(
                ravif::RGBA8::new(
                    d.get_index(i),
                    d.get_index(i + 1),
                    d.get_index(i + 2),
                    d.get_index(i + 3)
                )
            );
        }
    }

    let encoder = ravif::Encoder::new()
                                 .with_quality( quality )
                                 .with_speed( speed );
    let data = encoder.encode_rgba(
                    ravif::Img::new(
                        &input,
                        width.try_into().unwrap(),
                        height.try_into().unwrap()
                    )
                )
                .unwrap();

    let output = js_sys::Uint8Array::new_with_length( data.avif_file.len().try_into().unwrap() );

    if debug_mode {
        debug("size:");
        debug( &( data.avif_file.len().to_string() ) );
        debug("color_byte_size:");
        debug( &( data.color_byte_size.to_string() ) );
        debug("alpha_byte_size:");
        debug( &( data.alpha_byte_size.to_string() ) );
    }


    // output.copy_from( &( res.unwrap().avif_file ) );
    for (i, &a) in data.avif_file.iter().enumerate() {
        output.set_index(i.try_into().unwrap(), a);
    }


    return output;
}
