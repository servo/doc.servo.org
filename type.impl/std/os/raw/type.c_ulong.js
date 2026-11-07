(function() {
    var type_impls = Object.fromEntries([["freetype",[]],["libz_sys",[]],["winit",[]],["x11_dl",[]]]);
    if (window.register_type_impls) {
        window.register_type_impls(type_impls);
    } else {
        window.pending_type_impls = type_impls;
    }
})()
//{"start":55,"fragment_lengths":[15,16,13,14]}