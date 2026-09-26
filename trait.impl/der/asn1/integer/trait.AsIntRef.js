(function() {
    const implementors = Object.fromEntries([["der",[]],["ed25519_dalek",[]],["ml_dsa",[]]]);
    if (window.register_implementors) {
        window.register_implementors(implementors);
    } else {
        window.pending_implementors = implementors;
    }
})()
//{"start":59,"fragment_lengths":[10,21,14]}