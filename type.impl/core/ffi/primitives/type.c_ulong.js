(function() {
    var type_impls = Object.fromEntries([["ash",[]],["freetype_sys",[]],["gilrs_core",[]],["glib_sys",[]],["nix",[]]]);
    if (window.register_type_impls) {
        window.register_type_impls(type_impls);
    } else {
        window.pending_type_impls = type_impls;
    }
})()
//{"start":55,"fragment_lengths":[10,20,18,16,11]}