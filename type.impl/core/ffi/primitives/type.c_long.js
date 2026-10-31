(function() {
    var type_impls = Object.fromEntries([["freetype_sys",[]],["glib_sys",[]],["nix",[]],["parking_lot_core",[]]]);
    if (window.register_type_impls) {
        window.register_type_impls(type_impls);
    } else {
        window.pending_type_impls = type_impls;
    }
})()
//{"start":55,"fragment_lengths":[19,16,11,24]}