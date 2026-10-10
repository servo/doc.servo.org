(function() {
    const implementors = Object.fromEntries([["ed25519",[]],["ed25519_dalek",[]],["ed448",[]],["ml_dsa",[]],["ml_kem",[]],["pkcs8",[]],["spki",[]]]);
    if (window.register_implementors) {
        window.register_implementors(implementors);
    } else {
        window.pending_implementors = implementors;
    }
})()
//{"start":59,"fragment_lengths":[14,21,13,14,14,13,12]}