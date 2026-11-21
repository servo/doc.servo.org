(function() {
    var type_impls = Object.fromEntries([["ed448_goldilocks",[]],["p256",[]],["p384",[]],["p521",[]]]);
    if (window.register_type_impls) {
        window.register_type_impls(type_impls);
    } else {
        window.pending_type_impls = type_impls;
    }
})()
//{"start":55,"fragment_lengths":[23,12,12,12]}