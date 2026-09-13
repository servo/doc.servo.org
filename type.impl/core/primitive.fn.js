(function() {
    var type_impls = Object.fromEntries([["keccak",[]],["simdutf8",[]],["tikv_jemalloc_sys",[]],["tikv_jemallocator",[]]]);
    if (window.register_type_impls) {
        window.register_type_impls(type_impls);
    } else {
        window.pending_type_impls = type_impls;
    }
})()
//{"start":55,"fragment_lengths":[13,16,25,25]}