(function() {
    var type_impls = Object.fromEntries([["crossbeam_channel",[]],["crossbeam_deque",[]],["wgpu_hal",[]]]);
    if (window.register_type_impls) {
        window.register_type_impls(type_impls);
    } else {
        window.pending_type_impls = type_impls;
    }
})()
//{"start":55,"fragment_lengths":[24,23,16]}