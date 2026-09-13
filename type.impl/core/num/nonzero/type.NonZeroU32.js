(function() {
    var type_impls = Object.fromEntries([["quick_cache",[]],["rustix",[]],["tiny_skia",[]],["tiny_skia_path",[]]]);
    if (window.register_type_impls) {
        window.register_type_impls(type_impls);
    } else {
        window.pending_type_impls = type_impls;
    }
})()
//{"start":55,"fragment_lengths":[18,14,17,22]}