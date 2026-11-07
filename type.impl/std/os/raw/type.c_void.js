(function() {
    var type_impls = Object.fromEntries([["glow",[]],["mozjs_sys",[]],["rfd",[]],["x11_dl",[]],["xkbcommon_dl",[]]]);
    if (window.register_type_impls) {
        window.register_type_impls(type_impls);
    } else {
        window.pending_type_impls = type_impls;
    }
})()
//{"start":55,"fragment_lengths":[11,17,11,14,20]}