(function() {
    const implementors = Object.fromEntries([["ed25519_dalek",[]],["ml_dsa",[]],["spki",[]]]);
    if (window.register_implementors) {
        window.register_implementors(implementors);
    } else {
        window.pending_implementors = implementors;
    }
})()
//{"start":59,"fragment_lengths":[20,14,12]}